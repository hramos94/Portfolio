import { Component, OnInit } from '@angular/core';
import { PensamentosService } from '../pensamentos.service';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css'],
})
export class ListarPensamentoComponent implements OnInit {
  listaPensamentos: Pensamento[] = [];

  constructor(private service: PensamentosService) {}

  ngOnInit(): void {
    this.service.listar().subscribe((listaPensamento) => {
      this.listaPensamentos = listaPensamento;
    });
  }
}
