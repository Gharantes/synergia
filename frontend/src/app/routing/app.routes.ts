import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  {
    path: 'home',
    loadChildren: () =>
      import('@synergia-frontend/routes').then(m => m.homeRouteRoutes)
  },
  {
    path: 'create-grouping',
    loadChildren: () =>
      import('@synergia-frontend/routes').then(m => m.createGroupingRoutes)
  },
];
