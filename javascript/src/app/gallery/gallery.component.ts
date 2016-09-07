import { Component } from '@angular/core';

import { images } from './images';

@Component({
  selector: 'as-gallery',
  templateUrl: 'app/gallery/gallery.html',
  styleUrls: [
    'app/gallery/gallery.css'
  ]
})
export class GalleryComponent {
  private images: Object[];
  private currentImage: Object;
  private imageCount;

  constructor() {
    this.images = images;
    this.currentImage = images[0];
    this.imageCount = 0;
  }

  public getNextImage(): void {
    this.imageCount++;

    if (this.imageCount >= images.length) {
      this.imageCount = 0;
    }

    this.currentImage = this.images[this.imageCount];
  }

  public getPreviousImage(): void {
    this.imageCount--;

    if (this.imageCount < 0) {
      this.imageCount = this.images.length - 1;
    }

    this.currentImage = this.images[this.imageCount];
  }

  public getCurrentImage(): Object {
    return this.currentImage;
  }
}
