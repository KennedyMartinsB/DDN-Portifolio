import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { GalleryItem } from '../../models/gallery-item.model';

@Component({
  selector: 'app-gallery-modal',
  templateUrl: './gallery-modal.component.html',
  styleUrls: ['./gallery-modal.component.scss']
})
export class GalleryModalComponent {
  @Input() item: GalleryItem | null = null;
  @Output() close = new EventEmitter<void>();

  currentIndex: number = 0;

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.onClose();
    } else if (event.key === 'ArrowRight') {
      this.nextImage();
    } else if (event.key === 'ArrowLeft') {
      this.prevImage();
    }
  }

  onClose() {
    this.close.emit();
  }

  nextImage() {
    if (this.item?.images && this.item.images.length > 0) {
      this.currentIndex = (this.currentIndex + 1) % this.item.images.length;
    }
  }

  prevImage() {
    if (this.item?.images && this.item.images.length > 0) {
      this.currentIndex = (this.currentIndex - 1 + this.item.images.length) % this.item.images.length;
    }
  }

  selectImage(index: number) {
    this.currentIndex = index;
  }
}
