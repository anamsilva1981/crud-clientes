import { Injectable } from '@angular/core';
import { Cliente } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  static REPO_CLIENTES = "_CLIENTES"

  public salvarCliente(cliente: Cliente): void{
    const storage = this.obterStorage();
    storage.push(cliente);
    localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(storage));
  }

  pesquisarCliente(nome: string) : Cliente[] {
    return this.obterStorage()
  }

  private obterStorage(): Cliente[] {
    const repositorioClientes = localStorage.getItem(ClienteService.REPO_CLIENTES);
    if (repositorioClientes) {
      const clientes: Cliente[] = JSON.parse(repositorioClientes)
      return clientes;
    }
    
    const clientes: Cliente[] = [];
    localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(clientes));
    return clientes;
  }





}
