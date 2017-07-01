import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { SlideComponent }  from './slide.component';
import { GalleryComponent }  from './gallery.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, SlideComponent, GalleryComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
