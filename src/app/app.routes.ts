import {Routes} from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {DenegadoComponent} from './pages/denegado/denegado.component';

export const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {
    path: 'denegado',
    component: DenegadoComponent,
  },
];
