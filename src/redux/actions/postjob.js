import fetch from 'isomorphic-unfetch';
import { API_ENDPOINT } from '../../config';

export const POST_JOB_BEGIN = 'POST_JOB_BEGIN';
export const POST_JOB_SUCCESS = 'POST_JOB_SUCCESS';
export const POST_JOB_FAILURE = 'POST_JOB_FAILURE';
export const POST_JOB_ERROR_ACKED = 'POST_JOB_ERROR_ACKED';

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

export const postJobErrorAcked = () => ({
  type: POST_JOB_ERROR_ACKED,
});

export function postJob(job) {
  const body = {
    position: job.position,
    companyName: job.companyName,
    companyHeadquarters: job.companyHQ,
    locationRestriction: job.locationRestriction
      ? job.locationRestriction
      : 'Worldwide',
    companyLogo: job.logoURL,
    tags: job.tags,
    requirements: job.requirements,
    description: job.jobDescription,
    niceToHave: job.niceToHave,
    applyLink: job.applyLink,
    responsibilities: job.responsibilities,
    contactEmail: job.contactEmail,
  };
  return dispatch => {
    dispatch(postJobBegin());
    return fetch(`${API_ENDPOINT}/jobs`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then(res => res.json())
      .then(res => {
        if (res.code === 500) {
          let error = '';
          if (res.message.includes('position')) {
            error += 'Position is required!\n';
          }
          if (res.message.includes('companyName')) {
            error += 'Company name is required!\n';
          }
          if (res.message.includes('companyLogo')) {
            error += 'Company logo is required!\n';
          }
          if (res.message.includes('description')) {
            error += 'Job description is required!\n';
          }
          if (res.message.includes('tags')) {
            error += 'Minimum one, maximum three tags are allowed.\n';
          }
          if (res.message.includes('applyLink')) {
            error += 'Apply link is required!\n';
          }
          if (res.message.includes('contactEmail')) {
            error += 'Contact email is required!\n';
          }
          dispatch(postJobFailure(error));
        } else {
          dispatch(postJobSuccess());
        }
      })
      .catch(err => {
        dispatch(postJobFailure(err));
      });
  };
}

export function postEditedJob(job, id, key) {
  const body = {
    position: job.position,
    companyName: job.companyName,
    companyHeadquarters: job.companyHQ,
    locationRestriction: job.locationRestriction
      ? job.locationRestriction
      : 'Worldwide',
    companyLogo: job.logoURL,
    tags: job.tags,
    requirements: job.requirements,
    description: job.jobDescription,
    niceToHave: job.niceToHave,
    applyLink: job.applyLink,
    responsibilities: job.responsibilities,
    id,
    key,
  };
  return dispatch => {
    dispatch(postJobBegin());
    return fetch(`${API_ENDPOINT}/jobs`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then(res => res.json())
      .then(res => {
        if (res.code === 500) {
          let error = '';
          if (res.message.includes('position')) {
            error += 'Position is required!\n';
          }
          if (res.message.includes('companyName')) {
            error += 'Company name is required!\n';
          }
          if (res.message.includes('companyLogo')) {
            error += 'Company logo is required!\n';
          }
          if (res.message.includes('description')) {
            error += 'Job description is required!\n';
          }
          if (res.message.includes('tags')) {
            error += 'Minimum one, maximum three tags are allowed.\n';
          }
          if (res.message.includes('applyLink')) {
            error += 'Apply link is required!\n';
          }
          dispatch(postJobFailure(error));
        } else {
          dispatch(postJobSuccess());
        }
      })
      .catch(err => {
        dispatch(postJobFailure(err));
      });
  };
}