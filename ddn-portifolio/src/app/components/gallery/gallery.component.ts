import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

interface GalleryItem {
  id: number;
  title: string;
  year: string;
  category: string;
  imageUrl: string;
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnChanges {
  @Input() activeCategory: string = 'Todos';

  items: GalleryItem[] = [
    { id: 1, title: 'Saturno', year: '2023', category: 'originais', imageUrl: 'assets/img/saturno.jpg' },
    { id: 2, title: 'Mc PH & Mc IG', year: '2023', category: 'originais', imageUrl: 'assets/img/4m.jpg' },
    { id: 3, title: 'Chefe De Quebrada', year: '2022', category: 'originais', imageUrl: 'assets/img/chefe.jpg' },
    { id: 4, title: 'Djonga', year: '2023', category: 'originais', imageUrl: 'assets/img/djonga.jpg' },
    { id: 5, title: 'Guilherme Fortunato', year: '2023', category: 'originais', imageUrl: 'assets/img/fortunato.jpg' },
    { id: 6, title: 'Kayblack', year: '2021', category: 'originais', imageUrl: 'assets/img/kayblack.jpg' },
    { id: 7, title: 'Jean Paulo', year: '2023', category: 'originais', imageUrl: 'assets/img/jean.jpeg' },
    { id: 8, title: 'Teto', year: '2023', category: 'originais', imageUrl: 'assets/img/teto.jpg' },
    { id: 9, title: 'Veigh', year: '2022', category: 'originais', imageUrl: 'assets/img/veigh.jpeg' },
    { id: 10, title: 'Vulgo FK', year: '2023', category: 'originais', imageUrl: 'assets/img/vulgofk.jpg' },
    { id: 11, title: 'Will Cypriano', year: '2023', category: 'originais', imageUrl: 'assets/img/will.jpg' },
    { id: 12, title: 'Rael', year: '2022', category: 'originais', imageUrl: 'assets/img/rael.png' },
  ];

  filteredItems: GalleryItem[] = [...this.items];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['activeCategory']) {
      this.filterItems();
    }
  }

  private filterItems() {
    if (this.activeCategory === 'Todos') {
      this.filteredItems = [...this.items];
    } else {
      this.filteredItems = this.items.filter(item => item.category === this.activeCategory);
    }
  }
}

