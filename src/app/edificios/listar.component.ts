import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EdificioService } from '../Servicios/edificio.service';
import { Edificio } from './edificio';
@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls :["./edificios.component.css"]
})
export class ListarComponentE implements OnInit {

  edificios: Edificio[]=[];
  constructor(private router: Router, private elementRef:ElementRef, private edificioService: EdificioService) { }

  editarEdificio(){
  }
  eliminarEdificio(){
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
