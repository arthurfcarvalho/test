import { Router } from '@angular/router';
import { UsuarioService } from './services/usuario.service';
import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'teste';
  opened = false;
  usuarioLogado = false;
  usuario = this.usuarioService.retornarUsuario();

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  ngOnInit(): void {
    /*this.usuarioLogado = this.usuarioService.estaLogado();
    if (this.usuarioLogado) {
      console.log(this.usuario)
      this.router.navigate(['/home']);
    } else {
      this.router.navigate(['/login']);
    }*/
  }

  logout(): void {
    this.usuarioService.logout();
    this.router.navigate(['/login']);
  }
}
