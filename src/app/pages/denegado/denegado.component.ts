import { Component } from '@angular/core';
import {LogoPrincipalComponent} from '../shared/icons/logo-principal/logo-principal.component';
import {Card} from 'primeng/card';

@Component({
  selector: 'app-denegado',
  imports: [
    LogoPrincipalComponent,
    Card
  ],
  templateUrl: './denegado.component.html',
  styleUrl: './denegado.component.css'
})
export class DenegadoComponent {

}
