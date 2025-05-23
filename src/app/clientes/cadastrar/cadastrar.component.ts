import { Component, inject, OnInit } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Cliente } from './../cliente';
import { ClienteService } from '../cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-cadastrar',
  imports: [
    FlexLayoutModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    NgIf
  ],
  templateUrl: './cadastrar.component.html',
  styleUrl: './cadastrar.component.scss',
})
export class CadastrarComponent implements OnInit {
  private clienteService = inject(ClienteService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  public cliente: Cliente = Cliente.newCliente();
  public atualizando: boolean = false;

  constructor() {}

  public ngOnInit(): void {
    this.carregarClientePorId();
  }

  private carregarClientePorId(): void {
    this.route.queryParamMap.subscribe((query: any) => {
      const params = query['params'];
      const id = params['id'];
      if (id) {
        let clienteEncontrado = this.clienteService.buscarClientePorId(id);
        if(clienteEncontrado){
          this.atualizando = true;
          this.cliente = clienteEncontrado;
        }
        
      }
    });
  }

  public salvarCliente() {
    if(!this.atualizando){

      this.clienteService.salvarCliente(this.cliente);
      this.cliente = Cliente.newCliente();
      this.router.navigate(['/lista'])
      alert('Cliente salvo com sucesso!');
    }else{
      this.clienteService.atualizarCliente(this.cliente);
      this.router.navigate(['/lista'])
      alert('Cliente atualizado com sucesso!');
    }
  }
}
