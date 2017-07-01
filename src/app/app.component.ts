import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: `./app.component.html`,
})
export class AppComponent implements AfterViewInit  { 

  images:any[] = [
      {src: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Sydney_Opera_House_-_Dec_2008.jpg"},
      {src: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Aerial_view_of_Sydney_Harbour.jpg"},
      {src: "https://static.pexels.com/photos/54610/sydney-opera-house-australia-54610.jpeg"},
      {src: "https://upload.wikimedia.org/wikipedia/commons/7/72/Sydney_skyline_from_the_north_aerial_2010.jpg"}
    ];

    private interval = 2000;
    private timer:NodeJS.Timer = null;
    private isPlaying:boolean = true;
    private currentIndex = 0;
    private selectedImage = this.images[this.currentIndex];

    changeImage = () => {
        this.selectedImage.isSelected = false;
        this.selectedImage = this.images[++this.currentIndex % this.images.length];
        this.selectedImage.isSelected = true;
    };

    play = () => {
      this.isPlaying = true;
      this.changeImage();
      this.timer = setTimeout(this.play, this.interval);
    };

    stop = () => { 
      clearTimeout(this.timer);
      this.isPlaying = false;
    }

    toggleState = () => this.isPlaying ? this.stop() : this.play();

    ngAfterViewInit() {
        this.play();
    }
}
