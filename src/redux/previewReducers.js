/* eslint-disable import/prefer-default-export */
import {
  PREVIEW_CHANGED_LOGO,
  PREVIEW_CHANGED_POSITION,
  PREVIEW_CHANGED_COMPANY_NAME,
  PREVIEW_CHANGED_COMPANY_HQ,
  PREVIEW_CHANGED_LOCATION_RESTRICTION,
  PREVIEW_CHANGED_TAGS,
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
    default:
      return state;
  }
};
