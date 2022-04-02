import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }
  clientes() {
    this.router.navigate(['clientes/listar'])
  }
  edificios() {
    this.router.navigate(['edificios/mantenimiento'])
  }
  departamentos() {
    this.router.navigate(['departamentos/mantenimiento'])
  }
  contratos() {
    this.router.navigate(['contratos/listar'])
  }
  alquileres() {
    this.router.navigate(['alquileres/listar'])
  }
  pagos() {
    this.router.navigate(['pagos/listar'])
  }
  inicio() {
    this.router.navigate([''])
  }
  catalogo() {
    this.router.navigate(['catalogo'])
  }




  ngOnInit(): void {
  }

}
