import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Edificio } from './edificio';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls :["./edificios.component.css"]
})
export class ListarComponentE implements OnInit {

  edificios: Edificio[] = [
  { id: 1, n_pisos: 5, direccion: 'mz i lt 13 d'}
]
  constructor(private router: Router, private elementRef:ElementRef) { }
  editarEdificio(){

  }
  eliminarEdificio(){

  }
  ngOnInit(): void {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "./assets/index.js";
    this.elementRef.nativeElement.appendChild(s);
  }
}
