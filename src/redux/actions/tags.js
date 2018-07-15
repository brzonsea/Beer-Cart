import axios from 'axios';
import apiUrl from '../../config/apiUrl';

export function tagsFetch() {
  return (dispatch) => {
    axios.get(`${apiUrl}/tags`)
      .then((response) => {
        console.log('Fetched tags', response);
        if (response.status === 200) {
          dispatch({
            type: 'tags_fetch_success',
            tags: response.data,
          });
        } else {
          console.log('api Request went wrong while fetching tags');
        }

      }).catch((err) => {
        console.log('Something Wrong While fetching tags', err);
      });
  };
}
