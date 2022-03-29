import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EdificiosComponent } from './edificios/edificios.component';
import { AppRoutingModule } from './app-routing.module';
import { ListarComponent } from './Departamentos/listar/listar.component';
import { EditarComponent } from './Departamentos/editar/editar.component';
import { AgregarComponent } from './Departamentos/agregar/agregar.component';
import { EliminarComponent } from './Departamentos/eliminar/eliminar.component';
import { CatalogoComponent } from './catalogo/catalogo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EdificiosComponent,
    ListarComponent,
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
