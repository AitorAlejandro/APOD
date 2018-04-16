import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { ApodComponent } from './apod/apod.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    NavComponent,
    FooterComponent,
    ApodComponent
  ],
  exports: [
    NavComponent,
    FooterComponent,
    ApodComponent
  ]
})
export class ComponentsModule { }
