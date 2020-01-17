import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { previewJob } from './previewReducers';
import { postJob } from './postJobReducers';
import { getJobs } from './getJobsReducers';
import { postMail } from './postMailReducers';
import { editJobCheckKey, editJob } from './editJobReducers';

export default createStore(
  combineReducers({
    previewJob,
    postJob,
    getJobs,
    postMail,
    editJobCheckKey,
    editJob,
  }),
  applyMiddleware(thunk),
);
