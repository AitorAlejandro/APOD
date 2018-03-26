import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Last10Component } from './last-10.component';

const routes: Routes = [
  {
    path: '',
    component: Last10Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Last10RoutingModule {}
