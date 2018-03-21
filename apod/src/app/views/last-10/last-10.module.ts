import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Last10Component } from './last-10.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [Last10Component],
  exports: [Last10Component]
})
export class Last10Module { }
