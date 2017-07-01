import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: `./app.component.html`,
})
export class AppComponent  { 

    //
    // Default presets
    //
    selectedImage:Image = {src: "https://upload.wikimedia.org/wikipedia/commons/1/15/Operahuset_i_Sydney.JPG"};

    images:Image[] = [
      {src: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Sydney_Opera_House_-_Dec_2008.jpg"},
      {src: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Sydney_Harbour_pano_at_night.jpg"},
      {src: "https://static.pexels.com/photos/54610/sydney-opera-house-australia-54610.jpeg"},
      {src: "https://upload.wikimedia.org/wikipedia/commons/7/72/Sydney_skyline_from_the_north_aerial_2010.jpg"}
    ];

}
