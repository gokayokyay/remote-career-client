import fetch from 'isomorphic-unfetch';
import { API_ENDPOINT } from '../../config';

export const EDIT_JOB_CHECK_KEY_BEGIN = 'EDIT_JOB_CHECK_KEY_BEGIN';
export const EDIT_JOB_CHECK_KEY_SUCCESS = 'EDIT_JOB_CHECK_KEY_SUCCESS';
export const EDIT_JOB_CHECK_KEY_FAILURE = 'EDIT_JOB_CHECK_KEY_FAILURE';

export const EDIT_JOB_CHANGED_LOGO = 'EDIT_JOB_CHANGED_LOGO';
export const EDIT_JOB_CHANGED_LOGO_BEGIN = 'EDIT_JOB_CHANGED_LOGO_BEGIN';
export const EDIT_JOB_CHANGED_LOGO_SUCCESS = 'EDIT_JOB_CHANGED_LOGO_SUCCESS';
export const EDIT_JOB_CHANGED_LOGO_FAILURE = 'EDIT_JOB_CHANGED_LOGO_FAILURE';

export const EDIT_JOB_CHANGED_POSITION = 'EDIT_JOB_CHANGED_POSITION';
export const EDIT_JOB_CHANGED_COMPANY_NAME = 'EDIT_JOB_CHANGED_COMPANY_NAME';
export const EDIT_JOB_CHANGED_COMPANY_HQ = 'EDIT_JOB_CHANGED_COMPANY_HQ';
export const EDIT_JOB_CHANGED_LOCATION_RESTRICTION =
  'EDIT_JOB_CHANGED_LOCATION_RESTRICTION';
export const EDIT_JOB_CHANGED_TAGS = 'EDIT_JOB_CHANGED_TAGS';
export const EDIT_JOB_CHANGED_DESCRIPTION = 'EDIT_JOB_CHANGED_DESCRIPTION';
export const EDIT_JOB_CHANGED_RESPONSIBILITIES =
  'EDIT_JOB_CHANGED_RESPONSIBILITIES';
export const EDIT_JOB_CHANGED_REQUIREMENTS = 'EDIT_JOB_CHANGED_REQUIREMENTS';
export const EDIT_JOB_CHANGED_NICE_TO_HAVE = 'EDIT_JOB_CHANGED_NICE_TO_HAVE';
export const EDIT_JOB_CHANGED_APPLY_LINK = 'EDIT_JOB_CHANGED_APPLY_LINK';

export const editJobCheckKeyBegin = () => ({
  type: EDIT_JOB_CHECK_KEY_BEGIN,
});

export const editJobCheckKeySuccess = (jobId, key) => ({
  type: EDIT_JOB_CHECK_KEY_SUCCESS,
  payload: { jobId, key },
});

export const editJobCheckKeyFailure = () => ({
  type: EDIT_JOB_CHECK_KEY_FAILURE,
});

export function editJobCheckKey(jobId, key) {
  return dispatch => {
    dispatch(editJobCheckKeyBegin());
    return fetch(`${API_ENDPOINT}/jobs/checkkey`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        jobId,
        key,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (!String(res.code).startsWith('2')) {
          dispatch(editJobCheckKeyFailure());
        } else {
          dispatch(editJobCheckKeySuccess(jobId, key));
        }
      })
      .catch(() => {
        dispatch(editJobCheckKeyFailure());
      });
  };
}

export const editJobChangedLogoBegin = () => ({
  type: EDIT_JOB_CHANGED_LOGO_BEGIN,
});

export const editJobChangedLogoSuccess = url => ({
  type: EDIT_JOB_CHANGED_LOGO_SUCCESS,
  payload: url,
});

export const editJobChangedLogoFailure = err => ({
  type: EDIT_JOB_CHANGED_LOGO_FAILURE,
  payload: err,
});

export function editJobChangedLogo(file) {
  return dispatch => {
    dispatch(editJobChangedLogoBegin());
    const formData = new FormData();
    formData.append('file', file);
    return fetch(`${API_ENDPOINT}/upload/logo`, {
      method: 'POST',
      body: formData,
    })
      .then(res => res.json())
      .then(data => dispatch(editJobChangedLogoSuccess(data.url)))
      .catch(err => dispatch(editJobChangedLogoFailure(err)));
  };
}

export const editJobChangedPosition = text => ({
  type: EDIT_JOB_CHANGED_POSITION,
  payload: text,
});

export const editJobChangedCompanyName = text => ({
  type: EDIT_JOB_CHANGED_COMPANY_NAME,
  payload: text,
});

export const editJobChangedCompanyHQ = text => ({
  type: EDIT_JOB_CHANGED_COMPANY_HQ,
  payload: text,
});

export const editJobChangedLocationRestriction = text => ({
  type: EDIT_JOB_CHANGED_LOCATION_RESTRICTION,
  payload: text,
});

export const editJobChangedTags = text => ({
  type: EDIT_JOB_CHANGED_TAGS,
  payload: text,
});

export const editJobChangedDescription = text => ({
  type: EDIT_JOB_CHANGED_DESCRIPTION,
  payload: text,
});

export const editJobChangedResponsibilities = text => ({
  type: EDIT_JOB_CHANGED_RESPONSIBILITIES,
  payload: text,
});

export const editJobChangedRequirements = text => ({
  type: EDIT_JOB_CHANGED_REQUIREMENTS,
  payload: text,
});

export const editJobChangedNiceToHave = text => ({
  type: EDIT_JOB_CHANGED_NICE_TO_HAVE,
  payload: text,
});

export const editJobChangedApplyLink = text => ({
  type: EDIT_JOB_CHANGED_APPLY_LINK,
  payload: text,
});
