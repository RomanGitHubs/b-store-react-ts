import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { loadBookThunk, putBooks, putGenres } from '../../store/reducers/book';
import { getBooks } from '../../api/services/books';
import tempBooks from '../../api/temp/books';
import tempGenres from '../../api/temp/genres';
import { reqGenres, reqPagination } from '../../store/reducers/request';
import Pagination from '../Pagination/Pagination';
import Filters from '../Filters/Filters';
import Book from '../Book/Book';
import Loader from '../Loaders/Loader';

const CatalogBody: React.FC = () => {
  const dispatch = useAppDispatch();
  const books = useAppSelector((state) => state.bookSlice.books);

  const {
    selectedGenres,
    selectedMinPrice,
    selectedMaxPrice,
    selectedSort,
    selectedOrder,
    selectedQuery,
    selectedPagination,
  } = useAppSelector((state) => state.requestSlice);

  useEffect(() => {
    (async () => {
      try {
      // const init = await getBooks(data);
      // dispatch(putBooks(filtred.data));
      // dispatch(putBooks(books));
      // dispatch(putGenres(genres));
      // dispatch(putBooks(filtred.data));
      // dispatch(putBooks(tempBooks));
      // dispatch(putGenres(tempGenres));
      } catch (e: any) {
        console.error('Error books >>> ', e);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const data = {
          genre: selectedGenres,
          minPrice: selectedMinPrice,
          maxPrice: selectedMaxPrice,
          sort: selectedSort,
          order: selectedOrder,
          query: selectedQuery,
          page: selectedPagination?.currentPage,
        };
        dispatch(loadBookThunk());

        // console.log('Sended data >>> ', data);
      } catch (e: any) {
        console.error('Error books >>> ', e);
      }
    })();
  }, [
    selectedGenres,
    selectedMinPrice,
    selectedMaxPrice,
    selectedSort,
    selectedOrder,
    selectedQuery,
    selectedPagination,
  ]);

  const status = useAppSelector((state) => state.bookSlice.status);

  return (
    <Body>
      <div className='bar'>
        <h2 className='bar__title'>Catalog</h2>
        <Filters/>
      </div>
      {status === 'loading' && <Loader/> }
      {(books?.length !== 0 && status !== 'loading') &&
        <>
          <div className='book-content'>
            {books?.map((item) => (
              <Book key={item.bookId} book={item}/>
            ))}
          </div>

          {/* <Pagination/> */}
        </>
        // <div className='empty-catalog'>
        //   Empty
        // </div>
      }
    </Body>
  );
};

export default CatalogBody;

const Body = styled.section`
  display: flex;
  flex-direction: column;
  margin: 90px auto 80px;

  .bar {
    display:flex;
    justify-content: space-between;
    align-items: center;

    &__title {
      font-weight: 700;
      font-size: 40px;
      line-height: 60px;
      color: var(--dark);
      margin: 0;
    }
  }

  .book-content {
    display: flex;
    flex-wrap: wrap;
    margin: 40px auto 0;
    gap: 20px;
  }

  .empty-catalog {
    display: flex;
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
    color: var(--dark);
    margin: 100px auto 100px;
  }
`;
