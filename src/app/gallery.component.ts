import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'gallery',
  templateUrl: `./gallery.component.html`,
})
export class GalleryComponent { 
    @Input() images:Image[];
}
