import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import parse from 'html-react-parser';
import { CartItem, putCart } from '../../store/reducers/cart';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { getOneBookThunk, putCatalogBooks } from '../../store/reducers/book';
import { reqGenres, reqPagination } from '../../store/reducers/request';

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
  const navigate = useNavigate();
  const params = useParams<{id: string | undefined}>();

  const user = useAppSelector((state) => state.userSlice.user);
  const cartItems = useAppSelector((state) => state.cartSlice.cartItems);
  const book = useAppSelector((state) => state.bookSlice.oneBook[0]);
  const genres = useAppSelector((state) => state.bookSlice.genres);
  const { status } = useAppSelector((state) => state.bookSlice);

  const [thisBookInCart, setThisBookInCart] = useState<CartItem>();

  useEffect(() => {
    dispatch(getOneBookThunk(params.id));
  }, [params]);

  useEffect(() => {
    setThisBookInCart(cartItems.filter((item) => item.cartId === book?.bookId)[0]);
  }, [cartItems, book]);

  const handleAddToCartPaper = (id: string, available: boolean) => {
    if (!available) return;
    dispatch(putCart({ id, view: 'paper' }));
  };

  const handleAddToCartHard = (id: string, available: boolean) => {
    if (!available) return;
    dispatch(putCart({ id, view: 'hard' }));
  };

  const handleSetGenre = (id: string) => {
    dispatch(reqGenres({ genresId: [id] }));
    dispatch(reqPagination(0));
    dispatch(putCatalogBooks([]));
    navigate('/catalog');
  };

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

              <p className='discription__content__date'>
                Published: {book.date}
              </p>

              <div className='discription__content__genres'>
                {book.genre.map((book) => {
                  const name = genres.filter((item) => item.genreId === book)[0];
                  return <p
                    key={name.genreId}
                    onClick={() => handleSetGenre(name.genreId)}
                  >
                    {name.genre}
                  </p>;
                })}
              </div>

              <div className='buy__buttons'>
                <div className='buy__buttons__wrapper'>
                  <p className='buy__buttons__label'>Paperback</p>
                  {thisBookInCart?.paperCoverCount
                    ? <BookCounter id={book.bookId} view='paper'/>
                    : <BookButton
                      title={`$ ${(book.paperPrice * 100).toFixed(2)} USD`}
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
          <Recomendation thisBook={book.bookId}/>
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
  min-height: calc(100vh - 112px - 294px);

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
        margin: 10px 0;
      }

      &__date {

      }

      &__genres {
        display: flex;
        margin: 10px 0 74px;

        p {
          padding: 3px 8px;
          border: 1px solid black;
          border-radius: 5px;
          margin: 0 12px 12px 0;
          cursor: pointer;
        }
      }

      .buy__buttons {
        display: flex;

        
        &__wrapper {
          display: flex;
          flex-direction: column;

          :nth-child(1) {
            margin-right: 20px
          }
        }

        &__label {
          font-size: 14px;
        }
      }
    }
  }
`;
