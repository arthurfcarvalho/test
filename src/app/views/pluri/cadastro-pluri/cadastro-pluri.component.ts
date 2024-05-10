import { PluriService } from './../../../services/pluri.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTabGroup } from '@angular/material/tabs';
import * as moment from 'moment';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-cadastro-pluri',
  templateUrl: './cadastro-pluri.component.html',
  styleUrls: ['./cadastro-pluri.component.css'],
  encapsulation: ViewEncapsulation.None 
})


export class CadastroPluriComponent implements OnInit{
  @ViewChild(MatTabGroup) tabGroup!: MatTabGroup;
  selected!: Date | null;
  titulo1 = "Informacoes Gerais";
  titulo2 = "Atividades Acompanhadas pela comissao";
  titulo3 = "Informações da Aplicação do PLURI";
  codigo = "TESTE001"
  trimestres: string[] = ['1º Trimestre', '2º Trimestre', '3º Trimestre', '4º Trimestre'];
  trimestreSelecionado: string = '';
  informacoesGeraisForm!: FormGroup;
  atividadesComissaoForm!: FormGroup;
  informacoesAplicacaoForm!: FormGroup;
  
  constructor(private formBuilder: FormBuilder, private usuarioService: UsuarioService, private pluriService: PluriService){
  }
  
  ngOnInit() {
    this.inicializarFormulario();
    const usuario = this.usuarioService.retornarUsuario();
    console.log(usuario)
  }

  envioInformacoesGeraisForm(){
    let newDate: moment.Moment = moment.utc(this.informacoesGeraisForm.value.data_inicio_pluri).local();
    this.informacoesGeraisForm.value.data_inicio_pluri = newDate.format("YYYY-MM-DD") + "T" + "00:00:01"; 
    let newDate2: moment.Moment = moment.utc(this.informacoesGeraisForm.value.data_inicio_recuperacao).local();
    this.informacoesGeraisForm.value.data_inicio_recuperacao = newDate2.format("YYYY-MM-DD") + "T" + "00:00:00"; 
    
    this.pluriService.criarPluri(this.informacoesGeraisForm.value).subscribe({
      next: (value) => {
        console.log("Cadastro Realizado",value) 
        
      },error:(err) =>{console.log(this.informacoesGeraisForm.value),console.log("Error",err)}
    })
  }

  atualizarAtividadesDaComissaoForm(){
    let newDate: moment.Moment = moment.utc(this.atividadesComissaoForm.value.data_inicio_pluri).local();
    this.atividadesComissaoForm.value.data_inicio_pluri = newDate.format("YYYY-MM-DD") + "T" + "00:00:01"; 
    let newDate2: moment.Moment = moment.utc(this.atividadesComissaoForm.value.data_inicio_recuperacao).local();
    this.atividadesComissaoForm.value.data_inicio_recuperacao = newDate2.format("YYYY-MM-DD") + "T" + "00:00:00"; 
    
    this.pluriService.atualizarInformacoesComissao(this.atividadesComissaoForm.value).subscribe({
      next: (value) => {
        console.log("Atualizacao Realizada",value) 
        
      },error:(err) =>{console.log(this.atividadesComissaoForm.value),console.log("Error",err)}
    })
  }
  atualizarInformacoesAplicacaoForm(){
    let newDate: moment.Moment = moment.utc(this.informacoesAplicacaoForm.value.data_inicio_pluri).local();
    this.informacoesAplicacaoForm.value.data_inicio_pluri = newDate.format("YYYY-MM-DD") + "T" + "00:00:01"; 
    let newDate2: moment.Moment = moment.utc(this.informacoesAplicacaoForm.value.data_inicio_recuperacao).local();
    this.informacoesAplicacaoForm.value.data_inicio_recuperacao = newDate2.format("YYYY-MM-DD") + "T" + "00:00:00"; 
    
    this.pluriService.atualizarInformacoesComissao(this.informacoesAplicacaoForm.value).subscribe({
      next: (value) => {
        console.log("Atualizacao Realizada",value) 
        
      },error:(err) =>{console.log(this.informacoesAplicacaoForm.value),console.log("Error",err)}
    })
  }

  avancarParaProximaAba() {
    this.tabGroup.selectedIndex! += 1;
  }

  inicializarFormulario() {
    this.informacoesGeraisForm = this.formBuilder.group({
      codigo: '123',
      trimestre: 1,
      ano_aplicacao: 2024,
      data_inicio_pluri: '',
      data_inicio_recuperacao: ''
    });
    this.atividadesComissaoForm = this.formBuilder.group({
      data_indicacao_docentes: '',
      data_envio_questoes: '',
      data_diagramacao: '',
      data_revisao: '',
      data_impressao: '',
      data_ensalamento: '',
      data_lancamento_notas: '',
      data_correcao_redacao: '',
      data_enviar_recurso: '',
      data_analise_recurso: '',
      data_atualizacao_notas: '',
    })
    this.informacoesAplicacaoForm = this.formBuilder.group({
      data_aplicacao: '',
      data_reaplicacao: '',
      data_divulgacao_notas: '',
      realizado: false
    })
  }
}
