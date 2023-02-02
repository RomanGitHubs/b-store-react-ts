import { BookModel } from '../../models/book';
// import { IRequestState } from '../../models/request';
// import { useAppSelector } from '../../store/hooks';
import testBooks from '../temp/books';

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

  return new Promise<BookModel[]>((res) => {
    setTimeout(() => {
      res(testBooks);
    }, 610);
  });
};
