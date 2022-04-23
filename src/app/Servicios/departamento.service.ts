import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Departamento } from '../Departamentos/departamento';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  constructor(private http:HttpClient){}
    Url='http://localhost:8099/api/departamento'

    getDepartamentos(){
      return this.http.get<Departamento[]>(this.Url);
    }
    getDepartamento(id: number){
      return this.http.get<Departamento>(this.Url+"/"+id)
    }
    createDepartamento(departamento: Departamento){
      return this.http.post<Departamento>(this.Url, departamento);
    }
    updateDepartamento(departamento: Departamento){
      return this.http.put<Departamento>(this.Url+"/"+departamento.id, departamento)
    }
    deleteDepartamento(departamento: Departamento){
      return this.http.delete<Departamento>(this.Url+"/"+departamento.id)
    }
}
