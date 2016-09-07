import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { CompletedFilterPipe, TodolistComponent } from './index';

@NgModule({
  declarations: [
    CompletedFilterPipe,
    TodolistComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  exports: [
    CompletedFilterPipe,
    TodolistComponent
  ]
})
export class TodolistModule {
}
