import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../Clientes/cliente';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }
  Url='http://localhost:8099/api/cliente'

  getClientes(){
    return this.http.get<Cliente[]>(this.Url);
  }

  getCliente(id: number){
    return this.http.get<Cliente>(this.Url+"/"+id)
  }

  createCliente(cliente: Cliente){
    return this.http.post<Cliente>(this.Url, cliente);
  }

  updateCliente(cliente: Cliente){
    return this.http.put<Cliente>(this.Url+"/"+cliente.id, cliente)
  }

  deleteCliente(cliente: Cliente){
    return this.http.delete<Cliente>(this.Url+"/"+cliente.id)
  }
}
