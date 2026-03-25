import { Component, EventEmitter, HostListener, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  @Output() categoryChange = new EventEmitter<string>();

  categories = ['All', 'Magazine', 'Originals', 'Fashion', 'Artists', 'Brands'];
  selectedCategory = 'All';
  filterMenuOpen = false;

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.filterMenuOpen) {
      this.filterMenuOpen = false;
    }
  }

  openFilterMenu(): void {
    this.filterMenuOpen = true;
  }

  closeFilterMenu(): void {
    this.filterMenuOpen = false;
  }

  onMobileFilterButtonClick(): void {
    if (this.filterMenuOpen) {
      this.closeFilterMenu();
    } else {
      this.openFilterMenu();
    }
  }

  selectCategoryMobile(category: string): void {
    this.selectedCategory = category;
    this.categoryChange.emit(category);
    this.filterMenuOpen = false;
  }

  selectCategory(category: string, event?: Event): void {
    this.selectedCategory = category;
    this.categoryChange.emit(category);
    if (event?.currentTarget) {
      (event.currentTarget as HTMLElement).scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest'
      });
    }
  }
}
