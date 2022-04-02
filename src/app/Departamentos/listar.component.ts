import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Departamento } from './departamento';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls :["./departamentos.component.css"]
})
export class ListarComponentD implements OnInit {

  departamentos: Departamento[] = [
    { id_depa: 1, piso: 5, id_edificio:1, n_habitaciones:1, n_banos:1,area:12, precio:123,estado:"activo"}
  ]
  constructor(private router: Router, private elementRef:ElementRef) { }
  editarDepartamento(){

  }
  eliminarDepartamento(){

  }
  ngOnInit(): void {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "./assets/index.js";
    this.elementRef.nativeElement.appendChild(s);
  }

}
