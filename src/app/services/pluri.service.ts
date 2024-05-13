import { DadosAtividadesDaComissao } from '../views/pluri/models/DadosAtividadesDaComissao.model';
import { DadosPluriInformacoesGerais } from '../views/pluri/models/DadosPluriInformacoesGerais.model';
import { Injectable } from "@angular/core";
import { TokenService } from "./token.service";
import { HttpClient } from "@angular/common/http";
import { DadosDetalhamentoPluri } from '../views/pluri/models/DadosDetalhamentoPluri.model';
import { catchError, map, Observable } from 'rxjs';
import { ApiResponsePage } from '../models/api-response-page.model';
import { Pluri } from '../views/pluri/models/Pluri.model';


@Injectable({
    providedIn: 'root'  
})
export class PluriService{
    
    baseUrl = "http://localhost:8080/pluri"
    constructor(private http: HttpClient, private tokenService: TokenService) { }

    criarPluri(dados: DadosPluriInformacoesGerais){
        const url = this.baseUrl + '/criar-pluri'
        return this.http.post(url, dados);
    }
    atualizarInformacoesComissao(dados: DadosAtividadesDaComissao){
        const url = this.baseUrl + '/atualizar-atividades-comissao'
        return this.http.put(url, dados);
    }
    listarPlurisNaoRealizados(): Observable<ApiResponsePage>{
        const url = this.baseUrl + '/listar-pluris-nao-realizados'
        return this.http.get<ApiResponsePage>(url).pipe(
            map(obj => obj))
    }
    listarPorId(id: number){
        const url = this.baseUrl + `/listar-pluri/${id}`;

        return this.http.get<Pluri>(url).pipe(
            map(obj => obj)
        )
    }
    editar(){
        
    }
}