import { AlertService } from './alert.service';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Injectable, isDevMode } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map} from 'rxjs/operators';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { SnackBarService } from './snackbar.service';
import {Location} from '@angular/common';
import { environment } from 'src/environments/environment';
import { Auth, StoredCred } from '../models/auth.models';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  baseUrl =  environment.base_url

  constructor(
    private http:HttpClient,
    private route:Router,
    private route2:ActivatedRoute,
    private alertService:AlertService,
    private snackBar:SnackBarService,
    public location: Location
    ) {
      
      console.log(this.route.routerState.snapshot,isDevMode())
      console.log(this.baseUrl)
   }


   login(user:string,password:string):Observable<Auth>{

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa(user + ":" + password)
      })
    };
    console.log(this.baseUrl)
    return this.http.get<Auth>(this.baseUrl + "/login",httpOptions).pipe(map(e => {
      window.localStorage.setItem("auth",JSON.stringify(e))
      return e
    }),catchError((err) => {
        this.snackBar.Danger(err.error)
  
        return throwError(err);
      }))

    //return this.onRequest(ret)
  }

  stored_credentials():StoredCred{
    var stored = window.localStorage.getItem('stored');
    var data :StoredCred = {user:"",pwd:""}
    if(!stored){
      return data
    }
    return data=JSON.parse(stored)
  }

  store_credentials(login,pwd):void{
    var data :StoredCred = {user:login,pwd:pwd}
    window.localStorage.setItem("stored",JSON.stringify(data))
  }
  remove_stored_credentials():void{
    window.localStorage.removeItem("stored");
  }

  logout():void{
    this.alertService.closeLoading()
    window.localStorage.removeItem("auth");
    //alert(this.route.url)
    const ret = this.route.url.includes("logout")?{}:{ queryParams: { returnUrl:this.location.path()}}
    this.route.navigate(['auth/login'],ret);
  }


  token():string{
    var auth = window.localStorage.getItem('auth');
    if(!auth){
      this.logout()
    }
    if(!this.isJsonString(auth)){
      this.logout()
    }
    const auth2:Auth=JSON.parse(auth)
    return auth2.token
  }

  httpOptions(headers={}):any {
    const tkn = {'token': this.token()}
    const hdr = Object.assign(tkn,headers)
    return { headers: new HttpHeaders(hdr)}
  }


  validateSession():Observable<any>{
    const auth = window.localStorage.getItem('auth');
    if(!auth){
      return of({"status":false,"message":"invalid token!"});
    }
    if(!this.isJsonString(auth)){
      return of({"status":false,"message":"invalid token!"});
    }
    const Oauth:Auth=JSON.parse(auth)

    const url = `${this.baseUrl}/sessionActive/${Oauth.token}`
    return this.http.get(url)

  }

  isJsonString(str):boolean {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
  }

  getUser():Auth{
    const auth = window.localStorage.getItem('auth');
    return JSON.parse(auth)
  }


  onRequest(ob:Observable<any>):Observable<any>{
    return ob.pipe(map(e => {
      return e
    }),
    catchError((err) => {
      if(err.status == 401){
        console.log(err)
        this.logout()
        this.snackBar.Danger("Session expired!")
        return throwError("Session expired!");//of(undefined)
      }else{
        this.alertService.closeLoading()
        this.snackBar.Danger(this.httpError(err))
      }

      return throwError(err);
    }))
  }

  httpError(err):string{
    var message = err.message
    if(typeof err.error == "string"){
        return err.error
    }
    return message
  }

}