/* eslint-disable import/prefer-default-export */
import {
  POST_MAIL_FAILURE,
  POST_MAIL_BEGIN,
  POST_MAIL_SUCCESS,
  POST_MAIL_CHANGED_NAME,
  POST_MAIL_CHANGED_MAIL,
  POST_MAIL_CHANGED_SUBJECT,
  POST_MAIL_CHANGED_MESSAGE,
} from './actions';

export function postMail(state = {}, action) {
  switch (action.type) {
    case POST_MAIL_BEGIN:
      return { ...state, loading: true };
    case POST_MAIL_SUCCESS:
      return { ...state, loading: false };
    case POST_MAIL_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case POST_MAIL_CHANGED_NAME:
      return { ...state, name: action.payload };
    case POST_MAIL_CHANGED_MAIL:
      return { ...state, email: action.payload };
    case POST_MAIL_CHANGED_SUBJECT:
      return { ...state, subject: action.payload };
    case POST_MAIL_CHANGED_MESSAGE:
      return { ...state, message: action.payload };
    default:
      return state;
  }
}
