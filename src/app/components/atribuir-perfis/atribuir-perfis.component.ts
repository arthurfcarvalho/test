import { Component, OnInit } from '@angular/core';
import { Perfil } from 'src/app/models/perfil';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { PerfilService } from 'src/app/services/perfil.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogResponseComponent } from '../dialog-response/dialog-response.component';

@Component({
  selector: 'app-atribuir-perfis',
  templateUrl: './atribuir-perfis.component.html',
  styleUrls: ['./atribuir-perfis.component.css']
})
export class AtribuirPerfisComponent implements OnInit{

  constructor(
    private usuarioService: UsuarioService, private perfilService: PerfilService, private dialog: MatDialog
  ) { }

  usuario!: Usuario;
  perfisDisponiveis: Perfil[] = [];
  perfisAtribuidos: Perfil[] = [];

  ngOnInit(): void {
    this.carregarUsuario();
    this.carregarPerfis();
  };
  
  carregarUsuario(): void {
    this.usuarioService.buscarUsuarioPorId(12
    ).subscribe(usuario => {
      this.usuario = usuario;
      this.perfisAtribuidos.push(...usuario.perfis);
    });
  }

  carregarPerfis(): void {
    this.perfilService.listarPerfis().subscribe(perfis => {
      this.perfisDisponiveis = perfis;
      this.removerDuplicatas();
    });
  }

  removerDuplicatas(): void {
    this.perfisDisponiveis = this.perfisDisponiveis.filter(perfilDisponivel =>
      !this.perfisAtribuidos.some(perfilAtribuido => perfilAtribuido.id === perfilDisponivel.id)
    );
  }

  adicionarPerfil(perfil: Perfil): void {
    if(!this.perfisAtribuidos.find(p => p.id === perfil.id)){
      this.perfisAtribuidos.push(perfil);
      
      const index = this.perfisDisponiveis.findIndex(p => p.id === perfil.id);
      if (index !== -1) {
        this.perfisDisponiveis.splice(index, 1);;
      }
    }
  }

  removerPerfil(perfil: Perfil): void {
    const index = this.perfisAtribuidos.findIndex(p => p.id === perfil.id);
    if(index !== -1){
      this.perfisAtribuidos.splice(index, 1);
      this.perfisDisponiveis.push(perfil);
    } 
  }

  submit(): void {
    this.usuarioService.atualizarPerfis(this.usuario.id, this.perfisAtribuidos).subscribe(
      (response: any) => {
        console.log("Objeto:", response);
        console.log('Mensagem:', response.message); 
        console.log('Perfis atualizados com sucesso!');
        const dialogRef = this.dialog.open(DialogResponseComponent, {
          data: { type: 'success', message: response.message }
        });
      },
      (error: any) => {
        console.error('Erro ao atualizar perfis:', error);
        const dialogRef = this.dialog.open(DialogResponseComponent, {
          data: { type: 'error', message: 'Ocorreu um erro ao atualizar os perfis do usuário.' }
        });
      }
    );
  }
}
