/* eslint-disable import/prefer-default-export */
import { GET_JOBS_BEGIN, GET_JOBS_SUCCESS, GET_JOBS_FAILURE } from './actions';

export function getJobs(state = {}, action) {
  switch (action.type) {
    case GET_JOBS_BEGIN:
      return { ...state, loading: true };
    case GET_JOBS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case GET_JOBS_SUCCESS:
      return { ...state, loading: false, jobs: action.payload };
    default:
      return state;
  }
}
