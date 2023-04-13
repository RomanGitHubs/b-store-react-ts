import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import parse from 'html-react-parser';
import { CartItem, putCart } from '../../store/reducers/cart';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { BookModel } from '../../models/book';

import AuthBanner from '../../components/AuthBanner/AuthBanner';
import BookButton from '../../components/Book/Button/BookButton';
import BookCounter from '../../components/BookCounter/BookCounter';
import Comments from '../../components/Comments/Comments';
import Loader from '../../components/Loaders/Loader';
import RateBook from '../../components/Book/RateBook/RateBook';
import Recomendation from '../../components/Recomendation/Recomendation';
import StarCounter from '../../components/Book/StarCounter/StarCounter';
import scrollToTop from '../../components/ScrollToTop/ScrollToTop';
import { getBook } from '../../api/servicesTest/book';

const Book: React.FC = () => {
  scrollToTop();
  const dispatch = useAppDispatch();
  const params = useParams<{id: string}>();

  const user = useAppSelector((state) => state.userSlice.user);
  const cartBooks = useAppSelector((state) => state.cartSlice.cartBooks);

  const [book, setBook] = useState<BookModel>();

  const [thisBookInCart, setThisBookInCart] = useState<CartItem>();

  useEffect(() => {
    (async () => {
      try {
        const respBook = await getBook(params.id);
        setBook(respBook);
        setThisBookInCart(cartBooks.filter((item) => item.cartId === respBook?.bookId)[0]);
      } catch (e) {
        console.error('Error Fetch one book >> ', e);
      }
    })();
  }, []);

  const handleAddToCartPaper = (id: string, available: boolean) => {
    if (!available) return;
    dispatch(putCart({ id, view: 'paper' }));
  };

  const handleAddToCartHard = (id: string, available: boolean) => {
    if (!available) return;
    dispatch(putCart({ id, view: 'hard' }));
  };

  return (
    <Body>
      {book
        ? <>
          <section className='discription'>
            <div className='discription__photo'>
              <img className='discription__photo__img' src={book.photo} alt='Book photo'/>
            </div>

            <div className='discription__content'>
              <h3 className='discription__content__title'>{book.title}</h3>

              <h4 className='discription__content__title-m'>{book.author}</h4>

              {user
                ? <RateBook bookId={book.bookId} rating={book.rating}/>
                : <StarCounter rating={book.rating}/>
              }

              <h4 className='discription__content__title-m'>Description</h4>

              <p className='discription__content__text'>
                {parse(book.description)}
              </p>

              <div className='buy__buttons'>
                <div className='buy__buttons__wrapper'>
                  <p className='buy__buttons__label'>Paperback</p>
                  {thisBookInCart?.paperCoverCount
                    ? <BookCounter id={book.bookId} view='paper'/>
                    : <BookButton
                      title={`$ ${(book.paperPrice * 100).toFixed(2)} USD`}
                      // view='catalog-small'
                      func={() => handleAddToCartPaper(book.bookId, book.available)}
                      available={book.available}
                    />
                  }
                </div>
                <div className='buy__buttons__wrapper'>
                  <p className='buy__buttons__label'>Hardcover</p>
                  {thisBookInCart?.hardCoverCount
                    ? <BookCounter id={book.bookId} view='hard'/>
                    : <BookButton
                      title={`$ ${(book.hardPrice * 100).toFixed(2)} USD`}
                      // view='catalog-small'
                      func={() => handleAddToCartHard(book.bookId, book.available)}
                      available={book.available}
                    />
                  }
                </div>
              </div>
            </div>
          </section>

          <Comments bookId={book.bookId}/>
          {!user && <AuthBanner/>}
          {/* <Recomendation thisBook={book.bookId}/> */}
        </>
        : <Loader/>
      }
    </Body>
  );
};

export default Book;

const Body = styled.main`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 0 calc((1.3% - 9px) * 8); 
  max-width: var(--width_content);
  margin-top: 60px;

  .discription {
    display: flex;

    &__photo__img {
      height: 799px;
      width: 522px;
      border-radius: 20px;
    }

    &__content {
      display: flex;
      flex-direction: column;
      margin-left: 128px;

      &__title {
        font-weight: 700;
        font-size: 40px;
        line-height: 60px;
        margin: 0;
      }

      &__title-m {
        font-weight: 500;
        font-size: 24px;
        line-height: 36px;
        margin: 0;
      }

      &__text {
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        margin: 10px 0 74px;
      }

      .buy__buttons {
        display: flex;

        &__wrapper {
          display: flex;
          flex-direction: column;
          margin-right: 40px;
        }

        &__label {
          font-size: 14px;
        }
      }
    }
  }
`;
