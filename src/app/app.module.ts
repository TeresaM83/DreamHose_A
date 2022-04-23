import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { ListarComponentD } from './Departamentos/listar.component';
import { ListarComponentE } from './Edificios/listar.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import {EdificioService} from './Servicios/edificio.service';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { DepartamentoService } from './Servicios/departamento.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListarComponentD,
    ListarComponentE,
    CatalogoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EdificioService,
  DepartamentoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
