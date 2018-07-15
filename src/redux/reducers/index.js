import { combineReducers } from 'redux';
import beersReducer from './beers';
import tagsReducer from './tags';
import cartReducer from './cart';

const INITIAL_STATE = {};

const appReducer = combineReducers({
  beers: beersReducer,
  tags: tagsReducer,
  cart: cartReducer,
});

const rootReducer = (state = INITIAL_STATE, action) => appReducer(state, action);

export default rootReducer;
