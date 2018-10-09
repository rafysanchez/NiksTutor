import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from './app-material/app-material.module';

import { ContactService } from './service/contact.service';
import { ContactListComponent } from './contact-list/contact-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { VeiculosComponent } from './veiculos/veiculos.component';
import { RecadosComponent } from './recados/recados.component';
import { EventosComponent } from './eventos/eventos.component';
import { MoradoresVisitantesComponent } from './moradores-visitantes/moradores-visitantes.component';
import { AjudaComponent } from './ajuda/ajuda.component';
import { SobreComponent } from './sobre/sobre.component';
import { RelatoriosComponent } from './relatorios/relatorios.component';
import { OcorrenciasComponent } from './ocorrencias/ocorrencias.component';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { ApiService } from './App.Service';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ContactListComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    VeiculosComponent,
    RecadosComponent,
    EventosComponent,
    MoradoresVisitantesComponent,
    OcorrenciasComponent,
    RelatoriosComponent,
    SobreComponent,
    AjudaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    AppRoutingModule
  ],
  providers: [ContactService, AuthService, AuthGuard, ApiService],
  entryComponents: [ContactComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
