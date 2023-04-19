export type BookModel = {
  bookId: string;
  photo: string;
  author: string;
  title: string;
  description: string;
  rating: number;
  ratingCount: number;
  available: boolean;
  hardcover: boolean;
  paperback: boolean;
  hardPrice: number;
  paperPrice: number;
  news: boolean;
  bestsaller: boolean;
  date: string;
  genre: string[];
}
