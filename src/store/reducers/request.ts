import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Pagination } from '../../models/pagination';

interface IRequestState {
  selectedGenres: number[],
  selectedMinPrice: number,
  selectedMaxPrice: number,
  selectedSort: string,
  selectedOrder: 'ASC' | 'DESC',
  selectedQuery: string,
  selectedPagination: Pagination,
}

const initialState: IRequestState = {
  selectedGenres: [],
  selectedMinPrice: 0,
  selectedMaxPrice: 250,
  selectedSort: 'rating',
  selectedOrder: 'DESC',
  selectedQuery: '',
  selectedPagination: {
    currentPage: 1,
    numberPerPage: 2,
    has_previous: true,
    previous: 2,
    has_next: true,
    next: 2,
    last_page: 3,
  },
};

const request = createSlice({
  name: 'request',
  initialState,
  reducers: {
    reqGenres(state, action: PayloadAction<{ genresId: number[] }>) {
      state.selectedGenres = action.payload.genresId;
    },
    reqPrice(state, action: PayloadAction<{min: number, max: number}>) {
      state.selectedMinPrice = action.payload.min;
      state.selectedMaxPrice = action.payload.max;
    },
    reqSort(state, action: PayloadAction<string>) {
      state.selectedSort = action.payload;
    },
    reqOrder(state, action: PayloadAction<'ASC' | 'DESC'>) {
      state.selectedOrder = action.payload;
    },
    reqQuery(state, action: PayloadAction<{ query: string }>) {
      state.selectedQuery = action.payload.query;
    },
    reqPagination(state, action: PayloadAction<Pagination>) {
      state.selectedPagination = action.payload;
    },
  },
});

export const { reqGenres, reqPrice, reqSort, reqOrder, reqQuery, reqPagination } = request.actions;
export default request.reducer;
