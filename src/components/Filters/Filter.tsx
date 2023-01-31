import React, { ReactNode } from 'react';
import styled from 'styled-components';
import rightArrow from '../../assets/right-arrow.svg';
import downArrow from '../../assets/down-arrow.svg';

interface IFilter {
  title: string
  sort?: string
  openFilter: string
  setOpenFilter: (filterType: string) => void
  children: ReactNode
}

const Filter: React.FC<IFilter> = ({ title, sort, openFilter, setOpenFilter, children }) => {
  const handleFilter = () => {
    if (openFilter === title) {
      setOpenFilter('');
      return;
    }
    setOpenFilter(title);
  };

  return (
    <Body >
      <div className="filter__title" onClick={handleFilter}>
        {title} {sort}
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
`;
