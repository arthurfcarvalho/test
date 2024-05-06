
import { inject} from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';

export const AuthGuard = () => {
  const usuarioService = inject(UsuarioService);
  const router = inject(Router);

  if(usuarioService.estaLogado()){
    console.log("Logado")
    return true;
  }else{
    router.navigate(['usuario/login']);
    return false;
  }
}