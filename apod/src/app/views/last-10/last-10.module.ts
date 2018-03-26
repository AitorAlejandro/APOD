import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Last10RoutingModule } from './last-10.routing';
import { Last10Component } from './last-10.component';

@NgModule({
  imports: [
    CommonModule,
    Last10RoutingModule
  ],
  declarations: [Last10Component]
})
export class Last10Module { }
