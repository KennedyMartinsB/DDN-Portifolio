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
    { id: 1, title: 'Saturno', year: '2023', category: 'Originals', imageUrl: 'assets/img/saturno.jpg' },
    { id: 2, title: 'Rael', year: '2022', category: 'Originals', imageUrl: 'assets/img/bk.jpeg' },
    { id: 3, title: 'Veigh', year: '2022', category: 'Originals', imageUrl: 'assets/img/veigh.jpeg' },
    { id: 4, title: 'Djonga', year: '2023', category: 'Originals', imageUrl: 'assets/img/djonga.jpg' },
    { id: 5, title: 'Guilherme Fortunato', year: '2023', category: 'Originals', imageUrl: 'assets/img/fortunato.jpg' },
    { id: 6, title: 'Kayblack', year: '2021', category: 'Originals', imageUrl: 'assets/img/kayblack.jpg' },
    { id: 7, title: 'Jean Paulo', year: '2023', category: 'Originals', imageUrl: 'assets/img/jean.jpeg' },
    { id: 8, title: 'Teto', year: '2023', category: 'Originals', imageUrl: 'assets/img/teto.jpg' },
    { id: 9, title: 'Chefe De Quebrada', year: '2022', category: 'Originals', imageUrl: 'assets/img/chefe.jpg' },
    { id: 10, title: 'Vulgo FK', year: '2023', category: 'Originals', imageUrl: 'assets/img/tz.jpg' },
    { id: 11, title: 'Will Cypriano', year: '2023', category: 'Originals', imageUrl: 'assets/img/will.jpg' },
    { id: 12, title: 'Rael', year: '2022', category: 'Originais', imageUrl: 'assets/img/rael.png' },
    { id: 13, title: 'Mc PH & Mc IG', year: '2023', category: 'Originals', imageUrl: 'assets/img/4m.jpg' },
    { id: 14, title: 'DOD Alfaiataria X Tencel', year: '2024', category: 'Brands', imageUrl: 'assets/img/marcas/dod/dod-1.jpg' },
    { id: 15, title: 'DOD Alfaiataria X Tencel', year: '2024', category: 'Brands', imageUrl: 'assets/img/marcas/dod/dod-2.jpg' },
    { id: 16, title: 'DOD Alfaiataria X Tencel', year: '2024', category: 'Brands', imageUrl: 'assets/img/marcas/dod/dod-3.jpg' },
    { id: 17, title: 'DOD Alfaiataria X Tencel', year: '2024', category: 'Brands', imageUrl: 'assets/img/marcas/dod/dod-4.jpg' },
    { id: 18, title: 'Moda Geracional', year: '2026', category: 'Fashion', imageUrl: 'assets/img/moda/moda-1.jpg' },
    { id: 19, title: 'Moda Geracional', year: '2026', category: 'Fashion', imageUrl: 'assets/img/moda/moda-2.jpg' },
    { id: 20, title: 'Moda Geracional', year: '2026', category: 'Fashion', imageUrl: 'assets/img/moda/moda-3.jpg' },
    { id: 21, title: 'Moda Geracional', year: '2026', category: 'Fashion', imageUrl: 'assets/img/moda/moda-4.jpg' },
    { id: 22, title: 'Criolo', year: '2026', category: 'Artists', imageUrl: 'assets/img/artistas/criolo/criolo-1.jpg' },
    { id: 23, title: 'Dino dSantiago', year: '2026', category: 'Artists', imageUrl: 'assets/img/artistas/criolo/dino-2.jpg' },
    { id: 24, title: 'Amaro Freitas', year: '2026', category: 'Artists', imageUrl: 'assets/img/artistas/criolo/amaro-3.jpg' },
    { id: 25, title: 'Criolo, Amaro e Dino', year: '2026', category: 'Artists', imageUrl: 'assets/img/artistas/criolo/CAD-4.jpg' },
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

