import { browser } from 'protractor';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { browserAnimationsModule } from '@angular/plataform-browser/animations';
import { MatButtonModule } from '@angular/material'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
