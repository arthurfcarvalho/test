import { Injectable } from "@angular/core";


const KEY = 'token'

@Injectable({
    providedIn: 'root'  
})
export class TokenService{
    
    salvarToken(token: string){
        return localStorage.setItem(KEY, token);
    }
    excluirToken(){
        return localStorage.removeItem(KEY);
    }
    retornarToken(){
        console.log(KEY)
        return localStorage.getItem(KEY) ?? "";
    }
    possuiToken(){
        console.log(this.retornarToken)
        return !!this.retornarToken();
    }
}