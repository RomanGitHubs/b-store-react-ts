import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { BookModel } from '../../models/book';
import { useAppSelector } from '../../store/hooks';
import Book from '../Book/Book';
import scrollToTop from '../ScrollToTop/ScrollToTop';

interface ILoaclBook {
  thisBook: string | undefined
}

const Recomendation: React.FC<ILoaclBook> = ({ thisBook }) => {
  const { books } = useAppSelector((state) => state.bookSlice);
  const [localBooks, setLocalBooks] = useState<BookModel[]>([]);

  useEffect(() => {
    setLocalBooks([]);
    // (async () => {
    // try {
    let tempArray: BookModel[] = [];

    const booksCopy = [...books];
    booksCopy.splice(booksCopy.indexOf(booksCopy
      .filter((item) => item.bookId === thisBook)[0]), 1);

    for (let i = 0; i < 4; i++) {
      const randomNum = Math.floor(Math.random() * (booksCopy.length - 4));

      tempArray = [...tempArray, booksCopy[randomNum]];

      booksCopy.splice(booksCopy.indexOf(booksCopy
        .filter((item) => item.bookId === booksCopy[randomNum].bookId)[0]), 1);
    }
    setLocalBooks(tempArray);
    // } catch (e) {
    // console.error('Error recomendation >>> ', e);
    // }
    // })();
  }, [thisBook]);

  return (
    <>
      {localBooks.length > 0 &&
      <Body>
        <h3 className='recomentation__title'>Recomendation</h3>
        <div className='recomentation__content'>
          {localBooks?.map((item, index) => (
            <Book key={index} book={item} onClick={() => scrollToTop()}/>
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

  .recomentation__content {
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto 0;
    gap: 20px;
  }
`;
