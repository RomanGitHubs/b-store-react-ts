import moment from 'moment';
import { BookModel } from '../../models/book';
import { IRequestState } from '../../models/request';
import testBooks from '../temp/books';

interface ICatalogBooks {
  books: BookModel[]
  minPrice: number
  maxPrice: number
  totalBooks: number
}

export const getCatalogBooks = (state: IRequestState) => {
  const byGenres = getBooksByGenres(state.selectedGenres);
  const byPrice = getBooksByPrice(byGenres, +(state.selectedMinPrice /
  100).toFixed(5), state.selectedMaxPrice / 100);
  const bySort = getBooksBySort(byPrice, state.selectedSort, state.selectedOrder);
  const byQuery = getBooksByQuery(bySort, state.selectedQuery.toLocaleLowerCase());

  const books = byQuery.slice(
    state.currentPage * state.pageSize,
    (state.currentPage + 1) * state.pageSize,
  );

  const totalBooks = byQuery.length;

  const arr: number[] = [];
  testBooks.forEach((item) => { arr.push(item.hardPrice); arr.push(item.paperPrice); });

  const minPrice = +(Math.min(...arr) * 100).toFixed(2);
  const maxPrice = +(Math.max(...arr) * 100).toFixed(2);

  return new Promise<ICatalogBooks>((res) => {
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

const getBooksByGenres = (genres: string[]) => {
  if (genres.length === 0) return testBooks;
  return testBooks.filter((item) => genres.some((elem) => item.genre.includes(elem)));
};

const getBooksByPrice = (books: BookModel[], minVal: number, maxVal: number) => {
  if (minVal === 0 && maxVal === 0) return books;
  return books.filter((item) => item.paperPrice >= minVal && item.paperPrice <= maxVal &&
  item.hardPrice >= minVal && item.hardPrice <= maxVal);
};

const getBooksBySort = (books: BookModel[], sort: 'price' | 'title' | 'author' | 'rating' | 'date', order: 'ASC' | 'DESC') => {
  let name: 'hardPrice' | 'title' | 'author' | 'rating' | 'date';
  if (sort === 'price') name = 'hardPrice';
  if (sort === 'title') name = 'title';
  if (sort === 'author') name = 'author';
  if (sort === 'rating') name = 'rating';
  if (sort === 'date') name = 'date';

  function compareASC(a: BookModel, b: BookModel) {
    if (name === 'date') {
      if (moment(a[name], 'DD-MM-YYYY').valueOf() < moment(b[name], 'DD-MM-YYYY').valueOf()) {
        return -1;
      }
      if (moment(a[name], 'DD-MM-YYYY').valueOf() > moment(b[name], 'DD-MM-YYYY').valueOf()) {
        return 1;
      }
    }

    if (name !== 'date') {
      if (a[name] < b[name]) {
        return -1;
      }
      if (a[name] > b[name]) {
        return 1;
      }
    }
    return 0;
  }

  function compareDESC(a: BookModel, b: BookModel) {
    if (a[name] < b[name]) {
      return 1;
    }
    if (a[name] > b[name]) {
      return -1;
    }
    return 0;
  }

  if (order === 'ASC') return books.sort(compareASC);
  return books.sort(compareDESC);
};

const getBooksByQuery = (books: BookModel[], query: string) => {
  return books.filter((item) => item.author.toLocaleLowerCase().includes(query) ||
  item.title.toLocaleLowerCase().includes(query));
};
