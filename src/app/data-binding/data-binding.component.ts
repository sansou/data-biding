import { Component, OnInit } from '@angular/core';


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


  constructor() { }

  ngOnInit(): void {
  }

}
