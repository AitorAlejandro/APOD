import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ComponentsModule } from './lib/components/components.module';
import { AppRoutingModule } from './app.routing';
import { HomeModule } from './views/home/home.module';
import { Last10Module } from './views/last-10/last-10.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    HomeModule,
    Last10Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
