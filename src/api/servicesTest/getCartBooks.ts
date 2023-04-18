import { BookModel } from '../../models/book';
import testBooks from '../temp/books';

export const getCartBooks = (usersCart: string[] | undefined) => {
  const book = testBooks.filter((item) => usersCart?.includes(item.bookId));
  return new Promise<BookModel[]>((res) => {
    setTimeout(() => {
      res(book);
    }, 610);
  });
};
