import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ScrollSpyModule } from '@thisissoon/angular-scrollspy';

import { AppComponent }  from './app.component';

@NgModule({
  imports: [BrowserModule, ScrollSpyModule],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
