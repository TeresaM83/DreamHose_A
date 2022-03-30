import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Edificio } from './edificio';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
})
export class ListarComponentE implements OnInit {

  edificios: Edificio[] = [
  { id: 1, n_pisos: 5, direccion: 'mz i lt 13 d'}
]
  constructor(private router: Router) { }
  editarEdificio(){

  }
  eliminarEdificio(){

  }
  ngOnInit(): void {
  }

}
