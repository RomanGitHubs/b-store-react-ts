import React from 'react';
import styled from 'styled-components';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { decreaseCart, deleteCart, increaseCart } from '../../store/reducers/cart';
import Minus from '../../assets/icons/Minus.svg';
import Plus from '../../assets/icons/Plus.svg';
import Delete from '../../assets/icons/Delete.svg';

interface ICounter {
  id: number
  view: 'hard' | 'paper'
}

const BookCounter: React.FC<ICounter> = ({ id, view }) => {
  const cart = useAppSelector((state) => state.cartSlice.cartBooks);
  const dispatch = useAppDispatch();
  const item = cart.filter((item) => item.cartId === id)[0];

  return (
    <Body>
      <button className='counter minus' onClick={() => dispatch(decreaseCart({ id, view }))}>
        <img src={Minus} alt='minus'/>
      </button>

      {view === 'hard' && <div className='count'>{item?.hardCoverCount}</div>}
      {view === 'paper' && <div className='count'>{item?.paperCoverCount}</div>}

      <button className='counter plus' onClick={() => dispatch(increaseCart({ id, view }))}>
        <img className='svg-plus' src={Plus} alt='plus'/>
      </button>

      <button className='counter delete' onClick={() => dispatch(deleteCart({ id, view }))}>
        <img src={Delete} alt='delete'/>
      </button>
    </Body>
  );
};

export default BookCounter;

const Body = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  width: 305px;

  .counter {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 32px;
    width: 32px;
    cursor: pointer;
    border-radius: 50%;
  }

  .minus {
    background: #00000016;
    border: none;
  }

  .count {
    font-size: 16px;
    margin: 0 20px;
  }

  .svg-plus {
    width: 16px;
  }

  .plus {
    background: #00000016;
    border: none;
  }

  .delete {
    background: none;
    border: none;
    margin-left: 50px;
  }
`;
