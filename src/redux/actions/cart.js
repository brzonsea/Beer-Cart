import axios from 'axios';
import apiUrl from '../../config/apiUrl';

export function pickBeer(beer) {
  return (dispatch) => {
    dispatch({
      type: 'beer_pick',
      beer,
    });
  };
}

export function unpickBeer(beer) {
  return (dispatch) => {
    dispatch({
      type: 'beer_unpick',
      beer,
    });
  };
}
