import { Routes } from '@angular/router';
import { CadastrarComponent } from './clientes/cadastrar/cadastrar.component';
import { ListarComponent } from './clientes/listar/listar.component';

export const routes: Routes = [

    { path: 'cadastro', component: CadastrarComponent },
    { path: 'lista', component: ListarComponent }
];
