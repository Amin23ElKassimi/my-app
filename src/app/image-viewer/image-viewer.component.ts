import { Component } from '@angular/core';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrl: './image-viewer.component.scss'
})
export class ImageViewerComponent {
  imageUrl: string = 'https://wallpapercave.com/wp/wp5493206.jpg';
}
