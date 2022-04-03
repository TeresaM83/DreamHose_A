import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Departamento } from '../Departamentos/departamento';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  constructor(private http:HttpClient){}
    Url='http://localhost:8099/departamento/apidepartamento'

    getDepartamentos(){
      return this.http.get<Departamento[]>(this.Url);
    }
}
