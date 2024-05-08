import { AutenticacaoService } from './../../../services/autenticacao.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-usuario',
  templateUrl: './login-usuario.component.html',
  styleUrls: ['./login-usuario.component.css']
})
export class LoginUsuarioComponent {

  loginForm!: FormGroup;


  constructor(private formBuilder: FormBuilder, private autenticacaoService: AutenticacaoService, private router: Router){}


  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      login: ['',[Validators.required]],
      senha: ['', [Validators.required]]
    })
  }

  login(){
    this.autenticacaoService.autenticar(this.loginForm.value).subscribe({
      next: (value) => {
        console.log(value)
        console.log('Login realizado com sucesso', value)
        this.router.navigateByUrl('/home')
      },
      error:(err)=>{
        console.log(this.loginForm.value)
        console.log("Erro ao fazer login", err)
      }
    })
  }
}
