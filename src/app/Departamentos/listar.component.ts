import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DepartamentoService } from '../Servicios/departamento.service';
import { Departamento } from './departamento';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls :["./departamentos.component.css"]
})
export class ListarComponentD implements OnInit {

  departamentos: Departamento[] = []
  constructor(private router: Router, private elementRef:ElementRef, private departamentoservice: DepartamentoService) { }

  editarDepartamento(){

  }
  eliminarDepartamento(){

  }
  ngOnInit(): void {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "./assets/index.js";
    this.elementRef.nativeElement.appendChild(s);

    this.departamentoservice.getDepartamentos().subscribe(
      departamentos=> this.departamentos = departamentos
    );

  }

}
