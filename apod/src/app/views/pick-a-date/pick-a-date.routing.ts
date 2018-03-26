import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PickADateModule } from './pick-a-date.module';
import { PickADateComponent } from './pick-a-date/pick-a-date.component';

const routes: Routes = [
  {
    path: '',
    component: PickADateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PickADateRoutingModule {}
