import { Component, Input } from '@angular/core';

@Component({
  selector: 'slide',
  templateUrl: `./slide.component.html`,
})
export class SlideComponent  { 
    @Input() image:any;
}
