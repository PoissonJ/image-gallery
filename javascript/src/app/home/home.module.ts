import { NgModule } from '@angular/core';

import { GalleryModule } from '../gallery/index';
import { HomeComponent } from './index';

@NgModule({
  imports: [
    GalleryModule
  ],
  declarations: [
      HomeComponent
  ],
  exports: [
      HomeComponent
  ]
})
export class HomeModule {
}
