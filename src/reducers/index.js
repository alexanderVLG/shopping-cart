import { combineReducers } from 'redux';
import teas from './teas';
import cart from './cart';

export default combineReducers({
  teas,
  cart
});