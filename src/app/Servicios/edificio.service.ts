import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import{Observable} from 'rxjs';
import { of } from 'rxjs';
import { Edificio } from '../Edificios/edificio';
@Injectable({
  providedIn: 'root'
})
export class EdificioService {

  constructor(private http: HttpClient) { }
  Url='http://localhost:8099/edificio/apiedificio'
  // getEdificios():Observable<Edificio[]>{
  //   return of (EDIFICIOS);
  // }
  getEdificios(){
    return this.http.get<Edificio[]>(this.Url);
  }
  createEdificio(edificio: Edificio){
    return this.http.post<Edificio>(this.Url, edificio);
  }
}
