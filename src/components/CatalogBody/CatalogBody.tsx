import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Waypoint } from 'react-waypoint';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { getAdditionalBookThunk, getCatalogBooksThunk, loadGenreThunk, putCatalogBooks } from '../../store/reducers/book';
import { reqPagination } from '../../store/reducers/request';
import Filters from '../Filters/Filters';
import Book from '../Book/Book';
import Loader from '../Loaders/Loader';
import Pagination from '../Pagination/Pagination';
import { BookModel } from '../../models/book';
import books from '../../assets/cart-default.webp';

interface ICatalogBody {
  openFilter: string
  setOpenFilter: (name: string) => void
}

const CatalogBody: React.FC<ICatalogBody> = (props) => {
  const dispatch = useAppDispatch();
  const { catalogBooks, status, totalBooks } = useAppSelector((state) => state.bookSlice);
  const requestSlice = useAppSelector((state) => state.requestSlice);

  useEffect(() => {
    if (requestSlice.noLimit) {
      dispatch(getAdditionalBookThunk(requestSlice));
    }
    if (!requestSlice.noLimit) {
      dispatch(putCatalogBooks([]));
      dispatch(getCatalogBooksThunk(requestSlice));
      dispatch(loadGenreThunk());
    }
  }, [requestSlice]);

  const handleUpdateList = () => {
    if (((requestSlice.currentPage + 1) * requestSlice.pageSize) > totalBooks) return;
    dispatch(reqPagination(requestSlice.currentPage + 1));
  };

  return (
    <Body>
      <div className='bar'>
        <h2 className='bar__title'>Catalog</h2>
        <Filters filter={props}/>
      </div>

      {status === 'loading' && !requestSlice.noLimit && catalogBooks.length === 0 && <Body><Loader/></Body> }

      {catalogBooks?.length !== 0 &&
        <>
          <div className='book-content'>
            {catalogBooks?.map((item: BookModel) => (
              <Book key={item.bookId} book={item}/>
            ))}
          </div>
          {requestSlice.noLimit && <Waypoint
            onEnter={handleUpdateList}
          />}

          {!requestSlice.noLimit && <Pagination/>}
        </>
      }

      {catalogBooks?.length === 0 && status !== 'loading' &&
        <div className='book-content'>
          <NoResults>
            <img className='image' src={books} alt='Books'/>
            <div className='content'>
              <h2 className='content__title'>No results</h2>
            </div>
          </NoResults>
        </div>
      }

      {status === 'loading' && requestSlice.noLimit && <Body><Loader/></Body> }
    </Body>
  );
};

export default CatalogBody;

const Body = styled.section`
  display: flex;
  flex-direction: column;
  margin: 90px auto 80px;
  min-height: calc(100vh - 112px - 756px);

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

const NoResults = styled.div`
   display: flex;
  margin: auto 0;
  
  .image {
    height: 261px;
    width: 433px;
  }

  .content {
    display: flex;
    flex-direction: column;
    margin-left: 110px;

    &__title {
      font-weight: 700;
      font-size: 40px;
      line-height: 60px;
      color: #0D1821;
      margin: 0;
      margin-top: 50px;
    }
  }
`;
