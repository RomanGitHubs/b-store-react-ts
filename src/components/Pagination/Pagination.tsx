import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { reqPagination } from '../../store/reducers/request';
import arrowLeft from '../../assets/icons/arrow-left.svg';
import arrowRight from '../../assets/icons/arrow-right.svg';
import fillDot from '../../assets/icons/dot-fill.svg';
import emptyDot from '../../assets/icons/dot-empty.svg';

const Pagination: React.FC = () => {
  const dispatch = useAppDispatch();
  const total = useAppSelector((store) => store.bookSlice.totalBooks);
  const { pageSize, currentPage } = useAppSelector((store) => store.requestSlice);

  const pageCount = Math.ceil(total / pageSize);
  const arr = [];
  for (let i = 0; i < pageCount; i++) {
    arr.push(i);
  }

  const handleSetPreviusPage = () => {
    if (currentPage === 0) return;
    dispatch(reqPagination(currentPage - 1));
  };

  const handleSetNextPage = () => {
    if (currentPage + 1 === pageCount) return;
    dispatch(reqPagination(currentPage + 1));
  };

  const handleChangePage = (item: number) => {
    dispatch(reqPagination(item));
  };

  return (
    <Body>
      {(currentPage !== 0) && <div className='pagination__left' onClick={handleSetPreviusPage}/>}
      {arr.map((item) => <div
        className={item === currentPage ? 'pagination__checked' : 'pagination__point'}
        key={item}
        onClick={() => handleChangePage(item)}
      />)}
      {(currentPage + 1 !== pageCount) && <div className='pagination__right' onClick={handleSetNextPage}/>}
    </Body>
  );
};

export default Pagination;

const Body = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;

  .pagination {
    &__left {
      background: url(${arrowLeft});
      background-size: cover;
      width: 18px;
      height: 18px;
      margin-right: 5px;
      cursor: pointer;
    }

    &__point {
      background: url(${emptyDot});
      background-size: cover;
      width: 24px;
      height: 24px;
      margin: 0 5px;
      cursor: pointer;
    }

    &__checked {
      background: url(${fillDot});
      background-size: cover;
      width: 24px;
      height: 24px;
      margin: 0 5px;
      cursor: pointer;
    }

    &__right {
      background: url(${arrowRight});
      background-size: cover;
      width: 18px;
      height: 18px;
      margin-left: 5px;
      cursor: pointer;
    }
  }
`;
