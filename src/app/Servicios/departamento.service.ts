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
    createDepartamentos(departamento: Departamento){
      return this.http.post<Departamento>(this.Url, Departamento);
    }
    getDepartamentoId(id: number){
      return this.http.get<Departamento>(this.Url+"/"+id)
    }
    updateDepartamento(depa: Departamento){
      return this.http.put<Departamento>(this.Url+"/"+depa.id, depa)
    }
    deleteDepartamento(depa: Departamento){
      return this.http.delete<Departamento>(this.Url+"/"+depa.id)
    }
}
