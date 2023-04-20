import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserModel } from '../../models/user';
import { getUser } from '../../api/servicesTest/users';

interface IUserState {
  user: UserModel | null;
  error?: string;
  status: 'init' | 'loading' | 'error' | 'success';
}

const initialState: IUserState = {
  user: null,
  status: 'init',
};

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    putUser(state, action: PayloadAction<UserModel>) {
      state.user = action.payload;
    },
    putRateBook(state, action: PayloadAction<string>) {
      if (state.user) state.user.ratedBooks = [...state.user.ratedBooks, action.payload];
    },
    logoutUser(state) {
      state.user = null;
    },
    addFavoriteBook(state, action: PayloadAction<{ id: string }>) {
      if (state.user === null) return;
      state.user.favoriteBooks = [...state.user.favoriteBooks, action.payload.id];
    },
    removeFavoriteBook(state, action: PayloadAction<{ id: string }>) {
      if (state.user === null) return;
      state.user.favoriteBooks.splice(state.user.favoriteBooks.indexOf(action.payload.id), 1);
    },
  },
  extraReducers: (builder) => builder
    .addCase(loadUserThunk.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(loadUserThunk.fulfilled, (state, action) => {
      state.status = 'success';
      state.user = action.payload;
    })
    .addCase(loadUserThunk.rejected, (state) => {
      state.status = 'error';
    }),
});

export const loadUserThunk = createAsyncThunk('user/get', () => {
  return getUser();
});

// export const { reducer: userReducer, actions: userAction } = user;

export const {
  putUser,
  logoutUser,
  addFavoriteBook,
  removeFavoriteBook,
  putRateBook,
} = user.actions;
export default user.reducer;
