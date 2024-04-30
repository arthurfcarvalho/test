import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { AtribuirPerfisComponent } from "./components/atribuir-perfis/atribuir-perfis.component";

const routes: Routes = [
    {path: "", component: AtribuirPerfisComponent},
    {path: "/usuario/listar/", component: AtribuirPerfisComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }