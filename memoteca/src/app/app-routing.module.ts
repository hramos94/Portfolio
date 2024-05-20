import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarPensamentoComponent } from './components/pensamento/criar-pensamento/criar-pensamento.component';
import { ListarPensamentoComponent } from './components/pensamento/listar-pensamento/listar-pensamento.component';
import { ExcluirPensamentoComponent } from './components/pensamento/excluir-pensamento/excluir-pensamento.component';
import { EditarPensamentoComponent } from './components/pensamento/editar-pensamento/editar-pensamento.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'listarPensamento',
  },
  {
    path: 'listarPensamento',
    component: ListarPensamentoComponent
  },
  {
    path: 'criarPensamento',
    component: CriarPensamentoComponent
  },
  {
    path: 'pensamentos/excluirPensamento/:id',
    component: ExcluirPensamentoComponent
  },
  {
    path: 'pensamentos/editarPensamento/:id',
    component: EditarPensamentoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
