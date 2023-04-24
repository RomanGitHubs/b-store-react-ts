import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import Book from '../../components/Book/Book';
import { getFavoriteBooksThunk } from '../../store/reducers/book';
import Loader from '../../components/Loaders/Loader';
import EmptyFavorite from './EmptyFavorite';

const Favorite: React.FC = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.userSlice.user);
  const { favoriteBooks, status } = useAppSelector((state) => state.bookSlice);

  useEffect(() => {
    dispatch(getFavoriteBooksThunk(user?.favoriteBooks));
  }, []);

  if (status === 'loading') {
    return (
      <Body>
        <Loader/>
      </Body>
    );
  }

  if (status === 'error') {
    return (
      <Body>
        Error
      </Body>
    );
  }

  return (
    <Body>
      {user?.favoriteBooks.length !== 0
        ? <FullFavorite>
          <h2 className='title'>Favorite</h2>

          <div className='content'>
            {favoriteBooks.map((item) => (
              <Book key={item.bookId} book={item}/>
            ))}
          </div>
        </FullFavorite>
        : <EmptyFavorite/>
      }
    </Body>
  );
};

export default Favorite;

const Body = styled.main`
  display: flex;
  justify-content: center;
  min-height: calc(100vh - 112px - 294px);
`;

const FullFavorite = styled.section`
  display: flex;
  flex-direction: column;
  max-width: var(--width_content);
  width: 100%;
  margin: 0 auto 60px;
  padding: 0 calc((1.3% - 9px) * 8);

  .content {
    display: flex;
    flex-wrap: wrap;
    margin: 40px auto 0;
    gap: 17px;
  }
`;
