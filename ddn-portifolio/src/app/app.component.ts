import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ddn-portifolio';
  activeCategory = 'Todos';

  onCategoryChange(category: string) {
    this.activeCategory = category;
  }
}
