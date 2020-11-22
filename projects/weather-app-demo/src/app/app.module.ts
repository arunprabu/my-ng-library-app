import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyWeatherLibModule } from 'my-weather-lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyWeatherLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
