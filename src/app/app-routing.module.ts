import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './Departamentos/listar/listar.component';
import { EditarComponent } from './Departamentos/editar/editar.component';
import { AgregarComponent } from './Departamentos/agregar/agregar.component';
import { EliminarComponent } from './Departamentos/eliminar/eliminar.component';
import { InicioComponent } from './inicio/inicio.component';
import { CatalogoComponent } from './catalogo/catalogo.component';

const routes: Routes = [

  {path:'', component:InicioComponent},
  {path:'departamentos/listar', component:ListarComponent},
  {path:'departamentos/editar', component:EditarComponent},
  {path:'departamentos/agregar', component:AgregarComponent},
  {path:'departamentos/eliminar', component:EliminarComponent},
  {path:'catalogo', component:CatalogoComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

