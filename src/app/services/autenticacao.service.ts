import { UsuarioService } from 'src/app/services/usuario.service';
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from 'rxjs';
import { AutenticacaoLogin } from '../models/login';


interface AutenticacaoResposta{
    token: string
}

@Injectable({
    providedIn: 'root'
})

export class AutenticacaoService{
    
    baseUrl = 'http://localhost:8080/usuario/';

    constructor(private http: HttpClient, private usuarioService :UsuarioService){

    }

    autenticar(login: AutenticacaoLogin): Observable<HttpResponse<AutenticacaoResposta>> {
        const url = this.baseUrl + 'login';
        return this.http.post<AutenticacaoResposta>(url, login, { observe: 'response' }).pipe(
            tap(response => {
                console.log("Entrou no autenticador");
                const authtoken = response.body?.token || '';
                this.usuarioService.salvarToken(authtoken);
            })
        );
    }
    
}