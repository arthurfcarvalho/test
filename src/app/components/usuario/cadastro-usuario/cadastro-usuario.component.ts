import { UsuarioService } from 'src/app/services/usuario.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormBaseService } from './form-base.service';
import { CadastroUsuario } from 'src/app/models/usuario-cadastro';
import { Router } from '@angular/router';
import * as moment from 'moment';


@Component({
  selector: 'cadastro-usuario-componente',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {

  cadastroForm!: FormGroup;

  @Output() acaoClique: EventEmitter<any> = new EventEmitter<any>



  constructor(private router: Router,private formularioService: FormBaseService,private usuarioService: UsuarioService, private formBuilder: FormBuilder) { }

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
      data_nascimento: ['', Validators.required],
    });
  }


  
  cadastrar() {  
    let newDate: moment.Moment = moment.utc(this.cadastroForm.value.dataNascimento).local();
    this.cadastroForm.value.dataNascimento = newDate.format("YYYY-MM-DD") + "T" + "00:00:00"; 
    this.usuarioService.cadastrar(this.cadastroForm.value).subscribe({
      next: (value) => {
        console.log("Cadastro Realizado",value) 
        this.router.navigate(['/login'])
      },error:(err) =>{console.log(this.cadastroForm.value),console.log("Error",err)}
    })
    
  }
}
