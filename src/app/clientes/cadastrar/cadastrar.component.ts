import { Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Cliente } from './../cliente';


@Component({
  selector: 'app-cadastrar',
  imports: [
    FlexLayoutModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './cadastrar.component.html',
  styleUrl: './cadastrar.component.scss',
})
export class CadastrarComponent {

  public cliente: Cliente = Cliente.newCliente();

  public salvarCliente(){
    console.log(this.cliente, "salvarCliente");

  }

}
