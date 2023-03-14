import React from 'react';
import styled from 'styled-components';
import ULink from '../../components/UI/Link/ULink';
import books from '../../assets/cart-default.webp';

const EmptyCart: React.FC = () => {
  return (
    <Body>
      <img className='image' src={books} alt='Books'/>
      <div className='content'>
        <h2 className='content__title'>Your cart is empty</h2>
        <p className='content__text'>Add items to cart to make a purchase.<br/>Go to the catalogue now</p>
        <ULink to='/catalog' text='Go to catalog' view='primary' width='long'/>
      </div>
    </Body>
  );
};

export default EmptyCart;

const Body = styled.section`
  display: flex;
  margin: auto 0;
  
  .image {
    height: 261px;
    width: 433px;
  }

  .content {
    display: flex;
    flex-direction: column;
    margin-left: 110px;

    &__title {
      font-weight: 700;
      font-size: 40px;
      line-height: 60px;
      color: #0D1821;
      margin: 0;
    }

    &__text {
      font-weight: 500;
      font-size: 24px;
      line-height: 36px;
      color: #344966;
      margin-top: 20px;
      margin-bottom: 60px;
    }
  }
`;
