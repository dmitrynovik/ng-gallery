import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import ImageList from './image-list';

@Component({
  selector: 'gallery',
  templateUrl: `./gallery.component.html`,
})
export class GalleryComponent { 
    @Input() images:ImageList;

    toggleImage(e:any) {
        const src = e.target.src;
        this.images.selectImage(src);
    }
}
