import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }
  listar() {
    this.router.navigate(['departamentos/listar'])
  }
  agregar() {
    this.router.navigate(['departamentos/agregar'])
  }
  editar() {
    this.router.navigate(['departamentos/editar'])
  }
  eliminar() {
    this.router.navigate(['departamentos/eliminar'])
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
