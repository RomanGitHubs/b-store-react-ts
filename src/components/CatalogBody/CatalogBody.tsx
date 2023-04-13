import React, { useEffect } from 'react';
import styled from 'styled-components';
import { AxiosError } from 'axios';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { loadBooksThunk, loadGenreThunk } from '../../store/reducers/book';
import Filters from '../Filters/Filters';
import Book from '../Book/Book';
import Loader from '../Loaders/Loader';
import scrollToTop from '../ScrollToTop/ScrollToTop';
import Pagination from '../Pagination/Pagination';

interface ICatalogBody {
  openFilter: string
  setOpenFilter: (name: string) => void
}

const CatalogBody: React.FC<ICatalogBody> = (props) => {
  scrollToTop();
  const dispatch = useAppDispatch();
  const books = useAppSelector((state) => state.bookSlice.books);
  const status = useAppSelector((state) => state.bookSlice.status);
  const requestSlice = useAppSelector((state) => state.requestSlice);

  useEffect(() => {
    (async () => {
      try {
        dispatch(loadBooksThunk(requestSlice));
        dispatch(loadGenreThunk());
      } catch (e) {
        if (e instanceof AxiosError) {
          const { response } = e as AxiosError;
          return console.error('Error App >>> ', response?.data);
        }
      }
    })();
  }, [requestSlice]);

  return (
    <Body>
      <div className='bar'>
        <h2 className='bar__title'>Catalog</h2>
        <Filters filter={props}/>
      </div>
      {status === 'loading' && <Loader/> }
      {(books?.length !== 0 && status !== 'loading') &&
        <>
          <div className='book-content'>
            {books?.map((item) => (
              <Book key={item.bookId} book={item}/>
            ))}
          </div>

          <Pagination/>
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
    /* align-content: flex-start;
    align-items: stretch;
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    flex-wrap: wrap;
    justify-content: space-between; */
    /* display: grid; */
    display: flex;
    flex-wrap: wrap;
    margin: 40px auto 0;
    gap: 20px;
    /* justify-content: space-between; */
    /* -webkit-box-pack: justify; */
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
