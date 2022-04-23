import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from '../Servicios/cliente.service';
import { Cliente } from './cliente';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
})
export class ListarComponentC implements OnInit {

  cliente: Cliente = new Cliente();
  clientes: Cliente[] = [];
  constructor(private router: Router, private elementRef:ElementRef, private clienteService: ClienteService) { }

  guardar(cliente: Cliente){
    if(cliente.nombres!=null && cliente.a_materno!=null && cliente.a_paterno!=null &&
      cliente.contrasena!=null && cliente.correo!=null && cliente.dni!=null && cliente.correo.trim()!=null){
      this.clienteService.createCliente(cliente).subscribe(
        data=>{
            Swal.fire("Éxito","Cliente agregado correctamente","success").then((result) =>{
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

  listarId(cliente: Cliente):void {
    this.clienteService.getCliente(cliente.id).subscribe(data=>{
      this.cliente=data;
    })
  }
  actualizar(cliente: Cliente){
    if(cliente.nombres!=null && cliente.a_materno!=null && cliente.a_paterno!=null &&
      cliente.contrasena!=null && cliente.correo!=null && cliente.dni!=null && cliente.correo.trim()!=null){
      this.clienteService.updateCliente(cliente).subscribe(
        data=>{
          this.cliente=data
            Swal.fire("Éxito","Cliente actualizado correctamente","success").then((result) =>{
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
  eliminar(cliente: Cliente){
    Swal.fire({
      title: 'Estás seguro en eliminar?',
      text: "Se eliminará el Cliente!!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.clienteService.deleteCliente(cliente).subscribe(
          data=>{
            this.clientes=this.clientes.filter(e=>e!==cliente);
            Swal.fire("Éxito","Cliente eliminado correctamente","success");
        })
      }else {
        Swal.fire("Cancelado","Canceló la operación","info");
      }
    })
  }
  ngOnInit(): void {
    var c = document.createElement("script");
    c.type = "text/javascript";
    c.src = "./assets/index.js";
    this.elementRef.nativeElement.appendChild(c);

    this.clienteService.getClientes().subscribe(
      clientes => this.clientes = clientes
    );
  }
}
