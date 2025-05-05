import { Injectable } from '@angular/core';
import { Cliente } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  public salvarCliente(cliente: Cliente): void{
    console.log(cliente, "salvarCliente");
  }
}
