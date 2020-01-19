import fetch from 'isomorphic-unfetch';
import { API_ENDPOINT } from '../../config';

export const SEARCH_JOBS_BEGIN = 'SEARCH_JOBS_BEGIN';
export const SEARCH_JOBS_SUCCESS = 'SEARCH_JOBS_SUCCESS';
export const SEARCH_JOBS_FAILURE = 'SEARCH_JOBS_FAILURE';

export const searchJobsBegin = jobs => ({
  type: SEARCH_JOBS_BEGIN,
  payload: jobs,
});

export const searchJobsSuccess = jobs => ({
  type: SEARCH_JOBS_SUCCESS,
  payload: jobs,
});

export const searchJobsFailure = error => ({
  type: SEARCH_JOBS_FAILURE,
  payload: error,
});

export function searchJobs(val) {
  return dispatch => {
    dispatch(searchJobsBegin());
    return fetch(`${API_ENDPOINT}/jobs/`)
      .then(res => res.json())
      .then(res => {
        if (!String(res.code).startsWith('2')) {
          dispatch(searchJobsFailure(res.message));
        } else {
          dispatch(searchJobsSuccess(res.message));
        }
        dispatch(searchJobsSuccess(res.message));
      })
      .catch(err => {
        dispatch(searchJobsFailure(err));
      });
  };
}
