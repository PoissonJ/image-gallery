import { RouterModule, Routes } from '@angular/router';

import { homeRoutes } from './home/index';

const appRoutes: Routes = [
  ...homeRoutes,
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
