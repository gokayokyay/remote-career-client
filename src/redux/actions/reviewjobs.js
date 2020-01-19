import fetch from 'isomorphic-unfetch';
import { API_ENDPOINT } from '../../config';

export const GET_REVIEW_JOBS_BEGIN = 'GET_REVIEW_JOBS_BEGIN';
export const GET_REVIEW_JOBS_SUCCESS = 'GET_REVIEW_JOBS_SUCCESS';
export const GET_REVIEW_JOBS_FAILURE = 'GET_REVIEW_JOBS_FAILURE';

export const SELECTED_REVIEW_JOB = 'SELECTED_REVIEW_JOB';

export const CONFIRM_REVIEW_JOB_BEGIN = 'CONFIRM_REVIEW_JOB_BEGIN';
export const CONFIRM_REVIEW_JOB_SUCCESS = 'CONFIRM_REVIEW_JOB_SUCCESS';
export const CONFIRM_REVIEW_JOB_FAILURE = 'CONFIRM_REVIEW_JOB_FAILURE';

export const DECLINE_REVIEW_JOB_BEGIN = 'DECLINE_REVIEW_JOB_BEGIN';
export const DECLINE_REVIEW_JOB_SUCCESS = 'DECLINE_REVIEW_JOB_SUCCESS';
export const DECLINE_REVIEW_JOB_FAILURE = 'DECLINE_REVIEW_JOB_FAILURE';

export const getReviewJobsBegin = () => ({
  type: GET_REVIEW_JOBS_BEGIN,
});

export const getReviewJobsSuccess = jobs => ({
  type: GET_REVIEW_JOBS_SUCCESS,
  payload: jobs,
});

export const getReviewJobsFailure = error => ({
  type: GET_REVIEW_JOBS_FAILURE,
  payload: error,
});

export function getReviewJobs(key) {
  return dispatch => {
    dispatch(getReviewJobsBegin());
    return fetch(`${API_ENDPOINT}/reviewjobs`, {
      headers: {
        'X-Admin-Key': key,
      },
    })
      .then(res => res.json())
      .then(res => {
        if (!String(res.code).startsWith('2')) {
          dispatch(getReviewJobsFailure(res.message));
        } else {
          dispatch(getReviewJobsSuccess(res.message));
        }
      })
      .catch(err => {
        dispatch(getReviewJobsFailure(err));
      });
  };
}

export const selectedReviewJob = index => ({
  type: SELECTED_REVIEW_JOB,
  payload: index,
});

export const confirmReviewJobBegin = () => ({
  type: CONFIRM_REVIEW_JOB_BEGIN,
});

export const confirmReviewJobFailure = error => ({
  type: CONFIRM_REVIEW_JOB_FAILURE,
  payload: error,
});

export const confirmReviewJobSuccess = id => ({
  type: CONFIRM_REVIEW_JOB_SUCCESS,
  payload: id,
});

export function confirmReviewJob(id, key) {
  return dispatch => {
    dispatch(confirmReviewJobBegin());
    return fetch(`${API_ENDPOINT}/reviewjobs/confirm/${id}`, {
      method: 'POST',
      headers: {
        'X-Admin-Key': key,
      },
    })
      .then(res => res.json())
      .then(res => {
        if (!String(res.code).startsWith('2')) {
          dispatch(confirmReviewJobFailure(res.message));
        } else {
          dispatch(confirmReviewJobSuccess(res.message));
        }
      })
      .catch(err => {
        dispatch(confirmReviewJobFailure(err));
      });
  };
}

export const declineReviewJobBegin = () => ({
  type: DECLINE_REVIEW_JOB_BEGIN,
});

export const declineReviewJobFailure = error => ({
  type: DECLINE_REVIEW_JOB_FAILURE,
  payload: error,
});

export const declineReviewJobSuccess = id => ({
  type: DECLINE_REVIEW_JOB_SUCCESS,
  payload: id,
});

export function declineReviewJob(id, key) {
  return dispatch => {
    dispatch(declineReviewJobBegin());
    return fetch(`${API_ENDPOINT}/reviewjobs/decline/${id}`, {
      method: 'POST',
      headers: {
        'X-Admin-Key': key,
      },
    })
      .then(res => res.json())
      .then(res => {
        if (!String(res.code).startsWith('2')) {
          dispatch(declineReviewJobFailure(res.message));
        } else {
          dispatch(declineReviewJobSuccess(res.message));
        }
      })
      .catch(err => {
        dispatch(declineReviewJobFailure(err));
      });
  };
}
