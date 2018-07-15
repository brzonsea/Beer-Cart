import { combineReducers } from 'redux';
import beersReducer from './beers';
import tagsReducer from './tags';

const INITIAL_STATE = {};

const appReducer = combineReducers({
  beers: beersReducer,
  tags: tagsReducer,
});

const rootReducer = (state = INITIAL_STATE, action) => appReducer(state, action);

export default rootReducer;
