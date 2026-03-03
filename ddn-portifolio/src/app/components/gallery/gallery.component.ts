import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { GalleryService } from '../../services/gallery.service';
import { GalleryItem } from '../../models/gallery-item.model';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit, OnChanges {
  @Input() activeCategory: string = 'All';

  items: GalleryItem[] = [];
  filteredItems: GalleryItem[] = [];
  selectedItem: GalleryItem | null = null;

  constructor(private galleryService: GalleryService) { }

  ngOnInit(): void {
    this.galleryService.getGalleryItems().subscribe(data => {
      this.items = data;
      this.filterItems();
    });
  }

  openModal(item: GalleryItem) {
    this.selectedItem = item;
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.selectedItem = null;
    document.body.style.overflow = 'auto';
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['activeCategory']) {
      this.filterItems();
    }
  }

  private filterItems() {
    if (this.activeCategory === 'All') {
      this.filteredItems = [...this.items];
    } else {
      this.filteredItems = this.items.filter(item => item.category === this.activeCategory);
    }
  }
}
