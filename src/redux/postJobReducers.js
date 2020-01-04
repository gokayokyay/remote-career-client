/* eslint-disable import/prefer-default-export */
import { POST_JOB_BEGIN, POST_JOB_SUCCESS, POST_JOB_FAILURE } from './actions';

export function postJob(state = {}, action) {
  switch (action.type) {
    case POST_JOB_BEGIN:
      return { ...state, loading: true };
    case POST_JOB_SUCCESS:
      return { ...state, loading: false, success: true };
    case POST_JOB_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
