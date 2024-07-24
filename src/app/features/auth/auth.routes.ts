import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const authRoutes: Routes = [
  {
    title: 'login',
    path: 'login',
    component: LoginComponent,
  },
];
