import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Departamento } from '../Departamentos/departamento';
@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor() {}
  // constructor(private http:HttpClient) {}
  // Url="http://localhost:8099/edificio/listar";
  // getDepartamentos(){
  //   return this.http.get<Departamento[]>(this.Url)
  // }
}
