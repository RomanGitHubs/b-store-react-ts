import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getBook } from '../../api/servicesTest/book';
import { getBooks } from '../../api/servicesTest/books';
import { getGenres } from '../../api/servicesTest/genres';
import { BookModel } from '../../models/book';
import { GenreModel } from '../../models/genre';
import { IRequestState } from '../../models/request';

interface IBooksState {
  books: BookModel[]
  minPrice: number
  maxPrice: number
  totalBooks: number
  currentPage: number
  genres: GenreModel[]
  status: 'init' | 'loading' | 'error' | 'success'
}

interface IBooksAction {
  books: BookModel[]
  minPriceBook: number
  maxPriceBook: number
}

const initialState: IBooksState = {
  books: [],
  minPrice: 0,
  maxPrice: 0,
  totalBooks: 0,
  currentPage: 0,
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
    putGenres(state, action: PayloadAction<GenreModel[]>) {
      state.genres = action.payload;
    },
    putRating(state, action: PayloadAction<{id: string, rate: number}>) {
      const book = state.books.filter((item) => item.bookId === action.payload.id)[0];
      const newRating = (book.rating + action.payload.rate) / 2;
      book.rating = newRating;
    },
  },
  extraReducers: (builder) => builder
    .addCase(loadBooksThunk.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(loadBooksThunk.fulfilled, (state, action) => {
      state.status = 'success';
      state.books = action.payload.books;
      state.minPrice = action.payload.minPrice;
      state.maxPrice = action.payload.maxPrice;
      state.totalBooks = action.payload.totalBooks;
    })
    .addCase(loadBooksThunk.rejected, (state) => {
      state.status = 'error';
    })

    .addCase(getBookThunk.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(getBookThunk.fulfilled, (state) => {
      state.status = 'success';
    })
    .addCase(getBookThunk.rejected, (state) => {
      state.status = 'error';
    })

    .addCase(loadGenreThunk.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(loadGenreThunk.fulfilled, (state, action) => {
      state.status = 'success';
      state.genres = action.payload;
    })
    .addCase(loadGenreThunk.rejected, (state) => {
      state.status = 'error';
    }),
});

export const loadBooksThunk = createAsyncThunk('books/getAll', (state: IRequestState) => {
  return getBooks(state);
});

export const getBookThunk = createAsyncThunk('books/getOne', (id: string | undefined) => {
  return getBook(id);
});

export const loadGenreThunk = createAsyncThunk('genres/get', () => {
  return getGenres();
});

export const { putBooks, putGenres, putRating } = book.actions;
export default book.reducer;
