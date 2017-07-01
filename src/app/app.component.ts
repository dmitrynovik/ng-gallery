import { Component, AfterContentInit } from '@angular/core';
import ImageList from './image-list';

@Component({
  selector: 'my-app',
  templateUrl: `./app.component.html`,
})
export class AppComponent implements AfterContentInit  { 

  images = new ImageList( [
      {src: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Sydney_Opera_House_-_Dec_2008.jpg"},
      {src: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Aerial_view_of_Sydney_Harbour.jpg"},
      {src: "https://static.pexels.com/photos/54610/sydney-opera-house-australia-54610.jpeg"},
      {src: "https://upload.wikimedia.org/wikipedia/commons/7/72/Sydney_skyline_from_the_north_aerial_2010.jpg"}
    ]);

    ngAfterContentInit() {
        this.images.play();
    }
}
