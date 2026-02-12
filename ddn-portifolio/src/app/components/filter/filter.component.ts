import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  @Output() categoryChange = new EventEmitter<string>();

  categories = ['Todos', 'originais', 'Celebridades', 'Publicidade', 'Filme'];
  selectedCategory = 'Todos';

  selectCategory(category: string) {
    this.selectedCategory = category;
    this.categoryChange.emit(category);
  }
}
