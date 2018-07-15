import _ from 'lodash';

const INITIAL_STATE = { pickedBeers: {} };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'beer_pick':
      const { pickedBeers } = state;
      const { beer } = action;
      pickedBeers[beer] = (pickedBeers[beer]+1) || 1 ;
      console.log('Inside beer_pick', pickedBeers);
      return {
        pickedBeers,
      };
    default:
      return state;
  }
};
