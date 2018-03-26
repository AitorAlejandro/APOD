import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PickADateComponent } from './pick-a-date/pick-a-date.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PickADateComponent],
  exports: [PickADateComponent]
})
export class PickADateModule { }
