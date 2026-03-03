import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  activeCategory = 'All';

  onCategoryChange(category: string) {
    this.activeCategory = category;
  }
}
