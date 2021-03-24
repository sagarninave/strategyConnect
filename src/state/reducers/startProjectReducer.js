/* eslint-disable import/no-anonymous-default-export */

import {
  GET_INDUSTRIES,
  GET_INDUSTRIES_LOADING,
  GET_INDUSTRIES_ERROR,
} from '../actions/types';

const initialState = {
  loading: false,
  industries: [],
  industryError: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_INDUSTRIES:
      return {
        ...state,
        industries: action.payload,
        loading: false,
      };
    case GET_INDUSTRIES_LOADING:
      return {
        ...state,
        industries: [],
        loading: true,
      };
    case GET_INDUSTRIES_ERROR:
      return {
        ...state,
        industries: [],
        loading: false,
        industryError: action.payload,
      };
    default:
      return state;
  }
}
