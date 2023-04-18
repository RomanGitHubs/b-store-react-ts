import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getRecomendationBooks } from '../../api/servicesTest/getRecomendationBooks';
import { BookModel } from '../../models/book';
import Book from '../Book/Book';
import scrollToTop from '../ScrollToTop/ScrollToTop';

interface ILocalBook {
  thisBook: string | undefined
}

const Recomendation: React.FC<ILocalBook> = ({ thisBook }) => {
  const [recomendationBook, setRecomendationBook] = useState<BookModel[]>([]);
  useEffect(() => {
    (async () => {
      try {
        const resp = await getRecomendationBooks(thisBook);
        setRecomendationBook(resp);
      } catch (e) {
        console.error('Error gerRecomendation');
      }
    })();
  }, []);

  return (
    <>
      {recomendationBook.length > 0 &&
      <Body>
        <h3 className='recomentation__title'>Recomendation</h3>
        <div className='recomentation__content'>
          {recomendationBook?.map((item, index) => (
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
