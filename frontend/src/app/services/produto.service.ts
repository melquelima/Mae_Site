import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { AlertService } from './alert.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { SnackBarService } from './snackbar.service';
import { environment } from 'src/environments/environment';
import { Categoria } from '../models/categoria.model';
import { Produto } from '../models/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  baseUrl = environment.base_url + "/api/produto"
  baseUrl2 = environment.base_url

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {
  }

  getProduto(id:string|number): Observable<Produto> {
    const url = this.baseUrl + "/" + id

    const obsRet = this.http.get<Produto>(url, this.authService.httpOptions())

    return this.authService.onRequest(obsRet)
  }

  getProdutos(): Observable<Produto[]> {
    const url = this.baseUrl + "/todos"

    const obsRet = this.http.get<Produto[]>(url, this.authService.httpOptions())

    return this.authService.onRequest(obsRet)
  }

  novo_produto(produto:Produto,capa:FileList,files:FileList):Observable<any>{
    console.log(files)
    let formData:FormData = new FormData();

    if(capa.length){
      console.log("CAPA ADICINADA")
      formData.append('capa', capa[0],capa[0].name);
    }
    
    for(var i=0;i<files.length;i++){
      formData.append('images', files[i],files[i].name);
    }
    var keys = Object.keys(produto);
    keys.forEach( (key) => {
      console.log(key, produto[key])
      var val = typeof produto[key] != 'string'?JSON.stringify(produto[key]):produto[key]
      formData.append(key, val);
  });
    
    const headers = new HttpHeaders()
    headers.append('Content-Type', 'multipart/form-data');

    let params = new HttpParams();
    const options = {
      headers: headers,
      params: params
    };

    //const req = new HttpRequest('POST', 'https://api.imgur.com/3/upload', formData, options);
    const obsRet = this.http.post( this.baseUrl + "/new",formData,this.authService.httpOptions(options));

    return this.authService.onRequest(obsRet)
  }
  
  editar_produto(produto:Produto,files:FileList):Observable<any>{
    console.log(files)
    let formData:FormData = new FormData();
    
    for(var i=0;i<files.length;i++){
      formData.append('images', files[i],files[i].name);
    }
    var keys = Object.keys(produto);
    keys.forEach( (key) => {
      console.log(key, produto[key])
      var val = typeof produto[key] != 'string'?JSON.stringify(produto[key]):produto[key]
      formData.append(key, val);
  });
    
    const headers = new HttpHeaders()
    headers.append('Content-Type', 'multipart/form-data');

    let params = new HttpParams();
    const options = {
      headers: headers,
      params: params
    };

    //const req = new HttpRequest('POST', 'https://api.imgur.com/3/upload', formData, options);
    const obsRet = this.http.post( this.baseUrl + "/" + produto.id + "/edit",formData,this.authService.httpOptions(options));

    return this.authService.onRequest(obsRet)
  }

  delete(id:string|number):Observable<Produto>{
    const url = this.baseUrl + "/" + id
    const obsRet = this.http.delete<Produto>(url, this.authService.httpOptions())

    return this.authService.onRequest(obsRet)
  }


  progress(id:string|number):Observable<any>{
    const url = `${this.baseUrl2}/api/upload/progress/${id}`
    return this.http.get(url)
  }

  getImages(id:string|number):Observable<any>{
    const url =  `${this.baseUrl}/${id}/images`
    const obsRet = this.http.get(url,this.authService.httpOptions())
    return this.authService.onRequest(obsRet)
  }


  deleteImage(id:string|number):Observable<any>{
    const url =  `${this.baseUrl}/image/${id}`
    const obsRet = this.http.delete(url,this.authService.httpOptions())
    return this.authService.onRequest(obsRet)
  }

  changeCover(id:string|number,image:string):Observable<Produto>{
    const url =  `${this.baseUrl}/${id}/cover`
    const data = { "image": image }
    const obsRet = this.http.post(url,data,this.authService.httpOptions())
    return this.authService.onRequest(obsRet)
  }



  


}



