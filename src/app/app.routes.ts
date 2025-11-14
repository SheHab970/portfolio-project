import { Routes } from '@angular/router';

export const routes: Routes = [
 {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
 {
    path: 'home',
    loadComponent: () =>
      import('./modules/pages/home/home').then(
        (c) => c.Home,
      ),
  },
 {
    path: 'about',
    loadComponent: () =>
      import('./modules/pages/about/about').then(
        (c) => c.About,
      ),
  },
 {
    path: 'projects',
    loadComponent: () =>
      import('./modules/pages/projects/projects').then(
        (c) => c.Projects,
      ),
  },
 {
    path: 'services',
    loadComponent: () =>
      import('./modules/pages/services/services').then(
        (c) => c.Services,
      ),
  },
 {
    path: 'contact',
    loadComponent: () =>
      import('./modules/pages/contact/contact').then(
        (c) => c.Contact,
      ),
  },
];
