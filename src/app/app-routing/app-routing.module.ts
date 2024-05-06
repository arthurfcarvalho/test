import { LoginUsuarioComponent } from './../components/usuario/login-usuario/login-usuario.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AtribuirPerfisComponent } from '../components/atribuir-perfis/atribuir-perfis.component';
import { AuthGuard } from '../components/guard/aut.guard';



const routes: Routes = [

  { path: 'login', component: LoginUsuarioComponent },
  { path: 'usuario/atribuir-perfis', component: AtribuirPerfisComponent, canActivate: [AuthGuard]}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ]
,
exports: [RouterModule]
})
export class AppRoutingModule { }
