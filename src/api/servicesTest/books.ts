import { BookModel } from '../../models/book';
// import { IRequestState } from '../../models/request';
// import { useAppSelector } from '../../store/hooks';
import testBooks from '../temp/books';

interface IPromise {
  books: BookModel[]
  minPrice: number
  maxPrice: number
}

export const getBooks = () => {
  // const {
  //   selectedGenres,
  //   selectedMinPrice,
  //   selectedMaxPrice,
  //   selectedSort,
  //   selectedOrder,
  //   selectedQuery,
  //   selectedPagination,
  // } = useAppSelector((state) => state.requestSlice);

  // const data = {
  //   genre: selectedGenres,
  //   minPrice: selectedMinPrice,
  //   maxPrice: selectedMaxPrice,
  //   sort: selectedSort,
  //   order: selectedOrder,
  //   query: selectedQuery,
  //   page: selectedPagination?.currentPage,
  // };

  return new Promise<IPromise>((res) => {
    setTimeout(() => {
      res({
        books: testBooks,
        minPrice: 0,
        maxPrice: 250,
      });
    }, 610);
  });
};
