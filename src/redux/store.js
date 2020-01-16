import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { previewJob } from './previewReducers';
import { postJob } from './postJobReducers';
import { getJobs } from './getJobsReducers';
import { postMail } from './postMailReducers';

export default createStore(
  combineReducers({
    previewJob,
    postJob,
    getJobs,
    postMail,
  }),
  applyMiddleware(thunk),
);
