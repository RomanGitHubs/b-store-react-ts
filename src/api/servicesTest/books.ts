import { BookModel } from '../../models/book';
import { IRequestState } from '../../models/request';
import testBooks from '../temp/books';

interface IPromise {
  books: BookModel[]
  minPrice: number
  maxPrice: number
  totalBooks: number
}

export const getBooks = (state: IRequestState) => {
  const books = testBooks.slice(
    state.currentPage * state.pageSize,
    (state.currentPage + 1) * state.pageSize,
  );

  const totalBooks = testBooks.length;

  const arr: number[] = [];
  testBooks.forEach((item) => { arr.push(item.hardPrice); arr.push(item.paperPrice); });

  const minPrice = +(Math.min(...arr) * 100).toFixed(2);
  const maxPrice = +(Math.max(...arr) * 100).toFixed(2);

  return new Promise<IPromise>((res) => {
    setTimeout(() => {
      res({
        books,
        minPrice,
        maxPrice,
        totalBooks,
      });
    }, 610);
  });
};
