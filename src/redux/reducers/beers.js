const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'beers_fetch_success':
      return {
        ...state,
        ...action.beers,
      };
    default:
      return state;
  }
};
