import ReactGA from 'react-ga';
import { DOMAIN, GA_ID } from './config';

export const toBase64 = file =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });

export function timeDifference(current, previous) {
  const msPerMinute = 60 * 1000;
  const msPerHour = msPerMinute * 60;
  const msPerDay = msPerHour * 24;
  const msPerMonth = msPerDay * 30;
  const msPerYear = msPerDay * 365;

  const elapsed = current - previous;

  if (elapsed < msPerMinute) {
    return `${Math.round(elapsed / 1000)}s`;
  }

  if (elapsed < msPerHour) {
    return `${Math.round(elapsed / msPerMinute)}min`;
  }

  if (elapsed < msPerDay) {
    return `${Math.round(elapsed / msPerHour)}h`;
  }

  if (elapsed < msPerMonth) {
    return `${Math.round(elapsed / msPerDay)}d`;
  }

  if (elapsed < msPerYear) {
    return `${Math.round(elapsed / msPerMonth)}m`;
  }

  if (!Number.isNaN(Math.round(elapsed / msPerYear))) {
    return `${Math.round(elapsed / msPerYear)}y`;
  }

  return '';
}

export function setSessionCookie(name, value) {
  const expires = `; expires=0`;
  document.cookie = `${name}=${value ||
    ''}${expires}; path=/; domain=.${DOMAIN};`;
}

export const initGA = () => {
  console.log('GA init')
  ReactGA.initialize(GA_ID);
};

export const logPageView = () => {
  console.log(`Logging pageview for ${window.location.pathname}`)
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

export const logEvent = (category = '', action = '') => {
  if (category && action) {
    ReactGA.event({ category, action });
  }
};

export const logException = (description = '', fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal });
  }
};
