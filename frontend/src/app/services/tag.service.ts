import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { AlertService } from './alert.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { SnackBarService } from './snackbar.service';
import { environment } from 'src/environments/environment';
import { Categoria } from '../models/categoria.model';
import { Tag } from '../models/tag.model';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  baseUrl = environment.base_url + "/api/tags"

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {
  }


  getTags(): Observable<Tag[]> {
    const url = this.baseUrl

    const obsRet = this.http.get<Tag[]>(url, this.authService.httpOptions())

    return this.authService.onRequest(obsRet)
  }

  addTag(tag: string): Observable<Tag> {
    const url = this.baseUrl
    const data = { "tag": tag }
    const obsRet = this.http.post<Tag>(url, data, this.authService.httpOptions())

    return this.authService.onRequest(obsRet)
  }

  deleteTag(id:number): Observable<Tag> {
    const url = this.baseUrl + "/" + id
    const obsRet = this.http.delete<Tag>(url, this.authService.httpOptions())

    return this.authService.onRequest(obsRet)
  }



}