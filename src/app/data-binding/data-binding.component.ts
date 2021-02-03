import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http//loiane.com';
  cursoAngular: boolean = true;

  getValor(){
    return 2;
  }

  getCurtiCurso(){
    return true;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
