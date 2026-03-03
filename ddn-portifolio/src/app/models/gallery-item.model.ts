export interface GalleryItem {
  id: number;
  title: string;
  year: string;
  category: string;
  imageUrl: string; // This will serve as the primary thumbnail in the grid
  images?: string[]; // Up to 5 images for the detailed view
}
