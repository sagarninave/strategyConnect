import { _colorStringFilter } from 'gsap/gsap-core';
import axios from '../../services/api';

import {
  GET_CASE_STUDIES,
  GET_CASE_STUDIES_ITEM,
  GET_CASE_STUDIES_ERROR,
  GET_CASE_STUDIES_LOADING,
} from './types';

export const getCaseStudies = () => (dispatch) => {
  dispatch(setCaseStudyLoading());
  axios
    .get(
      'data/generic/case_study/public-list?start=0&limit=100&filters={"industry_code":0,"capability_id":0}'
    )
    .then((res) => {
      const industry = res.data.data.list;
      localStorage.setItem('industry', JSON.stringify(industry));
      dispatch({
        type: GET_CASE_STUDIES,
        payload: res.data.data.list,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_CASE_STUDIES_ERROR,
        payload: 'Error Fetching Data',
      });
    });
};
export const getCaseStudiesByIndustries = (id) => (dispatch) => {
  dispatch(setCaseStudyLoading());
  axios
    .get(
      `data/generic/case_study/public-list?start=0&limit=100&sort=id&sort_order=asc&filters={"industry_code":${id},"capability_id":0}`
    )
    .then((res) => {
      // const industry = res.data.data.list;
      // localStorage.setItem('industry', JSON.stringify(industry));
      dispatch({
        type: GET_CASE_STUDIES,
        payload: res.data.data.list,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_CASE_STUDIES_ERROR,
        payload: 'Error Fetching Data',
      });
    });
};
export const getCaseStudiesByProjectTag = (tag) => (dispatch) => {
  dispatch(setCaseStudyLoading());
  axios
    .get(
      `data/generic/case_study/public-list?start=0&limit=100&sort=id&sort_order=asc&filters={"industry_code":0,"capability_id":0,"tags":[${tag}]}`
    )
    .then((res) => {
      // const industry = res.data.data.list;
      // localStorage.setItem('industry', JSON.stringify(industry));
      dispatch({
        type: GET_CASE_STUDIES,
        payload: res.data.data.list,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_CASE_STUDIES_ERROR,
        payload: 'Error Fetching Data',
      });
    });
};

export const getCaseStudiyItem = (id) => (dispatch) => {
  dispatch(setCaseStudyLoading());
  axios
    .get(
      `data/generic/case_study/detail?id=${id}&events=["CASE_STUDY_VIEW"]&deep=["project_id","sections"]`
    )
    .then((res) => {
      dispatch({
        type: GET_CASE_STUDIES_ITEM,
        payload: res.data.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_CASE_STUDIES_ERROR,
        payload: 'Error Fetching Data',
      });
    });
};

// set industry data loading
export const setCaseStudyLoading = () => {
  return {
    type: GET_CASE_STUDIES_LOADING,
  };
};
