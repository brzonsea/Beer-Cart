const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'tags_fetch_success':
      return {
        ...state,
        ...action.tags,
      };
    default:
      return state;
  }
};
