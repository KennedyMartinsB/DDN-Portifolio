import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GalleryItem } from '../models/gallery-item.model';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  private jsonUrl = 'assets/data/gallery.json';

  constructor(private http: HttpClient) { }

  getGalleryItems(): Observable<GalleryItem[]> {
    return this.http.get<GalleryItem[]>(this.jsonUrl);
  }
}
