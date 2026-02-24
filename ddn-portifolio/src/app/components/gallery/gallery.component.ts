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
  @Input() activeCategory: string = 'All';

  items: GalleryItem[] = [
    { id: 1, title: 'Saturno', year: '2023', category: 'originals', imageUrl: 'assets/img/saturno.jpg' },
    { id: 2, title: 'Rael', year: '2022', category: 'originals', imageUrl: 'assets/img/bk.jpeg' },
    { id: 3, title: 'Veigh', year: '2022', category: 'originals', imageUrl: 'assets/img/veigh.jpeg' },
    { id: 4, title: 'Djonga', year: '2023', category: 'originals', imageUrl: 'assets/img/djonga.jpg' },
    { id: 5, title: 'Guilherme Fortunato', year: '2023', category: 'originals', imageUrl: 'assets/img/fortunato.jpg' },
    { id: 6, title: 'Kayblack', year: '2021', category: 'originals', imageUrl: 'assets/img/kayblack.jpg' },
    { id: 7, title: 'Jean Paulo', year: '2023', category: 'originals', imageUrl: 'assets/img/jean.jpeg' },
    { id: 8, title: 'Teto', year: '2023', category: 'originals', imageUrl: 'assets/img/teto.jpg' },
    { id: 9, title: 'Chefe De Quebrada', year: '2022', category: 'originals', imageUrl: 'assets/img/chefe.jpg' },
    { id: 10, title: 'Vulgo FK', year: '2023', category: 'originals', imageUrl: 'assets/img/tz.jpg' },
    { id: 11, title: 'Will Cypriano', year: '2023', category: 'originals', imageUrl: 'assets/img/will.jpg' },
    { id: 12, title: 'Rael', year: '2022', category: 'originais', imageUrl: 'assets/img/rael.png' },
    { id: 13, title: 'Mc PH & Mc IG', year: '2023', category: 'originals', imageUrl: 'assets/img/4m.jpg' },
    { id: 14, title: 'DOD Alfaiataria X Tencel', year: '2024', category: 'brands', imageUrl: 'assets/img/marcas/dod/dod-1.jpg' },
    { id: 13, title: 'DOD Alfaiataria X Tencel', year: '2024', category: 'brands', imageUrl: 'assets/img/marcas/dod/dod-2.jpg' },
    { id: 13, title: 'DOD Alfaiataria X Tencel', year: '2024', category: 'brands', imageUrl: 'assets/img/marcas/dod/dod-3.jpg' },
    { id: 13, title: 'DOD Alfaiataria X Tencel', year: '2024', category: 'brands', imageUrl: 'assets/img/marcas/dod/dod-4.jpg' },
  ];

  // categories = ['All', 'originals', 'fashion', 'artists'];

  filteredItems: GalleryItem[] = [...this.items];

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

