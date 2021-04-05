import axios from './api';

export const getAllCaseStudies = () => {
  return axios.get(
    'data/generic/case_study/public-list'
  );
};
// ?start=0&limit=100'
// filters={"industry_code":0,"capability_id":0}