import { Component, AfterContentInit, Renderer2, ElementRef } from '@angular/core';
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

    constructor(private renderer: Renderer2, private elementRef: ElementRef) {
    }

    ngAfterContentInit() {
        this.images.play();

        this.renderer.listen(this.elementRef.nativeElement, 'paste', (event:any) => {
            console.log('paste detected');         

            const clipboard = event.clipboardData || event.originalEvent.clipboardData;
            if (clipboard && clipboard.items && clipboard.items) {

			for (let index in clipboard.items) {
    			var item = clipboard.items[index];
    			if (item.kind === 'file') {

      				var blob = item.getAsFile();
      				var reader = new FileReader();
					const self = this;

      				reader.onload = function(event) {
						const target:any = event.target;
        					self.images.addImage(target.result);
					};

      				reader.readAsDataURL(blob);
    			}
  			}            
		  }
     	});
    }
}
