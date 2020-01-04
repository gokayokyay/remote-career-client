import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { previewJob } from './previewReducers';
import { postJob } from './postJobReducers';
import { getJobs } from './getJobsReducers';

export default createStore(
  combineReducers({
    previewJob,
    postJob,
    getJobs,
  }),
  applyMiddleware(thunk),
);
