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
    case 'beer_buy_all':
      const boughtBeerNames = Object.keys(state);
      boughtBeerNames.map((name) => {
        console.log(`You bought ${state[name]} bottles of ${name}.`);
      })
      console.log(`You bought ${action.totalBeerCount} beers in total.
        Total ${action.total}원`);
      return {

      }
      break;
    default:
      return state;
  }
};
