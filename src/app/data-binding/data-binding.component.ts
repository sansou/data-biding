import { Component, OnInit  } from '@angular/core';
import { CommonModule } from "@angular/common";


@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http//loiane.com';
  cursoAngular: boolean = true;
  valorAtual: string = '';
  valorSalvo: string ='';
  isMouseOver: boolean = false;

  nomeDoCurso:string ='Angular';

  valorInicial: number = 15;

  getValor(){
    return 2;
  }

  getCurtiCurso(){
    return true;
  }

  botaoClicado(){
    alert("Botão clicado");
  }

  OnKeyUp(evento: KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor){
    this.valorSalvo = valor;
  }

  OnMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(event){
    console.log(event.novoValor);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
