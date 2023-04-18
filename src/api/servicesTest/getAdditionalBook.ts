import { BookModel } from '../../models/book';
import { IRequestState } from '../../models/request';
import testBooks from '../temp/books';

export const getAdditionalBook = (state: IRequestState) => {
  const books = testBooks.slice(
    state.currentPage * state.pageSize,
    (state.currentPage + 1) * state.pageSize,
  );
  return new Promise<BookModel[]>((res) => {
    setTimeout(() => {
      res(books);
    }, 610);
  });
};
