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
      <div className='auth-wrapper'>
        <img className='castle' src={castle} alt='castle' onClick={handleAuth}/>

        <div className='auth-content'>
          <img className='witch' src={witch} alt='witch'/>

          <div className='auth-content__info'>
            <h2 className='auth-content__info__title'>Authorize now</h2>

            <p className='auth-content__info__text'>
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
  
  .auth-wrapper {
    display:flex;
    margin: 0 20px;
    align-items:center;
    justify-content: space-between;
    width: 1080px;
  }
  
  .castle {
    width: 521px;
    height: 462px;
    padding-bottom: 62px;
    cursor: pointer;
  }

  .witch {
    display: flex;
    position: absolute; 
    top: -62px;
    right: 0px;
    z-index: 2;
    width: 456px;
    height: 462px;
  }

  .auth-content {
    display: flex;
    flex-direction: column;
    align-items:center;

    &__info {
      z-index: 3;

      &__title {
        font-weight: 700;
        font-size: 40px;
        line-height: 60px;
        color: var(--dark);
      }

      &__text {
        font-weight: 500;
        font-size: 20px;
        line-height: 30px;
        color: var(--dark);
      }
    }
  }
`;
