import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CartItem = {
  cartId: string,
  hardCoverCount: number,
  paperCoverCount: number,
}

interface ICartState {
  cartBooks: CartItem[],
}

const initialState: ICartState = {
  cartBooks: [],
};

const cart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    putCart(state, action: PayloadAction<{id: string, view: 'hard' | 'paper'}>) {
      if (state.cartBooks.find((item) => item.cartId === action.payload.id)) {
        if (action.payload.view === 'hard') {
          const item = state.cartBooks.filter((item) => item.cartId === action.payload.id)[0];
          item.hardCoverCount++;
          return;
        }
        if (action.payload.view === 'paper') {
          const item = state.cartBooks.filter((item) => item.cartId === action.payload.id)[0];
          item.paperCoverCount++;
          return;
        }
      }

      if (action.payload.view === 'hard') {
        state.cartBooks = [
          ...state.cartBooks,
          {
            cartId: action.payload.id,
            hardCoverCount: 1,
            paperCoverCount: 0,
          },
        ];
      }
      if (action.payload.view === 'paper') {
        state.cartBooks = [
          ...state.cartBooks,
          {
            cartId: action.payload.id,
            hardCoverCount: 0,
            paperCoverCount: 1,
          },
        ];
      }
      // state.cartBooks = [...state.cartBooks, action.payload];
    },
    increaseCart(state, action: PayloadAction<{id: string, view: 'hard' | 'paper'}>) {
      if (action.payload.view === 'hard') {
        return {
          ...state,
          cartBooks: state.cartBooks.map((book) => {
            return (book.cartId === action.payload.id
              ? { ...book, hardCoverCount: book.hardCoverCount + 1 }
              : book);
          }),
        };
      }

      if (action.payload.view === 'paper') {
        return {
          ...state,
          cartBooks: state.cartBooks.map((book) => {
            return (book.cartId === action.payload.id
              ? { ...book, paperCoverCount: book.paperCoverCount + 1 }
              : book);
          }),
        };
      }
    },
    decreaseCart(state, action: PayloadAction<{id: string, view: 'hard' | 'paper'}>) {
      if (action.payload.view === 'hard') {
        return {
          ...state,
          cartBooks: state.cartBooks.map((book) => {
            return (book.cartId === action.payload.id && (
              (book.hardCoverCount > 0 && book.paperCoverCount > 0) ||
              (book.hardCoverCount > 1 && book.paperCoverCount === 0)
            )
              ? { ...book, hardCoverCount: book.hardCoverCount - 1 }
              : book
            );
          }),
        };
      }
      if (action.payload.view === 'paper') {
        return {
          ...state,
          cartBooks: state.cartBooks.map((book) => {
            return (book.cartId === action.payload.id && (
              (book.paperCoverCount > 0 && book.hardCoverCount > 0) ||
              (book.paperCoverCount > 1 && book.hardCoverCount === 0)
            )
              ? { ...book, paperCoverCount: book.paperCoverCount - 1 }
              : book
            );
          }),
        };
      }
    },
    deleteCart(state, action: PayloadAction<{id: string, view: 'hard' | 'paper'}>) {
      const index = state.cartBooks.findIndex((item) => item.cartId === action.payload.id);
      state.cartBooks.splice(index, 1);
    },
  },

});

export const { putCart, increaseCart, decreaseCart, deleteCart } = cart.actions;
export default cart.reducer;
