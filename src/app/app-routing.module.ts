import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponentD } from './Departamentos/listar.component';
import { ListarComponentC } from './Clientes/listar.component';
import { ListarComponentE } from './Edificios/listar.component';
import { ListarComponentCo } from './Contratos/listar.component';
import { ListarComponentA } from './Alquileres/listar.component';
import { ListarComponentP } from './Pagos/listar.component';
import { EditarComponent } from './Departamentos/editar.component';
import { AgregarComponent } from './Departamentos/agregar.component';
import { EliminarComponent } from './Departamentos/eliminar.component';
import { InicioComponent } from './inicio/inicio.component';
import { CatalogoComponent } from './catalogo/catalogo.component';

const routes: Routes = [

  {path:'', component:InicioComponent},
  {path:'catalogo', component:CatalogoComponent},
  {path:'departamentos/listar', component:ListarComponentD},
  {path:'departamentos/editar', component:EditarComponent},
  {path:'departamentos/agregar', component:AgregarComponent},
  {path:'departamentos/eliminar', component:EliminarComponent},

  {path:'clientes/listar', component:ListarComponentC},
  {path:'edificios/listar', component:ListarComponentE},
  {path:'contratos/listar', component:ListarComponentCo},
  {path:'alquileres/listar', component:ListarComponentA},
  {path:'pagos/listar', component:ListarComponentP},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

