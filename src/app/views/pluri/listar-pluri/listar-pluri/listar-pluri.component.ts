import { DadosDetalhamentoPluri } from '../../models/DadosDetalhamentoPluri.model';
import { PluriService } from './../../../../services/pluri.service';
import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-listar-pluri',
  templateUrl: './listar-pluri.component.html',
  styleUrls: ['./listar-pluri.component.css']
})
export class ListarPluriComponent implements AfterViewInit{


  dados: DadosDetalhamentoPluri[] = [];


  constructor(private pluriService: PluriService){

  }
  ngAfterViewInit(): void {
      this.listarPlurisNaoRealizados();
  }

  listarPlurisNaoRealizados(){
    this.pluriService.listarPlurisNaoRealizados().subscribe((data) => {
      this.dados = data.content
      console.log(data)
    })
  }
}
