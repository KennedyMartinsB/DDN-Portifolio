import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  @Output() categoryChange = new EventEmitter<string>();

  categories = ['All', 'originals', 'fashion', 'artists', 'brands'];
  // categories = ['Todos', 'originais', 'Celebridades', 'Publicidade', 'Filme'];
  // Capas, Originais, moda, Marca, artistas

  selectedCategory = 'Todos';

  selectCategory(category: string) {
    this.selectedCategory = category;
    this.categoryChange.emit(category);
  }
}
