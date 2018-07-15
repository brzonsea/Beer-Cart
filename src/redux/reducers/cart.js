import _ from 'lodash';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'beer_pick':
      const { beer } = action;
      state[beer] = (state[beer]+1) || 1 ;
      console.log('Inside beer_pick', state);
      return {
        ...state,
      };
    default:
      return state;
  }
};
