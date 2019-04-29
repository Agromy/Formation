import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavListComponent } from './nav-list/nav-list.component';
import { DetailComponentComponent } from './detail-component/detail-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NavListComponent,
    DetailComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
