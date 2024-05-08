import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, catchError, map, Observable } from 'rxjs';
import { Perfil } from '../models/perfil';
import { TokenService } from './token.service';
import { jwtDecode } from 'jwt-decode';
import { CadastroUsuario } from '../models/usuario-cadastro';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private usuarioSubject = new BehaviorSubject<CadastroUsuario | null>(null)

  constructor(private http: HttpClient, private tokenService: TokenService) { 
    if(this.tokenService.possuiToken()){
      this.decodificarJWT();
    }
  }


  decodificarJWT(){
    const token = this.tokenService.retornarToken()
    const usuario = jwtDecode(token) as CadastroUsuario
    this.usuarioSubject.next(usuario)
  }
  retornarUsuario(){
    return this.usuarioSubject.asObservable();
  }
  salvarToken(token: string){
    console.log("Token salvo?", token);
    this.tokenService.salvarToken(token)
    this.decodificarJWT();
  }
  logout(){
    this.tokenService.excluirToken();
    this.usuarioSubject.next(null)
  }
  estaLogado(){
    return this.tokenService.possuiToken()
  }

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

  cadastrar(usuario: CadastroUsuario){
    const url = 'http://localhost:8080/usuario/registrar';
    return this.http.post(url,usuario)
  }
}
