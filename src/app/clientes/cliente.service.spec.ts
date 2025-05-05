import { TestBed } from '@angular/core/testing';
import { ClienteService } from './cliente.service';
import { Cliente } from './cliente';

describe('ClienteService', () => {
  let service: ClienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClienteService);
  });

  it('deve ser criado', () => {
    expect(service).toBeTruthy();
  });

  it('deve chamar salvarCliente e logar o cliente no console', () => {
    const cliente: Cliente = { nome: 'José da Silva', email: 'jose@email.com', cpf: '12345678900', dataNascimento: '1990-01-01' };
    const consoleSpy = jest.spyOn(console, 'log');

    service.salvarCliente(cliente);

    expect(consoleSpy).toHaveBeenCalledWith(cliente, 'salvarCliente');
  });
});