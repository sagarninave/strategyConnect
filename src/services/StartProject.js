import axios from './api';

export const getAllIndustries = () => {
  return axios.get('data/generic/case_study/industry-list?limit=100');
};
