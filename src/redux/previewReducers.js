/* eslint-disable import/prefer-default-export */
import {
  PREVIEW_CHANGED_LOGO,
  PREVIEW_CHANGED_POSITION,
  PREVIEW_CHANGED_COMPANY_NAME,
  PREVIEW_CHANGED_COMPANY_HQ,
  PREVIEW_CHANGED_LOCATION_RESTRICTION,
  PREVIEW_CHANGED_TAGS,
  PREVIEW_CHANGED_DESCRIPTION,
  PREVIEW_CHANGED_RESPONSIBILITIES,
  PREVIEW_CHANGED_REQUIREMENTS,
  PREVIEW_CHANGED_NICE_TO_HAVE,
  PREVIEW_CHANGED_APPLY_URL,
  PREVIEW_CHANGED_APPLY_EMAIL,
  PREVIEW_APPLY_ERROR,
} from './actions';

export const previewJob = (state = {}, action) => {
  switch (action.type) {
    case PREVIEW_CHANGED_LOGO:
      return {
        ...state,
        logo: action.payload,
        logoURL: URL.createObjectURL(action.payload),
      };
    case PREVIEW_CHANGED_POSITION:
      return { ...state, position: action.payload };
    case PREVIEW_CHANGED_COMPANY_NAME:
      return { ...state, companyName: action.payload };
    case PREVIEW_CHANGED_COMPANY_HQ:
      return { ...state, companyHQ: action.payload };
    case PREVIEW_CHANGED_LOCATION_RESTRICTION:
      return { ...state, locationRestriction: action.payload };
    case PREVIEW_CHANGED_TAGS:
      return { ...state, tags: action.payload };
    case PREVIEW_CHANGED_DESCRIPTION:
      return { ...state, jobDescription: action.payload };
    case PREVIEW_CHANGED_RESPONSIBILITIES:
      return { ...state, responsibilities: action.payload };
    case PREVIEW_CHANGED_REQUIREMENTS:
      return { ...state, requirements: action.payload };
    case PREVIEW_CHANGED_NICE_TO_HAVE:
      return { ...state, niceToHave: action.payload };
    case PREVIEW_CHANGED_APPLY_URL:
      return {
        ...state,
        applyURL: action.payload,
        applyMethod: 'URL',
      };
    case PREVIEW_CHANGED_APPLY_EMAIL:
      return {
        ...state,
        applyEmail: action.payload,
        applyMethod: 'EMAIL',
      };
    case PREVIEW_APPLY_ERROR:
      return { ...state, applyError: true };
    default:
      return state;
  }
};
