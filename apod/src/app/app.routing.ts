import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home/home.component';
import { Last10Component } from './views/last-10/last-10.component';
import { PickADateComponent } from './views/pick-a-date/pick-a-date/pick-a-date.component';
import { NotFoundComponent } from './views/not-found/not-found/not-found.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'last-10',
    component: Last10Component
  },
  {
    path: 'pick-a-date',
    component: PickADateComponent
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: '/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}