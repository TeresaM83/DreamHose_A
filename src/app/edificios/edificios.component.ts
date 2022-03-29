import { Component, OnInit } from '@angular/core';
import { Edificio} from './edificio';

@Component({
  selector: 'app-edificios',
  templateUrl: './edificios.component.html',
  styleUrls: ['./edificios.component.css']
})
export class EdificiosComponent implements OnInit {

  edificios: Edificio[] = [
  { id: 1, n_pisos: 5, direccion: 'mz i lt 13 d'},
  { id: 2, n_pisos: 4, direccion: 'mz u lt 15 d'},
  { id: 3, n_pisos: 5, direccion: 'mz h lt 1 d'},
  { id: 4, n_pisos: 5, direccion: 'mz s lt 5 d'},
  { id: 5, n_pisos: 5, direccion: 'mz j lt 4 d'},
  { id: 6, n_pisos: 5, direccion: 'mz k lt 10 d'},
  { id: 7, n_pisos: 5, direccion: 'mz a lt 11 d'}
]

  constructor() { }
    ngOnInit(): void {
  }

}
