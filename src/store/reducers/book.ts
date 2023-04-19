import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getBook } from '../../api/servicesTest/getBook';
import { getCatalogBooks } from '../../api/servicesTest/getCatalogBooks';
import { getGenres } from '../../api/servicesTest/getGenres';
import { getCartBooks } from '../../api/servicesTest/getCartBooks';
import { getFavoriteBooks } from '../../api/servicesTest/getFavoriteBooks';
import { getAdditionalBook } from '../../api/servicesTest/getAdditionalBook';
import { BookModel } from '../../models/book';
import { GenreModel } from '../../models/genre';
import { IRequestState } from '../../models/request';
import { getRecomendationBooks } from '../../api/servicesTest/getRecomendationBooks';

interface IBooksState {
  catalogBooks: BookModel[]
  cartBooks: BookModel[]
  favoriteBooks: BookModel[]
  oneBook: BookModel[]
  recomendationBook: BookModel[]
  minPrice: number
  maxPrice: number
  totalBooks: number
  currentPage: number
  genres: GenreModel[]
  status: 'init' | 'loading' | 'error' | 'success'
}

const initialState: IBooksState = {
  catalogBooks: [],
  cartBooks: [],
  favoriteBooks: [],
  oneBook: [],
  recomendationBook: [],
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
    putCatalogBooks(state, action: PayloadAction<BookModel[]>) {
      state.catalogBooks = action.payload;
    },
    putCartBooks(state, action: PayloadAction<BookModel[]>) {
      state.cartBooks = action.payload;
    },
    deleteCartBooks(state, action: PayloadAction<string>) {
      const index = state.cartBooks.findIndex((item) => item.bookId === action.payload);
      state.cartBooks.splice(index, 1);
    },
    putFavoriteBooks(state, action: PayloadAction<BookModel[]>) {
      state.favoriteBooks = action.payload;
    },
    putOneBook(state, action: PayloadAction<BookModel[]>) {
      state.oneBook = action.payload;
    },
    putGenres(state, action: PayloadAction<GenreModel[]>) {
      state.genres = action.payload;
    },
    putRating(state, action: PayloadAction<{id: string, rate: number}>) {
      const book = state.oneBook[0];
      const newRating = (book.rating * book.ratingCount + action.payload.rate) /
        (book.ratingCount + 1);
      book.rating = newRating;
    },
  },
  extraReducers: (builder) => builder
    .addCase(getCatalogBooksThunk.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(getCatalogBooksThunk.fulfilled, (state, action) => {
      state.status = 'success';
      state.catalogBooks = action.payload.books;
      state.minPrice = action.payload.minPrice;
      state.maxPrice = action.payload.maxPrice;
      state.totalBooks = action.payload.totalBooks;
    })
    .addCase(getCatalogBooksThunk.rejected, (state) => {
      state.status = 'error';
    })

    .addCase(getCartBooksThunk.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(getCartBooksThunk.fulfilled, (state, action) => {
      state.status = 'success';
      state.cartBooks = action.payload;
    })
    .addCase(getCartBooksThunk.rejected, (state) => {
      state.status = 'error';
    })

    .addCase(getFavoriteBooksThunk.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(getFavoriteBooksThunk.fulfilled, (state, action) => {
      state.status = 'success';
      state.favoriteBooks = action.payload;
    })
    .addCase(getFavoriteBooksThunk.rejected, (state) => {
      state.status = 'error';
    })

    .addCase(getOneBookThunk.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(getOneBookThunk.fulfilled, (state, action) => {
      state.status = 'success';
      state.oneBook = action.payload;
    })
    .addCase(getOneBookThunk.rejected, (state) => {
      state.status = 'error';
    })

    .addCase(getAdditionalBookThunk.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(getAdditionalBookThunk.fulfilled, (state, action) => {
      state.status = 'success';
      state.catalogBooks = [...state.catalogBooks, ...action.payload];
    })
    .addCase(getAdditionalBookThunk.rejected, (state) => {
      state.status = 'error';
    })

    .addCase(getRecomendationBookThunk.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(getRecomendationBookThunk.fulfilled, (state, action) => {
      state.status = 'success';
      state.recomendationBook = action.payload;
    })
    .addCase(getRecomendationBookThunk.rejected, (state) => {
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

export const getCatalogBooksThunk = createAsyncThunk('books/getAll', (state: IRequestState) => {
  return getCatalogBooks(state);
});

export const getCartBooksThunk = createAsyncThunk('books/getCart', (state: string[] | undefined) => {
  return getCartBooks(state);
});

export const getFavoriteBooksThunk = createAsyncThunk('books/getFavorite', (state: string[] | undefined) => {
  return getFavoriteBooks(state);
});

export const getOneBookThunk = createAsyncThunk('books/getOne', (id: string | undefined) => {
  return getBook(id);
});

export const getAdditionalBookThunk = createAsyncThunk('books/getAdditionalBook', (state: IRequestState) => {
  return getAdditionalBook(state);
});

export const getRecomendationBookThunk = createAsyncThunk('books/getRecomendationBook', (id: string | undefined) => {
  return getRecomendationBooks(id);
});

export const loadGenreThunk = createAsyncThunk('genres/getAll', () => {
  return getGenres();
});

export const {
  putCatalogBooks,
  putCartBooks,
  putFavoriteBooks,
  putOneBook,
  putGenres,
  putRating,
  deleteCartBooks,
} = book.actions;
export default book.reducer;
