import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatTabGroup } from '@angular/material/tabs';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import * as moment from 'moment';
import { PluriService } from 'src/app/services/pluri.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Pluri } from '../models/Pluri.model';

@Component({
  selector: 'app-finalizar-pluri',
  templateUrl: './finalizar-pluri.component.html',
  styleUrls: ['./finalizar-pluri.component.css']
})
export class FinalizarPluriComponent implements OnInit{

  @ViewChild(MatTabGroup) tabGroup!: MatTabGroup;
  selected!: Date | null;
  titulo1 = "Informacoes Gerais";
  titulo2 = "Atividades Acompanhadas pela comissao";
  titulo3 = "Informações da Aplicação do PLURI";
  codigo = "TESTE001"
  trimestreSelecionado: string = '';
  informacoesGeraisForm!: FormGroup;
  atividadesComissaoForm!: FormGroup;
  informacoesAplicacaoForm!: FormGroup;
  atualizarInformacoesGeraisForm!: FormGroup;
  dateString = '2024-05-11'; // Example string date
  dateObject = new Date(this.dateString);
  pluri: Pluri = {
    id: 0, 
    codigo: '',
    trimestre: 2,
    ano_aplicacao: 2024,
    data_inicio_pluri: this.dateObject,
    data_inicio_recuperacao: this.dateObject,
    data_aplicacao: this.dateObject,
    data_reaplicacao: this.dateObject,
    data_divulgacao_notas: this.dateObject,
    data_indicacao_docentes: this.dateObject,
    data_envio_questoes: this.dateObject,
    data_diagramacao: this.dateObject,
    data_revisao: this.dateObject,
    data_impressao: this.dateObject,
    data_ensalamento: this.dateObject,
    data_lancamento_notas: this.dateObject,
    data_correcao_redacao: this.dateObject,
    data_enviar_recurso: this.dateObject,
    data_analise_recurso: this.dateObject,
    data_atualizacao_notas: this.dateObject,
    realizado: false

  }

  constructor(private usuarioService: UsuarioService,private formBuilder: FormBuilder,private pluriService: PluriService, private router: Router, private route: ActivatedRoute){

  }

  ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id');
      const idNumero = Number(id)
      this.pluriService.listarPorId(idNumero).subscribe(pluriRetorno => {
        console.log(`Pluri retorno ${idNumero}: `,pluriRetorno),this.pluri = pluriRetorno,console.log(`This Pluri:`, this.pluri),this.trimestreSelecionado = String (this.pluri.trimestre);;
      })
      
      const usuario = this.usuarioService.retornarUsuario();
      this.inicializarFormularios()
  }


  atualizarInformacoesGerais(){
    this.atualizarInformacoesGeraisForm.value.id = this.pluri.id
    console.log(this.trimestreSelecionado)
    this.pluriService.atualizarInformacoesGerais(this.atualizarInformacoesGeraisForm.value).subscribe({
      next: (value) => {
        console.log(this.atualizarInformacoesGeraisForm.value)
        console.log("Atualizacao Realizada",value) 
        
      },error:(err) =>{console.log(this.atividadesComissaoForm.value),console.log("Error",err)}
    })
  }

  atualizarAtividadesDaComissaoForm(){
    console.log("ENVIO: ", this.atividadesComissaoForm.value)
    console.log(this.pluri.id)
    this.atividadesComissaoForm.value.id = this.pluri.id
    this.pluriService.atualizarInformacoesComissao(this.atividadesComissaoForm.value).subscribe({
      next: (value) => {
        console.log("Atualizacao Realizada",value) 
        
      },error:(err) =>{console.log(this.atividadesComissaoForm.value),console.log("Error",err)}
    })
  }
  atualizarInformacoesAplicacaoForm(){
    this.informacoesAplicacaoForm.value.id = this.pluri.id
    this.pluriService.atualizarInformacoesAplicacao(this.informacoesAplicacaoForm.value).subscribe({
      next: (value) => {
        console.log("Atualizacao Realizada",value) 
        
      },error:(err) =>{console.log(this.informacoesAplicacaoForm.value),console.log("Error",err)}
    })
  }

  avancarParaProximaAba() {
    this.tabGroup.selectedIndex! += 1;
  }

  inicializarFormularios() {
    this.atividadesComissaoForm = this.formBuilder.group({
      id: 0,
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
      id: 0,
      data_aplicacao: '',
      data_reaplicacao: '',
      data_divulgacao_notas: '',
      realizado: false
    })
    this.atualizarInformacoesGeraisForm = this.formBuilder.group({
      id: 0,
      codigo: '',
      trimestre: this.trimestreSelecionado,
      ano_aplicacao: '',
      data_inicio_pluri: '',
      data_inicio_recuperacao: ''
    })
  }
}
