import React from 'react';
import styled from 'styled-components';
import { useAppDispatch } from '../../store/hooks';
import { loadUserThunk } from '../../store/reducers/user';
import ULink from '../UI/Link/ULink';
import castle from '../../assets/castle.webp';
import witch from '../../assets/witch.svg';
import scrollToTop from '../ScrollToTop/ScrollToTop';

const AuthBanner: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleAuth = () => {
    dispatch(loadUserThunk());
    scrollToTop();
  };

  return (
    <Body>
      <div className='authbanner__wrapper'>
        <img className='authbanner__castle' src={castle} alt='castle' onClick={handleAuth}/>

        <div className='authbanner__content'>
          <img className='authbanner__witch' src={witch} alt='witch'/>

          <div className='authbanner__content__info'>
            <h2 className='authbanner__content__info-title'>Authorize now</h2>

            <p className='authbanner__content__info-text'>
              Authorize now and discover the fabulous<br/>world of books
            </p>

            <ULink to='#' text='Click on castle!' view='primary' width='long'/>
          </div>
        </div>
      </div>
    </Body>
  );
};

export default AuthBanner;

const Body = styled.section`
  display: flex;
  width: 100%;
  height: 400px;
  background-color: #F0F4EF;
  border-radius: 16px;
  position: relative;
  z-index: 1;
  margin-bottom: 150px;
  margin-top: 50px;

  .authbanner {
    &__wrapper {
      display:flex;
      margin: 0 20px;
      align-items:center;
      justify-content: space-between;
      width: 1080px;
    }
    
    &__castle {
      width: 521px;
      height: 462px;
      padding-bottom: 62px;
      cursor: pointer;
    }
    
    &__witch {
      display: flex;
      position: absolute; 
      top: -62px;
      right: 0px;
      z-index: 2;
      width: 456px;
      height: 462px;
    }
    
    &__content {
      display: flex;
      flex-direction: column;
      align-items:center;

      &__info {
        z-index: 3;

        &-title {
          font-weight: 700;
          font-size: 40px;
          line-height: 60px;
          color: var(--dark);
        }

        &-text {
          font-weight: 500;
          font-size: 20px;
          line-height: 30px;
          color: var(--dark);
        }
      }
    }
  }
`;
