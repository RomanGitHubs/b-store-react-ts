import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { useActionCreators, useAppDispatch, useAppSelector } from '../../store/hooks';
import { putCart } from '../../store/reducers/cart';
import { addFavoriteBook, removeFavoriteBook } from '../../store/reducers/user';
import { BookModel } from '../../models/book';
import StarCounter from './StarCounter/StarCounter';
import BookButton from './Button/BookButton';
import ULink from '../UI/Link/ULink';
import favoriteButton from '../../assets/button-favorite_unpressed.svg';
import favoriteButtonActive from '../../assets/button-favorite_pressed.svg';
import newBook from '../../assets/new-book.png';
import bestsellerBook from '../../assets/bestseller-book.webp';

interface IBook {
  book: BookModel
}

const Book: React.FC<IBook> = ({ book }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.userSlice.user);
  const cartBooks = useAppSelector((state) => state.cartSlice.cartBooks);

  const thisBook = !!cartBooks.filter((item) => item.cartId === book.bookId)[0];
  const isFavoriteBook = user?.favoriteBooks.includes(book.bookId);
  // const actions = useActionCreators(userAction)

  const handleAddToCart = (id: number, available: boolean) => {
    if (!available) return;
    dispatch(putCart({ id, view: 'hard' }));
  };

  const handleAddFavorite = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
    e.stopPropagation();

    if (user?.favoriteBooks.includes(id)) {
      dispatch(removeFavoriteBook({ id }));
    } else {
      dispatch(addFavoriteBook({ id }));
    }
  };

  return (
    <Body photo={book.photo} isFavorite={isFavoriteBook}>
      <div className="book__cover" onClick={() => navigate(`/catalog/${book.bookId}`)}>
        {user && <button className="book__favorite" onClick={(e) => handleAddFavorite(e, book.bookId)} id={book.bookId.toString()} title='Add favorite'/>}

        <div className="book__attributies">
          {book.news && <img className='book__attributies-new' src={newBook} alt='new book'/>}

          {book.bestsaller && <img className='book__attributies-best' src={bestsellerBook} alt='best book'/>}
        </div>
      </div>

      <p className="book__title">{book.title}</p>

      <p className="book__author">{book.author}</p>

      {(book.rating || book.rating === 0) && <StarCounter rating={book.rating}/>}

      <div style={{ margin: '0 auto' }}>
        {thisBook
          ? <ULink to='/cart' text='Added to cart' view='secondary' width='long'/>
          : <BookButton
            title={`$ ${(book.hardPrice * 100).toFixed(2)} USD`}
            func={() => handleAddToCart(book.bookId, book.available)}
            available={book.available}
          />
        }
      </div>
    </Body>
  );
};

export default Book;

interface IStylesProps {
  photo?: string;
  isFavorite?: boolean;
}

const Body = styled.div<IStylesProps>`
  display: flex;
  flex-direction: column;
  width: 305px;
  height: 713px;

  .book {
    &__cover {
      display: flex;
      width: 305px;
      height: 448px;
      background: url(${(props) => props.photo});
      background-size: cover;
      border-radius: 16px;
      margin-bottom: 30px;
      position: relative;
      cursor: pointer;
    }

    &__favorite {
      position: absolute;
      display: flex;
      width: 48px;
      height: 48px;
      border: none;
      cursor: pointer;
      border-radius: 24px;
      top: 20px;
      left: 20px; 
      background-size: cover;
      background: url(${favoriteButton});
      
    ${(p) => {
    if (p.isFavorite) {
      return css`
        background: url(${favoriteButtonActive});
      `;
    }
  }}
  }

    &__attributies {
      display: flex;
      flex-direction: column;
      height: 70px;
      width: 175px;
      position: absolute;
      bottom: 20px;
      left: 20px;
      justify-content: flex-end;

      &-new {
        width: 132px;
        height: 30px;
      }

      &-best{
        width: 175px;
        height: 30px;
        margin-top: 10px;
      }
    }

    &__title {
      font-weight: 500;
      font-size: 20px;
      line-height: 30px;
      color: var( --dark_blue);
      margin: 0;
      overflow: hidden;
      white-space: nowrap;
    }

    &__author {
      font-weight: 500;
      font-size: 20px;
      line-height: 30px;
      color: var(--dark_grey);
      margin: 0;
      overflow: hidden;
      white-space: nowrap;
    }
  }
`;
