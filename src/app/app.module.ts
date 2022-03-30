import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { ListarComponentD } from './Departamentos/listar.component';
import { ListarComponentE } from './Edificios/listar.component';
import { EditarComponent } from './Departamentos/editar.component';
import { AgregarComponent } from './Departamentos/agregar.component';
import { EliminarComponent } from './Departamentos/eliminar.component';
import { CatalogoComponent } from './catalogo/catalogo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListarComponentD,
    ListarComponentE,
    EditarComponent,
    AgregarComponent,
    EliminarComponent,
    CatalogoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
