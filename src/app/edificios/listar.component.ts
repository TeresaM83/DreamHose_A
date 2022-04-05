import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EdificioService } from '../Servicios/edificio.service';
import { Edificio } from './edificio';
import Swal from "sweetalert2"
@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls :["./edificios.component.css"]
})
export class ListarComponentE implements OnInit {
  edificio: Edificio= new Edificio();
  edificios: Edificio[]=[];
  constructor(private router: Router, private elementRef:ElementRef, private edificioService: EdificioService) { }
  guardar(edificio: Edificio){
    if(edificio.n_pisos!=null && edificio.n_pisos>0 && edificio.direccion.trim()!=null){
      this.edificioService.createEdificio(edificio).subscribe(
        data=>{
            Swal.fire("Éxito","Edificio agregado correctamente","success").then((result) =>{
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
  listarId(edificio: Edificio):void {
    this.edificioService.getEdificioId(edificio.id).subscribe(data=>{
      this.edificio=data;
    })
  }
  actualizar(edificio: Edificio){
    if(edificio.n_pisos!=null && edificio.n_pisos>0 && edificio.direccion.trim()!=null){
      this.edificioService.updateEdificio(edificio).subscribe(
        data=>{
          this.edificio=data
            Swal.fire("Éxito","Edificio actualizado correctamente","success").then((result) =>{
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
  eliminar(edificio: Edificio){
    Swal.fire({
      title: 'Estás seguro en eliminar?',
      text: "Se eliminará el edificio!!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.edificioService.deleteEdificio(edificio).subscribe(
          data=>{
            this.edificios=this.edificios.filter(e=>e!==edificio);
            Swal.fire("Éxito","Edificio eliminado correctamente","success");
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

    this.edificioService.getEdificios().subscribe(
      edificios=> this.edificios=edificios
    );
  }
}
