import fetch from 'isomorphic-unfetch';
import { API_ENDPOINT } from '../../config';

export const POST_MAIL_BEGIN = 'POST_MAIL_BEGIN';
export const POST_MAIL_SUCCESS = 'POST_MAIL_SUCCESS';
export const POST_MAIL_FAILURE = 'POST_MAIL_FAILURE';

export const POST_MAIL_CHANGED_NAME = 'POST_MAIL_CHANGED_NAME';
export const POST_MAIL_CHANGED_MAIL = 'POST_MAIL_CHANGED_MAIL';
export const POST_MAIL_CHANGED_SUBJECT = 'POST_MAIL_CHANGED_SUBJECT';
export const POST_MAIL_CHANGED_MESSAGE = 'POST_MAIL_CHANGED_MESSAGE';

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
        if (!String(res.code).startsWith('2')) {
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
