import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PickADateRoutingModule } from './pick-a-date.routing';
import { PickADateComponent } from './pick-a-date/pick-a-date.component';

@NgModule({
  imports: [
    CommonModule,
    PickADateRoutingModule
  ],
  declarations: [PickADateComponent]
})
export class PickADateModule { }
