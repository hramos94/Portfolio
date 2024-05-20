import { Component, Input, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-pensamentos',
  templateUrl: './pensamentos.component.html',
  styleUrls: ['./pensamentos.component.css'],
})
export class PensamentosComponent implements OnInit {
  @Input() pensamento: Pensamento = {
    id: 0,
    conteudo: 'angular',
    autoria: 'heitor',
    modelo: 'modelo3',
  };

  constructor() {}

  ngOnInit(): void {}

  larguraPensamento(): string {
    if(this.pensamento.conteudo.length >= 256 ){
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }
}
