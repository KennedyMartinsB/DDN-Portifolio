import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { GalleryItem } from '../models/gallery-item.model';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  private jsonUrl = `${environment.apiUrl}/gallery.json`;

  constructor(private http: HttpClient) { }

  getGalleryItems(): Observable<GalleryItem[]> {
    return this.http.get<GalleryItem[]>(this.jsonUrl);
  }
}
