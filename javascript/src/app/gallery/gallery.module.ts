import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { GalleryComponent } from './index';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    GalleryComponent
  ],
  exports: [
    GalleryComponent
  ]
})
export class GalleryModule {
}
