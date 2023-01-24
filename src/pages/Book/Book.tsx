import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { putCart } from '../../store/reducers/cart';
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

const Book: React.FC = () => {
  const dispatch = useAppDispatch();
  const params = useParams<{id: string}>();
  const user = useAppSelector((state) => state.userSlice.user);
  const books = useAppSelector((state) => state.bookSlice.books);
  const cartBooks = useAppSelector((state) => state.cartSlice.cartBooks);

  const [book, setBook] = useState<BookModel>();
  const thisBook = cartBooks.filter((item) => item.cartId === book?.bookId)[0];

  useEffect(() => {
    setBook(books.filter((item) => item.bookId === Number(params.id))[0]);
  }, [params, books]);

  const handleAddToCartPaper = (id: number) => {
    dispatch(putCart({ id, view: 'paper' }));
  };

  const handleAddToCartHard = (id: number) => {
    dispatch(putCart({ id, view: 'hard' }));
  };

  return (
    <Body>
      {!book
        ? <Loader/>
        : <section className='discription'>
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
              "Rupi Kaur is the Writer of the Decade." - The New Requblic
              <br/><br/>
              #1 New York Times bestsaller milk and honey is a collection of poetry
              and prose about surival. About the experience of volience, abuse, love, loss
              and femininity.
              <br/><br/>
              The book is divided into four chapters, and each chapter server a different
              purpose. Deals with a different pain. Heals a different heartache. milk
              and honey takes readers throгпр a journey of the most bitter moments in life
              and finds sweetness in them becouse there is sweetness everywhere
              if you are just willing to look.
            </p>

            <div className='buy__buttons'>
              <div className='buy__buttons__wrapper'>
                <p className='buy__buttons__label'>Paperback</p>
                {thisBook?.paperCoverCount
                  ? <BookCounter id={book.bookId} view='paper'/>
                  : <BookButton
                    title={`$ ${(book.paperPrice * 100).toFixed(2)} USD`}
                    // view='catalog-small'
                    func={() => handleAddToCartPaper(book.bookId)}
                    available={book.available}
                  />
                }
              </div>
              <div className='buy__buttons__wrapper'>
                <p className='buy__buttons__label'>Hardcover</p>
                {thisBook?.hardCoverCount
                  ? <BookCounter id={book.bookId} view='hard'/>
                  : <BookButton
                    title={`$ ${(book.hardPrice * 100).toFixed(2)} USD`}
                    // view='catalog-small'
                    func={() => handleAddToCartHard(book.bookId)}
                    available={book.available}
                  />
                }
              </div>
            </div>
          </div>
        </section>
      }

      <Comments/>

      {!user && <AuthBanner/>}

      <Recomendation />
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
