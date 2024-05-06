import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'cadastro-usuario-componente',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {

  cadastroForm!: FormGroup;

  @Output() acaoClique: EventEmitter<any> = new EventEmitter<any>



  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.inicializarFormulario();
  }

  inicializarFormulario() {
    this.cadastroForm = this.formBuilder.group({
      nome: ['', Validators.required],
      email: ['', Validators.required],
      login: ['', Validators.required],
      senha: ['', [Validators.required, Validators.minLength(3)]],
      confirmarSenha: ['', Validators.required],
    });
  }

  executarAcao() {
    this.acaoClique.emit();
  }

}
