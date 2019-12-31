import { createStore, combineReducers } from 'redux';

import { previewJob } from './previewReducers';

export default createStore(
  combineReducers({
    previewJob,
  }),
);
