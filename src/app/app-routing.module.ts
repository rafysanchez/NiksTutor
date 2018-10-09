import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MoradoresVisitantesComponent } from './moradores-visitantes/moradores-visitantes.component';
import { VeiculosComponent } from './veiculos/veiculos.component';
import { RecadosComponent } from './recados/recados.component';
import { EventosComponent } from './eventos/eventos.component';
import { OcorrenciasComponent } from './ocorrencias/ocorrencias.component';
import { RelatoriosComponent } from './relatorios/relatorios.component';
import { SobreComponent } from './sobre/sobre.component';
import { AjudaComponent } from './ajuda/ajuda.component';
import { ContactListComponent } from './contact-list/contact-list.component';


const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'MoradoresVisitantes', component: MoradoresVisitantesComponent, canActivate: [AuthGuard] },
  { path: 'Veiculos', component: VeiculosComponent, canActivate: [AuthGuard] },
  { path: 'Recados', component: RecadosComponent, canActivate: [AuthGuard] },
  { path: 'Eventos', component: EventosComponent, canActivate: [AuthGuard] },
  { path: 'Ocorrencias', component: OcorrenciasComponent, canActivate: [AuthGuard] },
  { path: 'Relatorios', component: RelatoriosComponent, canActivate: [AuthGuard] },
  { path: 'Sobre', component: SobreComponent, canActivate: [AuthGuard] },
  { path: 'Ajuda', component: AjudaComponent, canActivate: [AuthGuard] },
  { path: 'contatos', component: ContactListComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
