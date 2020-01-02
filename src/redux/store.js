import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { previewJob } from './previewReducers';
import { postJobReducers } from './postJobReducers';

export default createStore(
  combineReducers({
    previewJob,
    postJobReducers,
  }),
  applyMiddleware(thunk),
);
