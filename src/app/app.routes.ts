import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  { path: '',
   redirectTo: 'login',
   pathMatch: 'full' },
  { path: 'login', 
    loadComponent: () => import('./vistas/login/login.component').then((m) => m.LoginComponent), 
  },
  { path: 'nuevo', 
    loadComponent: () => import('./vistas/nuevo/nuevo.component').then((m) => m.NuevoComponent),
  },
  { path: 'editar',
  loadComponent: () => import('./vistas/editar/editar.component').then((m) => m.EditarComponent),
  },
  { path: 'dashboard', 
  loadComponent: () => import('./vistas/dashboard/dashboard.component').then((m) => m.DashboardComponent),
  }
];

