import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import{Observable} from 'rxjs';
import { of } from 'rxjs';
import { Edificio } from '../edificios/edificio';
@Injectable({
  providedIn: 'root'
})
export class EdificioService {

  constructor(private http: HttpClient) { }
  Url='http://localhost:8099/api/edificio'
  // getEdificios():Observable<Edificio[]>{
  //   return of (EDIFICIOS);
  // }
  getEdificios(){
    return this.http.get<Edificio[]>(this.Url);
  }
  
  getEdificio(id: number){
    return this.http.get<Edificio>(this.Url+"/"+id)
  }

  createEdificio(edificio: Edificio){
    return this.http.post<Edificio>(this.Url, edificio);
  }
  
  updateEdificio(edificio: Edificio){
    return this.http.put<Edificio>(this.Url+"/"+edificio.id, edificio)
  }

  deleteEdificio(edificio: Edificio){
    return this.http.delete<Edificio>(this.Url+"/"+edificio.id)
  }
}
