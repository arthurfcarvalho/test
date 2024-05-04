import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable } from 'rxjs';
import { Perfil } from '../models/perfil';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  buscarUsuarioPorId(id: number): Observable<Usuario> {
    const url = `http://localhost:8080/usuario/listar/${id}`;
    return this.http.get<Usuario>(url);
  }

  atualizarPerfis(id: number, perfis: Perfil[]): Observable<any> {
    const url = 'http://localhost:8080/usuario/atualizar-perfis';
    const dados = { id: id, perfis: perfis };
    return this.http.put(url, dados).pipe(
      map((response: any) => response)
    );
  }
}
