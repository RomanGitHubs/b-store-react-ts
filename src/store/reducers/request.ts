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
  pageSize: 4,
  noLimit: false,
};

const request = createSlice({
  name: 'request',
  initialState,
  reducers: {
    reqGenres(state, action: PayloadAction<{ genresId: string[] }>) {
      // eslint-disable-next-line no-console
      console.log(action.payload.genresId);
      state.selectedGenres = action.payload.genresId;
    },
    reqPrice(state, action: PayloadAction<{min: number, max: number}>) {
      state.selectedMinPrice = action.payload.min;
      state.selectedMaxPrice = action.payload.max;
    },
    reqSort(state, action: PayloadAction<string>) {
      state.selectedSort = action.payload;
    },
    reqOrder(state) {
      if (state.selectedOrder === 'DESC') state.selectedOrder = 'ASC';
      if (state.selectedOrder === 'ASC') state.selectedOrder = 'DESC';
    },
    reqQuery(state, action: PayloadAction<{ query: string }>) {
      state.selectedQuery = action.payload.query;
    },
    reqPagination(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    reqPagesize(state, action: PayloadAction<number>) {
      state.pageSize = action.payload;
    },
    reqNoLimit(state) {
      state.noLimit = !state.noLimit;
    },
  },
});

export const { reqGenres, reqPrice, reqSort,
  reqOrder, reqQuery, reqPagination, reqPagesize, reqNoLimit } = request.actions;
export default request.reducer;
