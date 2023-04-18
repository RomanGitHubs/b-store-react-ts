import React from 'react';
// import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { useAppSelector } from '../../store/hooks';
import MultiRangeSlider from './MultiRangeSlider/MultiRangeSlider';
import SortFilter from './SortFilter';
import Filter from './Filter';
import GenresFilter from './GenresFilter';
import PageSize from './PageSize';

interface IFilters {
  filter: {
    openFilter: string
    setOpenFilter: (name: string) => void
  }
}

const Filters: React.FC<IFilters> = ({ filter }) => {
  const pageSize = useAppSelector((store) => store.requestSlice.pageSize);
  return (
    <Body onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}>
      <Filter title={`${pageSize}`} setOpenFilter={filter.setOpenFilter} openFilter={filter.openFilter}>
        <PageSize setOpenFilter={filter.setOpenFilter}/>
      </Filter>

      <Filter title="Genre" setOpenFilter={filter.setOpenFilter} openFilter={filter.openFilter}>
        <GenresFilter/>
      </Filter>

      <Filter title="Price" setOpenFilter={filter.setOpenFilter} openFilter={filter.openFilter}>
        <MultiRangeSlider/>
      </Filter>

      <Filter title='Sort by' setOpenFilter={filter.setOpenFilter} openFilter={filter.openFilter}>
        <SortFilter />
      </Filter>
    </Body>
  );
};

export default Filters;

const Body = styled.div`
  display: flex;
  width: 748px;
  /* width: 628px; */
  height: 48px;
  justify-content: space-between;
  position: relative;
`;
