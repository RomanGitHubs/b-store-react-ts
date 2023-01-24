import { combineReducers } from 'redux';
import userSlice from './user';
import bookSlice from './book';
import cartSlice from './cart';
import requestSlice from './request';

const rootReducer = combineReducers({
  userSlice,
  bookSlice,
  requestSlice,
  cartSlice,
});

export default rootReducer;
