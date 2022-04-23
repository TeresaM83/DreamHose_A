import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DepartamentoService } from '../Servicios/departamento.service';
import { Departamento } from './departamento';
import Swal from "sweetalert2"
import { Edificio } from '../edificios/edificio';
import { EdificioService } from '../Servicios/edificio.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls :["./departamentos.component.css"]
})
export class ListarComponentD implements OnInit {
  departamento: Departamento= new Departamento;
  departamentos: Departamento[] = [];
  edificios: Edificio[]=[];

  constructor(private edificioService: EdificioService, private elementRef:ElementRef, private departamentoService: DepartamentoService) { }
  
  guardar(departamento: Departamento){
    if(departamento.piso!=null && departamento.piso>0 && departamento.n_habitaciones!=null && departamento.n_habitaciones>0 && departamento.n_banos!=null && departamento.n_banos>0 && departamento.area!=null && departamento.area>0 && departamento.precio!=null && departamento.precio>0){
      this.departamentoService.createDepartamento(departamento).subscribe(
        data=>{
            Swal.fire("Éxito","Departamento agregado correctamente","success").then((result) =>{
              if (result.isConfirmed) {
                location.reload();
              }
            })
        }
      );
    } else{
      Swal.fire("Error","Complete todos los campos con los datos correspondientes","error");
    }
  }
  listarId(departamento: Departamento):void {
    this.departamentoService.getDepartamento(departamento.id).subscribe(data=>{
      this.departamento=data;
    })
  }
  actualizar(departamento: Departamento){
    if(departamento.edificio!=null  && departamento.piso!=null && departamento.piso>0 && departamento.n_habitaciones!=null && departamento.n_habitaciones>0 && departamento.n_banos!=null && departamento.n_banos>0 && departamento.area!=null && departamento.area>0 && departamento.precio!=null && departamento.precio>0 && departamento.estado.trim()!=null){
      this.departamentoService.updateDepartamento(departamento).subscribe(
        data=>{
          this.departamento=data
            Swal.fire("Éxito","Departamento actualizado correctamente","success").then((result) =>{
              if (result.isConfirmed) {
                location.reload();
              }
            })
        }
      );
    } else{
      Swal.fire("Error","Complete todos los campos con los datos correspondientes","error");
    }
  }
  eliminar(departamento: Departamento){
    Swal.fire({
      title: 'Estás seguro en eliminar?',
      text: "Se eliminará el departamento!!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.departamentoService.deleteDepartamento(departamento).subscribe(
          data=>{
            this.departamentos=this.departamentos.filter(e=>e!==departamento);
            Swal.fire("Éxito","Departamento eliminado correctamente","success");
        })
      }else {
        Swal.fire("Cancelado","Canceló la operación","info");
      }
    })
  }
  
  ngOnInit(): void {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "./assets/index.js";
    this.elementRef.nativeElement.appendChild(s);

    this.departamentoService.getDepartamentos().subscribe(
      departamentos=> this.departamentos = departamentos
    );
    this.edificioService.getEdificios().subscribe(
      edificios=> this.edificios=edificios
    );
  }
}
