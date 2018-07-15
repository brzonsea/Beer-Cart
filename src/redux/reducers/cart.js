import _ from 'lodash';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  const { beer } = action;
  switch (action.type) {
    case 'beer_pick':
      state[beer] = (state[beer] + 1) || 1;
      console.log('Inside beer_pick', state);
      return {
        ...state,
      };
      break;
    case 'beer_unpick':
      state[beer] = state[beer] - 1;
      if (state[beer] < 1) {
        delete state[beer]
      }
      console.log('Inside beer_unpick', state);
      return {
        ...state,
      };
      break;
    default:
      return state;
  }
};
