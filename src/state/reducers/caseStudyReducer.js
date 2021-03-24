/* eslint-disable import/no-anonymous-default-export */

import {
  GET_CASE_STUDIES,
  GET_CASE_STUDIES_LOADING,
  GET_CASE_STUDIES_ERROR,
  GET_CASE_STUDIES_ITEM,
} from '../actions/types';

const initialState = {
  caseStudyLoading: false,
  caseStudies: [],
  caseStudyError: null,
  caseStudyItem: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CASE_STUDIES:
      return {
        ...state,
        caseStudies: action.payload,
        caseStudyLoading: false,
      };
    case GET_CASE_STUDIES_LOADING:
      return {
        ...state,
        caseStudies: [],
        caseStudyLoading: true,
      };
    case GET_CASE_STUDIES_ERROR:
      return {
        ...state,
        caseStudies: [],
        caseStudyLoading: false,
        caseStudyError: action.payload,
      };
    case GET_CASE_STUDIES_ITEM:
      return {
        ...state,
        caseStudyLoading: false,
        caseStudyItem: action.payload,
      };
    default:
      return state;
  }
}
