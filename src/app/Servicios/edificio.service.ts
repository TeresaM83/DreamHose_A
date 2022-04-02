import { Injectable } from '@angular/core';
import{Observable} from 'rxjs';
import { of } from 'rxjs';
import { Edificio } from '../Edificios/edificio';
import { EDIFICIOS } from '../Edificios/edificios.json';
@Injectable({
  providedIn: 'root'
})
export class EdificioService {

  constructor() { }
  getEdificios():Observable<Edificio[]>{
    return of (EDIFICIOS);
  }
}
