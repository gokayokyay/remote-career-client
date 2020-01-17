/* eslint-disable import/prefer-default-export */
import {
  EDIT_JOB_CHECK_KEY_BEGIN,
  EDIT_JOB_CHECK_KEY_SUCCESS,
  EDIT_JOB_CHECK_KEY_FAILURE,
  EDIT_JOB_CHANGED_LOGO_FAILURE,
  EDIT_JOB_CHANGED_LOGO_SUCCESS,
  EDIT_JOB_CHANGED_LOGO_BEGIN,
  EDIT_JOB_CHANGED_POSITION,
  EDIT_JOB_CHANGED_COMPANY_NAME,
  EDIT_JOB_CHANGED_COMPANY_HQ,
  EDIT_JOB_CHANGED_LOCATION_RESTRICTION,
  EDIT_JOB_CHANGED_TAGS,
  EDIT_JOB_CHANGED_DESCRIPTION,
  EDIT_JOB_CHANGED_RESPONSIBILITIES,
  EDIT_JOB_CHANGED_REQUIREMENTS,
  EDIT_JOB_CHANGED_NICE_TO_HAVE,
  EDIT_JOB_CHANGED_APPLY_LINK,
} from './actions';

export function editJobCheckKey(state = {}, action) {
  switch (action.type) {
    case EDIT_JOB_CHECK_KEY_BEGIN:
      return { ...state, loading: true };
    case EDIT_JOB_CHECK_KEY_FAILURE:
      return { ...state, loading: false, error: true };
    case EDIT_JOB_CHECK_KEY_SUCCESS:
      return {
        ...state,
        loading: false,
        key: action.payload.key,
        jobId: action.payload.jobId,
        success: true,
      };
    default:
      return state;
  }
}

export const editJob = (state = {}, action) => {
  switch (action.type) {
    case EDIT_JOB_CHANGED_LOGO_BEGIN:
      return { ...state, logoLoading: true };
    case EDIT_JOB_CHANGED_LOGO_SUCCESS:
      return { ...state, logoLoading: false, logoURL: action.payload };
    case EDIT_JOB_CHANGED_LOGO_FAILURE:
      return { ...state, logoLoading: false, logoError: action.payload };
    case EDIT_JOB_CHANGED_POSITION:
      return { ...state, position: action.payload };
    case EDIT_JOB_CHANGED_COMPANY_NAME:
      return { ...state, companyName: action.payload };
    case EDIT_JOB_CHANGED_COMPANY_HQ:
      return { ...state, companyHQ: action.payload };
    case EDIT_JOB_CHANGED_LOCATION_RESTRICTION:
      return { ...state, locationRestriction: action.payload };
    case EDIT_JOB_CHANGED_TAGS:
      return { ...state, tags: action.payload };
    case EDIT_JOB_CHANGED_DESCRIPTION:
      return { ...state, jobDescription: action.payload };
    case EDIT_JOB_CHANGED_RESPONSIBILITIES:
      return { ...state, responsibilities: action.payload };
    case EDIT_JOB_CHANGED_REQUIREMENTS:
      return { ...state, requirements: action.payload };
    case EDIT_JOB_CHANGED_NICE_TO_HAVE:
      return { ...state, niceToHave: action.payload };
    case EDIT_JOB_CHANGED_APPLY_LINK:
      return {
        ...state,
        applyLink: action.payload,
      };
    default:
      return state;
  }
};
