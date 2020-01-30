import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { TrainsComponent } from './trains/trains.component';
import { HttpClientModule } from '@angular/common/http';
import { TrainsreturnComponent } from './trainsreturn/trainsreturn.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TrainsComponent,
    TrainsreturnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
