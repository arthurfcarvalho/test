import { Component } from '@angular/core';
import { Perfil } from 'src/app/models/perfil';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { PerfilService } from 'src/app/services/perfil.service';

@Component({
  selector: 'app-atribuir-perfis',
  templateUrl: './atribuir-perfis.component.html',
  styleUrls: ['./atribuir-perfis.component.css']
})
export class AtribuirPerfisComponent {

  constructor(private usuarioService: UsuarioService, private perfilService: PerfilService) { }

  usuario!: Usuario;
  perfisDisponiveis: Perfil[] = [];
  perfisAtribuidos: Perfil[] = [];

  ngOnInit(): void {
    this.carregarUsuario();
    this.carregarPerfis();
  };
  
  carregarUsuario(): void {
    this.usuarioService.buscarUsuarioPorId(11).subscribe(usuario => {
      this.usuario = usuario;
      this.perfisAtribuidos.push(...usuario.perfis);
    })
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

  adicionarPerfil(perfil: Perfil){
    if(!this.perfisAtribuidos.find(p => p.id === perfil.id)){
      this.perfisAtribuidos.push(perfil);
      
      const index = this.perfisDisponiveis.findIndex(p => p.id === perfil.id);
      if (index !== -1) {
        this.perfisDisponiveis.splice(index, 1);;
      }
    }
  }

  removerPerfil(perfil: Perfil){
    const index = this.perfisAtribuidos.findIndex(p => p.id === perfil.id);
    if(index !== -1){
      this.perfisAtribuidos.splice(index, 1);
      this.perfisDisponiveis.push(perfil);
    } 
  }

  submit(){
    this.usuarioService.atualizarPerfis(this.usuario.id, this.perfisAtribuidos).subscribe(
      () => {
        console.log('Perfis atualizados com sucesso!');
      },
      (error: any) => {
        console.error('Erro ao atualizar perfis:', error);
      }
    );
  }
  

}
