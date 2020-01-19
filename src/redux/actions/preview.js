import fetch from 'isomorphic-unfetch';
import { API_ENDPOINT } from '../../config';

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
export const PREVIEW_CHANGED_CONTACT_EMAIL = 'PREVIEW_CHANGED_CONTACT_EMAIL';

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

export const previewChangedContactEmail = email => ({
  type: PREVIEW_CHANGED_CONTACT_EMAIL,
  payload: email,
});
