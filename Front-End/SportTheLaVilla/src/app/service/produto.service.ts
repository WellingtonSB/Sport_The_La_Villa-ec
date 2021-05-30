import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  
  token = {
    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token') || '')
  }
}
