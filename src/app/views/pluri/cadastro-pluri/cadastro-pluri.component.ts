import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTabGroup } from '@angular/material/tabs';

@Component({
  selector: 'app-cadastro-pluri',
  templateUrl: './cadastro-pluri.component.html',
  styleUrls: ['./cadastro-pluri.component.css'],
  encapsulation: ViewEncapsulation.None 
})
export class CadastroPluriComponent implements OnInit{
  @ViewChild(MatTabGroup) tabGroup!: MatTabGroup;
  selected!: Date | null;
  cadastroInformacoesGeraisForm!: FormGroup;
  titulo1 = "Informacoes Gerais";
  titulo2 = "Atividades Acompanhadas pela comissao";
  titulo3 = "Informações da Aplicação do PLURI";
  codigo = "TESTE001"
  trimestres: string[] = ['1º Trimestre', '2º Trimestre', '3º Trimestre', '4º Trimestre'];
  trimestreSelecionado: string = '';
  
  constructor(private formBuilder: FormBuilder){
  }

  ngOnInit() {
    this.inicializarFormulario();
  }

  envioInformacoesGeraisForm(){}

  avancarParaProximaAba() {
    this.tabGroup.selectedIndex! += 1;
  }

  inicializarFormulario() {
    this.cadastroInformacoesGeraisForm = this.formBuilder.group({
      nome: ['', Validators.required],
      email: ['', Validators.required],
      login: ['', Validators.required],
      data_inicio_pluri: ['', Validators.required],
      data_inicio_recuperacao: ['', Validators.required]
    });
  }
}
