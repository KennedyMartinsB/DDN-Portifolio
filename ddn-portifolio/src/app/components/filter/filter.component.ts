import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  @Output() categoryChange = new EventEmitter<string>();

  categories = ['All', 'Magazine', 'Originals', 'Fashion', 'Artists', 'Brands'];
  selectedCategory = 'All';

  // selectCategory(category: string) {
  //   this.selectedCategory = category;
  //   this.categoryChange.emit(category);
  //   if (event?.currentTarget) {
  //   (event.currentTarget as HTMLElement).scrollIntoView({
  //     behavior: 'smooth',
  //     inline: 'center',
  //     block: 'nearest'
  //   });
  // }
  // }

  selectCategory(category: string, event?: Event) {
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
