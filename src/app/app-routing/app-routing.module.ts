import { LoginUsuarioComponent } from './../components/usuario/login-usuario/login-usuario.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AtribuirPerfisComponent } from '../components/atribuir-perfis/atribuir-perfis.component';
import { AuthGuard } from '../components/guard/aut.guard';
import { HomeComponent } from '../components/home/home.component';
import { CadastroUsuarioComponent } from '../components/usuario/cadastro-usuario/cadastro-usuario.component';
import { CadastroPluriComponent } from '../views/pluri/cadastro-pluri/cadastro-pluri.component';
import { ListarPluriComponent } from '../views/pluri/listar-pluri/listar-pluri/listar-pluri.component';




const routes: Routes = [

    { path: '', redirectTo: 'login', pathMatch: 'full'}, 
    { path: 'login', component: LoginUsuarioComponent },
    { path: 'home', component: HomeComponent },
    { path: 'usuario/atribuir-perfis', component: AtribuirPerfisComponent, canActivate: [AuthGuard] },
    { path: 'usuario/cadastrar', component: CadastroUsuarioComponent},
    { path: 'pluri/criar', component: CadastroPluriComponent},
    { path: 'pluri/listar', component: ListarPluriComponent},
  ];


@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ]
,
exports: [RouterModule]
})
export class AppRoutingModule { }
