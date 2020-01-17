import fetch from 'isomorphic-unfetch';
import { API_ENDPOINT } from '../../config';

export const GET_JOBS_BEGIN = 'GET_JOBS_BEGIN';
export const GET_JOBS_SUCCESS = 'GET_JOBS_SUCCESS';
export const GET_JOBS_FAILURE = 'GET_JOBS_FAILURE';

export const getJobsBegin = jobs => ({
  type: GET_JOBS_BEGIN,
  payload: jobs,
});

export const getJobsSuccess = jobs => ({
  type: GET_JOBS_SUCCESS,
  payload: jobs,
});

export const getJobsFailure = error => ({
  type: GET_JOBS_FAILURE,
  payload: error,
});

export function getJobs() {
  return dispatch => {
    dispatch(getJobsBegin());
    return fetch(`${API_ENDPOINT}/jobs`)
      .then(res => res.json())
      .then(res => {
        const today = new Date().getTime() - 1 * 24 * 60 * 60 * 1000;
        const weekAgo = new Date().getTime() - 7 * 24 * 60 * 60 * 1000;
        const monthAgo = new Date().getTime() - 30 * 24 * 60 * 60 * 1000;

        const todayJobs = [];
        const pastWeekJobs = [];
        const pastMonthJobs = [];
        const olderJobs = [];

        res.forEach(job => {
          const createdAt = new Date(job.createdAt).getTime();
          if (createdAt > today) {
            todayJobs.push(job);
          } else if (createdAt > weekAgo) {
            pastWeekJobs.push(job);
          } else if (createdAt > monthAgo) {
            pastMonthJobs.push(job);
          } else {
            olderJobs.push(job);
          }
        });
        dispatch(
          getJobsSuccess({
            today: todayJobs,
            pastWeek: pastWeekJobs,
            pastMonth: pastMonthJobs,
            older: olderJobs,
          }),
        );
      })
      .catch(err => {
        dispatch(getJobsFailure(err));
      });
  };
}
