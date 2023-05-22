import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { AlertService } from './alert.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { SnackBarService } from './snackbar.service';
import { environment } from 'src/environments/environment';
import { Categoria } from '../models/categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  baseUrl = environment.base_url + "/api/categorias"

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {
  }


  getCategorias(): Observable<Categoria[]> {
    const url = this.baseUrl

    const obsRet = this.http.get<Categoria[]>(url, this.authService.httpOptions())

    return this.authService.onRequest(obsRet)
  }

  addCategoria(categoria: string, tipo: string): Observable<Categoria> {
    const url = this.baseUrl
    const data = { "categoria": categoria,"tipo":tipo }
    const obsRet = this.http.post<Categoria>(url, data, this.authService.httpOptions())

    return this.authService.onRequest(obsRet)
  }

  deleteCategoria(id:number): Observable<Categoria> {
    const url = this.baseUrl + "/" + id
    const obsRet = this.http.delete<Categoria>(url, this.authService.httpOptions())

    return this.authService.onRequest(obsRet)
  }



}