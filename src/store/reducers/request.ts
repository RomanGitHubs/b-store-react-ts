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
      state.selectedGenres = action.payload.genresId;
    },
    reqPrice(state, action: PayloadAction<{minVal: number, maxVal: number}>) {
      state.selectedMinPrice = action.payload.minVal;
      state.selectedMaxPrice = action.payload.maxVal;
    },
    reqSort(state, action: PayloadAction<'price' | 'title' | 'author' | 'rating' | 'date'>) {
      state.selectedSort = action.payload;
    },
    reqOrder(state) {
      switch (state.selectedOrder) {
      case 'ASC':
        state.selectedOrder = 'DESC';
        break;
      case 'DESC':
        state.selectedOrder = 'ASC';
        break;
      default:
        state.selectedOrder = 'DESC';
      }
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
