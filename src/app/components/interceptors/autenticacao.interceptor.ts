
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from 'src/app/services/token.service';

@Injectable()
export class AutenticacaoInterceptor implements HttpInterceptor {

  constructor(private tokenService:TokenService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(this.tokenService.possuiToken()){
      console.log("Entrou no interceptor");
      const token = this.tokenService.retornarToken();
      console.log("Token intercep: ",token)
      request = request.clone({
        setHeaders: {
          'Authorization': `Bearer ${token}`
        }
      })
      console.log('Request: ', request)
    }else{
      console.log("error")
    }
    return next.handle(request)
  }
}