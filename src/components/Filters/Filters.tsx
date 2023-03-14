import React, { useState, useCallback, useRef } from 'react';
// import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
// import { getGenres } from '../../api/services/genres';
// import { getBooks } from '../../api/services/books';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { reqPrice } from '../../store/reducers/request';
import MultiRangeSlider, { IPrice } from './MultiRangeSlider/MultiRangeSlider';
import SortFilter from './SortFilter';
import Filter from './Filter';
import GenresFilter from './GenresFilter';

interface IFilters {
  filter: {
    openFilter: string
    setOpenFilter: (name: string) => void
  }
}

const Filters: React.FC<IFilters> = ({ filter }) => {
  const dispatch = useAppDispatch();
  const { minPrice, maxPrice } = useAppSelector((state) => state.bookSlice);
  const { selectedSort } = useAppSelector((state) => state.requestSlice);

  const handleChangePrice = (price: IPrice) => {
    dispatch(reqPrice(price));
  };

  const debounce = (func: (price: IPrice) => void) => {
    let timer: ReturnType<typeof setTimeout> | null;
    // eslint-disable-next-line
    return function name(...args: any) {
      const context = timer;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 500);
    };
  };
  const debouncePrice = useCallback(debounce(handleChangePrice), []);

  return (
    <Body onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}>
      <Filter title="Genre" setOpenFilter={filter.setOpenFilter} openFilter={filter.openFilter}>
        <GenresFilter/>
      </Filter>

      <Filter title="Price" setOpenFilter={filter.setOpenFilter} openFilter={filter.openFilter}>
        <MultiRangeSlider
          min={minPrice}
          max={maxPrice}
          onChange={debouncePrice}
        />
      </Filter>

      <Filter title='Sort by' sort={selectedSort} setOpenFilter={filter.setOpenFilter} openFilter={filter.openFilter}>
        <SortFilter />
      </Filter>
    </Body>
  );
};

export default Filters;

const Body = styled.div`
  display: flex;
  width: 628px;
  height: 48px;
  justify-content: space-between;
  position: relative;
`;
