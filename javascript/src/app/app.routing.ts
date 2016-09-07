import { RouterModule, Routes } from '@angular/router';

import { homeRoutes } from './home/index';
import { todolistRoutes } from './todolist/index';

const appRoutes: Routes = [
  ...homeRoutes,
  ...todolistRoutes
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
