import React, { ReactNode } from 'react';
import styled from 'styled-components';
import rightArrow from '../../assets/right-arrow.svg';
import downArrow from '../../assets/down-arrow.svg';
import { useAppSelector } from '../../store/hooks';

interface IFilter {
  title: string
  openFilter: string
  setOpenFilter: (filterType: string) => void
  children: ReactNode
}

const Filter: React.FC<IFilter> = ({ title, openFilter, setOpenFilter, children }) => {
  const { selectedSort } = useAppSelector((state) => state.requestSlice);

  const handleFilter = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();

    if (openFilter === title) {
      setOpenFilter('');
      return;
    }
    setOpenFilter(title);
  };

  return (
    <Body >
      <div className="filter__title" onClick={(e) => handleFilter(e)}>
        {title} {title === 'Sort by' && selectedSort}
        <img src={openFilter === title ? downArrow : rightArrow} alt='arrow' className='filter__arrow'/>
      </div>
      {openFilter === title && <div>
        {children}
      </div>}
    </Body>
  );
};

export default Filter;

const Body = styled.div`
  display: flex;
  width: 166px;
  height: 48px;
  max-width: 196px;
  background: var(--light);
  border-radius: 16px;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  position: relative;
  cursor: pointer;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  align-items: center;
  text-align: center;
  letter-spacing: 0.75px;
  color: var(--dark_blue);

  .filter__title {
    display: flex;
    width: 166px;
    background: var(--light);
    align-items: center;
    justify-content: space-between;
  }

  .filter__arrow {
    width: 24px;
    height: 24px;
  }

  :nth-child(1) {
    width: 50px;
  }
`;
