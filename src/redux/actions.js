export const PREVIEW_CHANGED_LOGO = 'PREVIEW_CHANGED_LOGO';
export const PREVIEW_CHANGED_POSITION = 'PREVIEW_CHANGED_POSITION';
export const PREVIEW_CHANGED_COMPANY_NAME = 'PREVIEW_CHANGED_COMPANY_NAME';
export const PREVIEW_CHANGED_COMPANY_HQ = 'PREVIEW_CHANGED_COMPANY_HQ';
export const PREVIEW_CHANGED_LOCATION_RESTRICTION =
  'PREVIEW_CHANGED_LOCATION_RESTRICTION';
export const PREVIEW_CHANGED_TAGS = 'PREVIEW_CHANGED_TAGS';

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