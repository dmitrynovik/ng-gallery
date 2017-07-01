import { Component, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: `./app.component.html`,
})
export class AppComponent implements AfterViewChecked  { 

  images:Image[] = [
      {src: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Sydney_Opera_House_-_Dec_2008.jpg"},
      {src: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Sydney_Harbour_pano_at_night.jpg"},
      {src: "https://static.pexels.com/photos/54610/sydney-opera-house-australia-54610.jpeg"},
      {src: "https://upload.wikimedia.org/wikipedia/commons/7/72/Sydney_skyline_from_the_north_aerial_2010.jpg"}
    ];

    private currentIndex = 0;
    private interval = 2000;
    private timer:NodeJS.Timer;

    selectedImage = this.images[this.currentIndex];

    changeImage = () => this.selectedImage = this.images[this.currentIndex++ % this.images.length];

    play = () => {
      this.changeImage();
      this.timer = setTimeout(this.play, this.interval);
    };

    stop = () => clearTimeout(this.timer);

    ngAfterViewChecked() {
      if (!this.timer) {
        this.play();
      }
    }
}
