import React from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { reqSort, reqOrder } from '../../store/reducers/request';
import orderArrow from '../../assets/arrows.png';

const Sort: React.FC = () => {
  const dispatch = useAppDispatch();
  const { selectedSort, selectedOrder } = useAppSelector((state) => state.requestSlice);

  const handlerChange = (e: any) => {
    dispatch(reqSort(e.target.value));
  };

  const handlerOrder = () => {
    if (selectedOrder === 'DESC') dispatch(reqOrder('ASC'));
    if (selectedOrder === 'ASC') dispatch(reqOrder('DESC'));
  };

  return (
    <Body >
      <Filter>
        <input id="radio-1" name="radio" type="radio" value="price" onChange={handlerChange} checked={selectedSort === 'price'}/>
        <label htmlFor="radio-1">Price</label>
        {selectedSort === 'price' && <img className='arrows' src={orderArrow} onClick={handlerOrder} alt='sort arrows'/>}
      </Filter>
      <Filter>
        <input id="radio-2" name="radio" type="radio" value="title" onChange={handlerChange} checked={selectedSort === 'title'} alt='sort arrows'/>
        <label htmlFor="radio-2">Title</label>
        {selectedSort === 'title' && <img className='arrows' src={orderArrow} onClick={handlerOrder}/>}
      </Filter>
      <Filter>
        <input id="radio-3" name="radio" type="radio" value="author" onChange={handlerChange} checked={selectedSort === 'author'} alt='sort arrows'/>
        <label htmlFor="radio-3">Author name</label>
        {selectedSort === 'author' && <img className='arrows' src={orderArrow} onClick={handlerOrder}/>}
      </Filter>
      <Filter>
        <input id="radio-4" name="radio" type="radio" value="rating" onChange={handlerChange} checked={selectedSort === 'rating'} alt='sort arrows'/>
        <label htmlFor="radio-4">Rating</label>
        {selectedSort === 'rating' && <img className='arrows' src={orderArrow} onClick={handlerOrder}/>}
      </Filter>
      <Filter>
        <input id="radio-5" name="radio" type="radio" value="date" onChange={handlerChange} checked={selectedSort === 'date'} alt='sort arrows'/>
        <label htmlFor="radio-5">Date of issue</label>
        {selectedSort === 'date' && <img className='arrows' src={orderArrow} onClick={handlerOrder}/>}
      </Filter>
    </Body>
  );
};

export default Sort;

const Body = styled.div`
  display: flex;
  width: 165px;
  background: var(--light);
  border-radius: 16px;
  position: absolute;
  top: 60px;
  left: 0px;
  z-index: 2;
  flex-direction: column;
  text-align: start;
  padding: 16px;
`;

const Filter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;

  :last-child {
    margin: 0;
  }

  input[type=radio] {
    display: none;
  }

  label {
    font-weight: 500;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0.75px;
    color: #a3a3a3;
    cursor: pointer;
  }

  input[type=radio]:checked + label {
    color: var(--dark_blue);
  } 

  label:hover {
    color: var(--dark_blue);
  }

  .arrows {
    width: 23px;
    height: 23px;
  }
`;
