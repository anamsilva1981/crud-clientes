import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../cliente';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
  selector: 'app-listar',
  imports: [
    MatInputModule,
    MatCardModule,
    FlexLayoutModule,
    MatIconModule,
    FormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatButtonModule,
    CommonModule,
  ],
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.scss',
})

export class ListarComponent implements OnInit {

  public pesquisaPorNome: string = '';
  public listaClientes: Cliente[] = [];
  public colunasTable: string[] = ["id", "nome", "cpf", "dataNascimento", "email"];

  private clienteService = inject(ClienteService);

  public ngOnInit(): void {
    this.listaClientes = this.clienteService.pesquisarCliente('');
    console.log(this.listaClientes, 'Lista de clientes');
  }

  public pesquisarCliente(): void {
    this.listaClientes = this.clienteService.pesquisarCliente(this.pesquisaPorNome);
  }

}
