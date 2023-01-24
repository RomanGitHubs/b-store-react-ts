import React, { useState, useCallback } from 'react';
// import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
// import { getGenres } from '../../api/services/genres';
// import { getBooks } from '../../api/services/books';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { reqPrice } from '../../store/reducers/request';
import MultiRangeSlider from './MultiRangeSlider/MultiRangeSlider';
import SortFilter from './SortFilter';
import Filter from './Filter';
import GenresFilter from './GenresFilter';

const Filters: React.FC = () => {
  // const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useAppDispatch();
  const { minPrice, maxPrice } = useAppSelector((state) => state.bookSlice);
  const { selectedSort } = useAppSelector((state) => state.requestSlice);

  const handleChangePrice = ({ min, max }: { min: number; max: number }) => {
    // console.log(`min = ${min}, max = ${max}`);
    const price = { min, max };
    // console.log(price)
    dispatch(reqPrice(price));
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

  const debouncePrice = useCallback(debounce(handleChangePrice), []);
  const [openFilter, setOpenFilter] = useState<string>('');

  return (
    <Body>
      <Filter title="Genre" setOpenFilter={setOpenFilter} openFilter={openFilter}>
        <GenresFilter/>
      </Filter>

      <Filter title="Price" setOpenFilter={setOpenFilter} openFilter={openFilter}>
        <MultiRangeSlider
          min={minPrice}
          max={maxPrice}
          onChange={debouncePrice}
        />
      </Filter>

      <Filter title='Sort by' sort={selectedSort} setOpenFilter={setOpenFilter} openFilter={openFilter}>
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
