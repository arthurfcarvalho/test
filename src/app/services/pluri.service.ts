import { DadosAtividadesDaComissao } from './../views/pluri/cadastro-pluri/models/DadosAtividadesDaComissao.model';
import { DadosPluriInformacoesGerais } from './../views/pluri/cadastro-pluri/models/DadosPluriInformacoesGerais.model';
import { Injectable } from "@angular/core";
import { TokenService } from "./token.service";
import { HttpClient } from "@angular/common/http";


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

}