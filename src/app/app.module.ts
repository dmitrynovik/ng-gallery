import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { SlideComponent }  from './slide.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, SlideComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
