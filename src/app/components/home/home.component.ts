import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  opened = false;
  usuarioLogado = false;
  usuario = this.usuarioService.retornarUsuario();

  constructor(private usuarioService: UsuarioService, private router: Router){}

  ngOnInit(){
    this.usuarioLogado = this.usuarioService.estaLogado();
    if (this.usuarioLogado) {
      console.log(this.usuario)
      this.router.navigate(['/home']);
    } else {
      this.router.navigate(['/login']);
    }
  }

  logout(): void {
    this.usuarioService.logout();
    this.router.navigate(['/login']);
  }}
