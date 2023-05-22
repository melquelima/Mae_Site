import { environment } from 'src/environments/environment';
import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { SnackBarService } from 'src/app/services/snackbar.service';
import { AlertService } from 'src/app/services/alert.service';
import { Auth } from 'src/app/models/auth.models';

@Component({
  selector: "app-login",
  templateUrl: "login.component.html",
  styleUrls: ["login.style.css"]
})
export class LoginComponent implements OnInit {

  returnUrl:string
  focus;
  focus1;
  username:string=""
  password:string=""
  lembrar:boolean = false

  constructor(
    private authService:AuthService,
    private snackBar:SnackBarService,
    private router:Router,
    private alertservice:AlertService,
    private route:ActivatedRoute
  ) {
   console.log("production :" + environment.production)
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/produtos/pesquisar';

    var cred = this.authService.stored_credentials();
    if(cred.user != ""){
      this.username = cred.user
      this.password = cred.pwd
      this.lembrar = true
    }
    
    //this.router.navigate(['dashboards/dashboard']);
  }

  login(){
  
    if(this.username.trim()==""){
      return this.snackBar.Warning("Please insert a valid user!")
    }
    if(this.password.trim()==""){
      return this.snackBar.Warning("Please insert a password!")
    }
  
    this.authService.login(this.username,this.password).subscribe((auth:Auth)=>{
        // console.log(auth)
        this.snackBar.Success("Logged in!")
        console.log(this.returnUrl)
        if(this.lembrar){
          this.authService.store_credentials(this.username,this.password)
        }else{
          this.authService.remove_stored_credentials()
        }
        this.router.navigate([this.returnUrl]);
        // this.router.navigateByUrl(this.returnUrl);
    })
  }

}