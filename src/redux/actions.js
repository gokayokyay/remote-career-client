// import fetch from 'isomorphic-unfetch';
import fetch from 'isomorphic-unfetch';
import { API_ENDPOINT } from '../config';

export const PREVIEW_CHANGED_LOGO = 'PREVIEW_CHANGED_LOGO';
export const PREVIEW_CHANGED_POSITION = 'PREVIEW_CHANGED_POSITION';
export const PREVIEW_CHANGED_COMPANY_NAME = 'PREVIEW_CHANGED_COMPANY_NAME';
export const PREVIEW_CHANGED_COMPANY_HQ = 'PREVIEW_CHANGED_COMPANY_HQ';
export const PREVIEW_CHANGED_LOCATION_RESTRICTION =
  'PREVIEW_CHANGED_LOCATION_RESTRICTION';
export const PREVIEW_CHANGED_TAGS = 'PREVIEW_CHANGED_TAGS';
export const PREVIEW_CHANGED_DESCRIPTION = 'PREVIEW_CHANGED_DESCRIPTION';
export const PREVIEW_CHANGED_RESPONSIBILITIES =
  'PREVIEW_CHANGED_RESPONSIBILITIES';
export const PREVIEW_CHANGED_REQUIREMENTS = 'PREVIEW_CHANGED_REQUIREMENTS';
export const PREVIEW_CHANGED_NICE_TO_HAVE = 'PREVIEW_CHANGED_NICE_TO_HAVE';
export const PREVIEW_CHANGED_APPLY_EMAIL = 'PREVIEW_CHANGED_APPLY_EMAIL';
export const PREVIEW_CHANGED_APPLY_URL = 'PREVIEW_CHANGED_APPLY_URL';
export const PREVIEW_APPLY_ERROR = 'PREVIEW_APPLY_ERROR';

export const POST_JOB_BEGIN = 'POST_JOB_BEGIN';
export const POST_JOB_SUCCESS = 'POST_JOB_SUCCESS';
export const POST_JOB_FAILURE = 'POST_JOB_FAILURE';

export const GET_JOBS_BEGIN = 'GET_JOBS_BEGIN';
export const GET_JOBS_SUCCESS = 'GET_JOBS_SUCCESS';
export const GET_JOBS_FAILURE = 'GET_JOBS_FAILURE';

export const previewChangedLogo = logo => ({
  type: PREVIEW_CHANGED_LOGO,
  payload: logo,
});

export const previewChangedPosition = text => ({
  type: PREVIEW_CHANGED_POSITION,
  payload: text,
});

export const previewChangedCompanyName = text => ({
  type: PREVIEW_CHANGED_COMPANY_NAME,
  payload: text,
});

export const previewChangedCompanyHQ = text => ({
  type: PREVIEW_CHANGED_COMPANY_HQ,
  payload: text,
});

export const previewChangedLocationRestriction = text => ({
  type: PREVIEW_CHANGED_LOCATION_RESTRICTION,
  payload: text,
});

export const previewChangedTags = text => ({
  type: PREVIEW_CHANGED_TAGS,
  payload: text,
});

export const previewChangedDescription = text => ({
  type: PREVIEW_CHANGED_DESCRIPTION,
  payload: text,
});

export const previewChangedResponsibilities = text => ({
  type: PREVIEW_CHANGED_RESPONSIBILITIES,
  payload: text,
});

export const previewChangedRequirements = text => ({
  type: PREVIEW_CHANGED_REQUIREMENTS,
  payload: text,
});

export const previewChangedNiceToHave = text => ({
  type: PREVIEW_CHANGED_NICE_TO_HAVE,
  payload: text,
});

export const previewChangedApplyEmail = text => ({
  type: PREVIEW_CHANGED_APPLY_EMAIL,
  payload: text,
});

export const previewChangedApplyURL = text => ({
  type: PREVIEW_CHANGED_APPLY_URL,
  payload: text,
});

export const previewApplyError = () => ({
  type: PREVIEW_APPLY_ERROR,
});

export const postJobBegin = () => ({
  type: POST_JOB_BEGIN,
});

export const postJobSuccess = () => ({
  type: POST_JOB_SUCCESS,
});

export const postJobFailure = error => ({
  type: POST_JOB_FAILURE,
  payload: error,
});

export function postJob(job) {
  return dispatch => {
    dispatch(postJobBegin());
    return fetch(`${API_ENDPOINT}/jobs`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(job),
    })
      .then(res => res.json())
      .then(res => {
        dispatch(postJobSuccess());
      })
      .catch(err => {
        dispatch(postJobFailure(err));
        console.log(err);
      });
  };
}

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
        dispatch(getJobsSuccess(res));
      })
      .catch(err => {
        dispatch(getJobsFailure(err));
      });
  };
}
