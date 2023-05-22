import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { SnackBarService } from '../services/snackbar.service';
import { Observable, of } from 'rxjs';
import { catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private route:Router,
    private authService:AuthService,
    private snackBar:SnackBarService
    ){}


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | Observable<boolean>{


      return this.authService.validateSession().pipe(map(e => {
        if(e.status){
          return true
        }else{
          this.authService.logout()
          return e.status
        }
      }),
      catchError((err) => {
        this.snackBar.Danger("Sessão expirada!")
        this.authService.logout()
        return of(false);
      }))
    }


  }