import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { BookModel } from '../../models/book';
import { useAppSelector } from '../../store/hooks';
import Book from '../../components/Book/Book';
import EmptyFavorite from './EmptyFavorite';
import scrollToTop from '../../components/ScrollToTop/ScrollToTop';

const Favorite: React.FC = () => {
  scrollToTop();
  const user = useAppSelector((state) => state.userSlice.user);
  const books = useAppSelector((state) => state.bookSlice.books);
  const [favoriteBooks, setFavoriteBooks] = useState<BookModel[]>([]);

  useEffect(() => {
    const temp: BookModel[] = [];
    for (let i = 0; i < books.length; i++) {
      if (user?.favoriteBooks.includes(books[i].bookId)) temp.push(books[i]);
    }
    setFavoriteBooks(temp);
  }, []);
  return (
    <Body>
      {favoriteBooks.length !== 0
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
    gap: 20px;
  }
`;
