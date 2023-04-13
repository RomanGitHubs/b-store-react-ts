import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IRequestState } from '../../models/request';

const initialState: IRequestState = {
  selectedGenres: [],
  selectedMinPrice: 0,
  selectedMaxPrice: 0,
  selectedSort: 'rating',
  selectedOrder: 'DESC',
  selectedQuery: '',
  currentPage: 0,
  pageSize: 8,
};

const request = createSlice({
  name: 'request',
  initialState,
  reducers: {
    reqGenres(state, action: PayloadAction<{ genresId: string[] }>) {
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
    reqPagination(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
  },
});

export const { reqGenres, reqPrice, reqSort, reqOrder, reqQuery, reqPagination } = request.actions;
export default request.reducer;
