import { Component, ElementRef, OnInit } from '@angular/core';
import { Edificio } from '../Edificios/edificio';
import { EdificioService } from '../Servicios/edificio.service';


@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  edificios: Edificio[]=[];
  constructor(private elementRef:ElementRef, private edificioService: EdificioService) { }

  public ngOnInit(): void {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "./assets/index.js";
    this.elementRef.nativeElement.appendChild(s);

    this.edificioService.getEdificios().subscribe(
      edificios=> this.edificios=edificios
    );
  }

}

