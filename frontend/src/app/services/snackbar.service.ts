import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import * as $ from 'jquery';


@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  
  constructor(
    public toastr: ToastrService
  ) { }


  Success(message:string){
    this.toastr.show(
        '<span class="alert-icon ni ni-bell-55" data-notify="icon"></span> <div class="alert-text"</div> <span class="alert-title" data-notify="title">Perfect!</span> <span data-notify="message">' + message + '</span></div>',
        "",
        {
          timeOut: 4000,
          closeButton: true,
          enableHtml: true,
          tapToDismiss: false,
          titleClass: "alert-title",
          positionClass: "toast-top-center",
          toastClass:
            "ngx-toastr alert alert-dismissible alert-success alert-notify"
        }
      );
  }

  Danger(message:string){
    this.toastr.show(
        '<span class="alert-icon ni ni-bell-55" data-notify="icon"></span> <div class="alert-text"</div> <span class="alert-title" data-notify="title">Oops!</span> <span data-notify="message">' + message + '</span></div>',
        "",
        {
          timeOut: 4000,
          closeButton: true,
          enableHtml: true,
          tapToDismiss: false,
          titleClass: "alert-title",
          positionClass: "toast-top-center",
          toastClass:
            "ngx-toastr alert alert-dismissible alert-danger alert-notify"
        }
      );
  }

  Warning(message:string){
    this.toastr.show(
        '<span class="alert-icon ni ni-bell-55" data-notify="icon"></span> <div class="alert-text"</div> <span class="alert-title" data-notify="title">Hey!</span> <span data-notify="message">' + message + '</span></div>',
        "",
        {
          timeOut: 4000,
          closeButton: true,
          enableHtml: true,
          tapToDismiss: false,
          titleClass: "alert-title",
          positionClass: "toast-top-center",
          toastClass:
            "ngx-toastr alert alert-dismissible alert-warning alert-notify"
        }
      );
  }

  Info(message:string){
    this.toastr.show(
        '<span class="alert-icon ni ni-bell-55" data-notify="icon"></span> <div class="alert-text"</div> <span class="alert-title" data-notify="title"Hey!</span> <span data-notify="message">' + message + '</span></div>',
        "",
        {
          timeOut: 4000,
          closeButton: true,
          enableHtml: true,
          tapToDismiss: false,
          titleClass: "alert-title",
          positionClass: "toast-top-center",
          toastClass:
            "ngx-toastr alert alert-dismissible alert-info alert-notify"
        }
      );
   
  }

  private body(type:string,icon:string){
   
  }

  


  howNotification(){
    var type = ['','info','success','warning','danger'];

  }



}