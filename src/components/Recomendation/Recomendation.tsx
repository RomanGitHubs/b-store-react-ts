import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { BookModel } from '../../models/book';
import { useAppSelector } from '../../store/hooks';
import Book from '../Book/Book';
import scrollToTop from '../ScrollToTop/ScrollToTop';

const Recomendation: React.FC = () => {
  const { books } = useAppSelector((state) => state.bookSlice);
  const [localBooks, setLocalBooks] = useState<BookModel[]>([]);

  useEffect(() => {
    (async () => {
      try {
        setLocalBooks(books.slice(0, 4));
      } catch (e) {
        console.error('Error recomendation >>> ', e);
      }
    })();
  }, []);

  return (
    <>
      {(localBooks !== null && localBooks?.length > 0) &&
      <Body>
        <h3 className='recomentation__title'>Recomendation</h3>
        <div className='book-content'>
          {localBooks?.map((item) => (
            <Book key={item.bookId} book={item} onClick={() => scrollToTop()}/>
          ))}
        </div>
      </Body>}
    </>
  );
};

export default Recomendation;

const Body = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto 80px;

  .recomentation__title {
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
    margin: 0 0 50px;
    color: var(--dark__blue) 
  }

  .book-content {
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto 0;
    gap: 20px;
  }
`;
