import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { GalleryService } from '../../services/gallery.service';
import { GalleryItem } from '../../models/gallery-item.model';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit, OnChanges, OnDestroy {
  @Input() activeCategory: string = 'All';

  items: GalleryItem[] = [];
  filteredItems: GalleryItem[] = [];
  selectedItem: GalleryItem | null = null;
  errorMessage: string = '';
  private destroy$ = new Subject<void>();

  constructor(private galleryService: GalleryService) { }

  ngOnInit(): void {
    this.galleryService.getGalleryItems()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (data) => {
          this.items = data;
          this.filterItems();
        },
        error: (error) => {
          this.errorMessage = 'Error loading the gallery. Please try again later.';
          console.error('Error loading gallery:', error);
        }
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

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private filterItems() {
    if (this.activeCategory === 'All') {
      this.filteredItems = [...this.items];
    } else {
      this.filteredItems = this.items.filter(item => item.category === this.activeCategory);
    }
  }
}
