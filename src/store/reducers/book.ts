import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getBooks } from '../../api/servicesTest/books';
import { BookModel } from '../../models/book';
import { Genre } from '../../models/genre';

interface IBooksState {
  books: BookModel[];
  minPrice: number;
  maxPrice: number;
  genres: Genre[];
  status: 'init' | 'loading' | 'error' | 'success';
}

interface IBooksAction {
  books: BookModel[],
  minPriceBook: number,
  maxPriceBook: number,
}

const initialState: IBooksState = {
  books: [],
  minPrice: 0,
  maxPrice: 250,
  genres: [],
  status: 'init',
};

const book = createSlice({
  name: 'book',
  initialState,
  reducers: {
    putBooks(state, action: PayloadAction<IBooksAction>) {
      state.books = action.payload.books;
      state.minPrice = action.payload.minPriceBook * 100;
      state.maxPrice = action.payload.maxPriceBook * 100;
    },
    putGenres(state, action: PayloadAction<Genre[]>) {
      state.genres = action.payload;
    },
    putRating(state, action: PayloadAction<{id: number, rate: number}>) {
      const book = state.books.filter((item) => item.bookId === action.payload.id)[0];
      const newRating = (book.rating + action.payload.rate) / 2;
      book.rating = newRating;
    },
  },
  extraReducers: (builder) => builder
    .addCase(loadBookThunk.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(loadBookThunk.fulfilled, (state, action) => {
      state.status = 'success';
      state.books = action.payload;
    })
    .addCase(loadBookThunk.rejected, (state) => {
      state.status = 'error';
    }),
});

export const loadBookThunk = createAsyncThunk('books/get', () => {
  return getBooks();
});

export const { putBooks, putGenres, putRating } = book.actions;
export default book.reducer;
