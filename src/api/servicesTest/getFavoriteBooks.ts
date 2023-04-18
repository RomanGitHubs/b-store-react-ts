import { BookModel } from '../../models/book';
import testBooks from '../temp/books';

export const getFavoriteBooks = (state: string[] | undefined) => {
  const books = testBooks.filter((item) => state?.includes(item.bookId));
  return new Promise<BookModel[]>((res) => {
    setTimeout(() => {
      res(books);
    }, 610);
  });
};
