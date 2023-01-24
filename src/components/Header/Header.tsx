import React, { useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { reqQuery } from '../../store/reducers/request';
import ULink from '../UI/Link/ULink';
import logo from '../../assets/logo-header.svg';
import searchIco from '../../assets/search-ico.svg';
import cartIco from '../../assets/button-cart.svg';
import favoriteIco from '../../assets/button-favorite.svg';
import userIco from '../../assets/button_user.svg';

const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.userSlice.user);
  const cartBooks = useAppSelector((state) => state.cartSlice.cartBooks);

  const handleQueryFind = (e: any) => {
    dispatch(reqQuery({ query: e.target.value }));
  };

  const debounce = (func: (e: any) => void) => {
    let timer: any;
    return function name(...args: any) {
      const context = timer;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 500);
    };
  };

  const debounceQuery = useCallback(debounce(handleQueryFind), []);

  return (
    <Body>
      <NavLink to='/' className='header__logo'>Header logo</NavLink>

      <div className='header__center'>
        <div className='header__center__label'>Catalog</div>
        <div className="header__input">
          <img className='header__input__ico' src={searchIco} alt='search icon'/>
          <input className='header__input__val' placeholder="Search" onChange={debounceQuery}/>
        </div>
      </div>

      {user ? (
        <nav className='header__navbar'>
          <NavLink to='/cart' className='header__navbar__cart'>
            Cart
            {cartBooks.length !== 0 && <div className='cart__position'>{cartBooks.length}</div>}
          </NavLink>
          <NavLink to='/favorite' className='header__navbar__favorite'>Favorite</NavLink>
          <NavLink to='/profile' className='header__navbar__user'>Profile</NavLink>
        </nav>
      ) : (
        <nav className='header__navbar'>
          <ULink to='/signup' text='Sign Up' view='secondary'/>
          <ULink to='/login' text='Log In' view='primary'/>
        </nav>
      )}

    </Body>
  );
};

export default Header;

const Body = styled.header`
  display: flex;
  justify-content: space-between;
  margin: 24px auto;
  padding: 0 calc((1.3% - 9px) * 8);
  align-items: center;
  max-width: var(--width_content);

  .header__logo {
    min-width: 88.5px;
    min-height: 46px;
    background-image: url(${logo});
    color: #00000000;
    font-size: 1px;    
  }

  .header__center {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 782px;
    width: 100%;
    
    &__label {
      display: flex;
      color: #000000;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      justify-content: center;
      width: 100%;
      max-width: 152px;
    }
  }

  .header__input {
    display: flex;
    position: relative;
    width: 100%;
    
    &__ico {
      display: flex;
      position: absolute;
      top: 20px;
      left: 24px;
    }
    
    &__val {
      height: 24px;
      width: 100%;
      padding: 20px 20px 20px 64px;
      border: none;
      display: flex;
      align-items: center;
      letter-spacing: 0.75px;
      color: black;
      background: var(--light);
      border-radius: 16px;
      outline: none;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
    }
  }

  .header__navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 231px;
    min-width: 210px;
    margin-left: 51px; 
  
    &__cart {
      background-image: url(${cartIco});
      background-size: cover;
      width: 48px;
      height: 48px;
      position: relative;
      color: #00000000;
      font-size: 1px;
    }

    .cart__position {
      position: absolute;
      top: -5px;
      right: -5px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: var(--green);
      border-radius: 50%;
      color: var(--dark_blue);
      font-weight: 600;
      font-size: 14px;
      width: 20px;
      height: 20px;
    }

    &__favorite {
      background-image: url(${favoriteIco});
      background-size: cover;
      background-color: white;
      width: 48px;
      height: 48px;
      border: none;
      cursor: pointer;
      color: #00000000;
      font-size: 1px;
    }

    &__user {
      background-image: url(${userIco});
      background-size: cover;
      width: 48px;
      height: 48px;
      color: #00000000;
      font-size: 1px;
    }
  }
`;
