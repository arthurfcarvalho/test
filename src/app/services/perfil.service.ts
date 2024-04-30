import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Perfil } from '../models/perfil';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  constructor(private http: HttpClient) { }

  listarPerfis(): Observable<Perfil[]> {
    const url = 'http://localhost:8080/perfil/listar-perfis';
    return this.http.get<Perfil[]>(url);
  }

}
