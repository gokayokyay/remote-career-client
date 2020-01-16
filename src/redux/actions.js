// import fetch from 'isomorphic-unfetch';
import fetch from 'isomorphic-unfetch';
import { API_ENDPOINT } from '../config';

export const PREVIEW_CHANGED_LOGO = 'PREVIEW_CHANGED_LOGO';
export const PREVIEW_CHANGED_LOGO_BEGIN = 'PREVIEW_CHANGED_LOGO_BEGIN';
export const PREVIEW_CHANGED_LOGO_SUCCESS = 'PREVIEW_CHANGED_LOGO_SUCCESS';
export const PREVIEW_CHANGED_LOGO_FAILURE = 'PREVIEW_CHANGED_LOGO_FAILURE';

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
export const PREVIEW_CHANGED_APPLY_LINK = 'PREVIEW_CHANGED_APPLY_LINK';
export const PREVIEW_APPLY_ERROR = 'PREVIEW_APPLY_ERROR';

export const POST_JOB_BEGIN = 'POST_JOB_BEGIN';
export const POST_JOB_SUCCESS = 'POST_JOB_SUCCESS';
export const POST_JOB_FAILURE = 'POST_JOB_FAILURE';
export const POST_JOB_ERROR_ACKED = 'POST_JOB_ERROR_ACKED';

export const GET_JOBS_BEGIN = 'GET_JOBS_BEGIN';
export const GET_JOBS_SUCCESS = 'GET_JOBS_SUCCESS';
export const GET_JOBS_FAILURE = 'GET_JOBS_FAILURE';

export const POST_MAIL_BEGIN = 'POST_MAIL_BEGIN';
export const POST_MAIL_SUCCESS = 'POST_MAIL_SUCCESS';
export const POST_MAIL_FAILURE = 'POST_MAIL_FAILURE';

export const POST_MAIL_CHANGED_NAME = 'POST_MAIL_CHANGED_NAME';
export const POST_MAIL_CHANGED_MAIL = 'POST_MAIL_CHANGED_MAIL';
export const POST_MAIL_CHANGED_SUBJECT = 'POST_MAIL_CHANGED_SUBJECT';
export const POST_MAIL_CHANGED_MESSAGE = 'POST_MAIL_CHANGED_MESSAGE';

export const previewChangedLogoBegin = () => ({
  type: PREVIEW_CHANGED_LOGO_BEGIN,
});

export const previewChangedLogoSuccess = url => ({
  type: PREVIEW_CHANGED_LOGO_SUCCESS,
  payload: url,
});

export const previewChangedLogoFailure = err => ({
  type: PREVIEW_CHANGED_LOGO_FAILURE,
  payload: err,
});

export function previewChangedLogo(file) {
  return dispatch => {
    dispatch(previewChangedLogoBegin());
    const formData = new FormData();
    formData.append('file', file);
    return fetch(`${API_ENDPOINT}/upload/logo`, {
      method: 'POST',
      body: formData,
    })
      .then(res => res.json())
      .then(data => dispatch(previewChangedLogoSuccess(data.url)))
      .catch(err => dispatch(previewChangedLogoFailure(err)));
  };
}

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

export const previewChangedApplyLink = text => ({
  type: PREVIEW_CHANGED_APPLY_LINK,
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

export const postMailBegin = () => ({
  type: POST_MAIL_BEGIN,
});

export const postMailSuccess = () => ({
  type: POST_MAIL_SUCCESS,
});

export const postMailFailure = error => ({
  type: POST_MAIL_FAILURE,
  payload: error,
});

export function postMail(mail) {
  return dispatch => {
    dispatch(postMailBegin());
    return fetch(`${API_ENDPOINT}/mail`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(mail),
    })
      .then(res => res.json())
      .then(res => {
        if (!Number.toString(res.code).startsWith('2')) {
          dispatch(postMailFailure(res.message));
        } else {
          dispatch(postMailSuccess());
        }
      })
      .catch(err => {
        dispatch(postMailFailure(err));
      });
  };
}

export const postMailChangedName = name => ({
  type: POST_MAIL_CHANGED_NAME,
  payload: name,
});

export const postMailChangedMail = mail => ({
  type: POST_MAIL_CHANGED_MAIL,
  payload: mail,
});

export const postMailChangedSubject = subject => ({
  type: POST_MAIL_CHANGED_SUBJECT,
  payload: subject,
});

export const postMailChangedMessage = message => ({
  type: POST_MAIL_CHANGED_MESSAGE,
  payload: message,
});
