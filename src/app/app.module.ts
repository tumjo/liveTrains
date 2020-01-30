import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { TrainsComponent } from './trains/trains.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialdesignModule } from './materialdesign/materialdesign.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TrainsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialdesignModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
