import axios from 'axios';
import apiUrl from '../../config/apiUrl';

export function beersFetch() {
  return (dispatch) => {
    axios.get(`${apiUrl}/beers`)
      .then((response) => {
        console.log('Fetched beers', response);
        if (response.status === 200) {
          dispatch({
            type: 'beers_fetch_success',
            beers: response.data,
          });
        } else {
          console.log('api Request went wrong while fetching beers');
        }

      }).catch((err) => {
        console.log('Something Wrong While fetching beers', err);
      });
  };
}
