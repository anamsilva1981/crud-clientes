import { Component, inject, OnInit, Query } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Cliente } from './../cliente';
import { ClienteService } from '../cliente.service';
import { ActivatedRoute } from '@angular/router';

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
  ],
  templateUrl: './cadastrar.component.html',
  styleUrl: './cadastrar.component.scss',
})
export class CadastrarComponent implements OnInit {
  private clienteService = inject(ClienteService);
  private route = inject(ActivatedRoute);

  public cliente: Cliente = Cliente.newCliente();
  public atualizando: boolean = false;

  public ngOnInit(): void {
    this.carregarClientePorId();
  }

  private carregarClientePorId(): void {
    this.route.queryParamMap.subscribe((query: any) => {
      const params = query['params'];
      const id = params['id'];
      if (id) {
        this.atualizando = true;
        this.cliente =
          this.clienteService.buscarClientePorId(id) || Cliente.newCliente();
      }
    });
  }

  public salvarCliente() {
    this.clienteService.salvarCliente(this.cliente);
    this.cliente = Cliente.newCliente();
    alert('Cliente salvo com sucesso!');
  }
}
