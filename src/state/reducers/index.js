import { combineReducers } from 'redux';
import startProjectReducer from './startProjectReducer';
import caseStudyReducer from './caseStudyReducer';
import errorReducer from './errorReducer';

export default combineReducers({
  startProject: startProjectReducer,
  errors: errorReducer,
  caseStudy: caseStudyReducer,
});
