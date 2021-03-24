import axios from '../../services/api';

import {
  GET_INDUSTRIES,
  GET_INDUSTRIES_ERROR,
  GET_INDUSTRIES_LOADING,
} from './types';

// // Register User
// export const registerUser = (userData, history) => (dispatch) => {
//   axios
//     .post('/api/users/register', userData)
//     .then((res) => history.push('/login'))
//     .catch((err) =>
//       dispatch({
//         type: GET_ERRORS,
//         payload: err.response.data,
//       })
//     );
// };
export const getIndustries = () => (dispatch) => {
  dispatch(setIndustryLoading());
  axios
    .get('data/generic/case_study/industry-list?limit=100')
    .then((res) => {
      dispatch({
        type: GET_INDUSTRIES,
        payload: res.data.data.list,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_INDUSTRIES_ERROR,
        payload: 'Error Fetching Data',
      });
    });
};

// set industry data loading
export const setIndustryLoading = () => {
  return {
    type: GET_INDUSTRIES_LOADING,
  };
};
