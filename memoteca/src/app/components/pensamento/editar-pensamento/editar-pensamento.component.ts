import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentosService } from '../pensamentos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-pensamento',
  templateUrl: './editar-pensamento.component.html',
  styleUrls: ['./editar-pensamento.component.css'],
})
export class EditarPensamentoComponent implements OnInit {
  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: '',
    id: 0,
  };

  constructor(
    private service: PensamentosService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId(parseInt(id!)).subscribe((pensamento)=>{
      this.pensamento = pensamento
      console.log(this.pensamento);

    })
  }

  editarPensamento() {
    this.service.editar(this.pensamento).subscribe(()=>{
      this.router.navigate(['/listarPensamento'])
    })
  }
  cancelar() {
    this.router.navigate(['/listarPensamento'])
  }
}
