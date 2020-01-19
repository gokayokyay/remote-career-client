import fetch from 'isomorphic-unfetch';
import { API_ENDPOINT } from '../../config';

export const ADMIN_CHECK_KEY_BEGIN = 'ADMIN_CHECK_KEY_BEGIN';
export const ADMIN_CHECK_KEY_SUCCESS = 'ADMIN_CHECK_KEY_SUCCESS';
export const ADMIN_CHECK_KEY_FAILURE = 'ADMIN_CHECK_KEY_FAILURE';

export const adminCheckKeyBegin = () => ({
  type: ADMIN_CHECK_KEY_BEGIN,
});

export const adminCheckKeySuccess = key => ({
  type: ADMIN_CHECK_KEY_SUCCESS,
  payload: key,
});

export const adminCheckKeyFailure = () => ({
  type: ADMIN_CHECK_KEY_FAILURE,
});

export function adminCheckKey(key) {
  return dispatch => {
    dispatch(adminCheckKeyBegin());
    return fetch(`${API_ENDPOINT}/admin/checkkey`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        credentials: 'include',
      },
      body: JSON.stringify({
        key,
      }),
    })
      .then(res => {
        return res.json();
      })
      .then(res => {
        if (!String(res.code).startsWith('2')) {
          dispatch(adminCheckKeyFailure());
        } else {
          dispatch(adminCheckKeySuccess(res.message.key));
        }
      })
      .catch(() => {
        dispatch(adminCheckKeyFailure());
      });
  };
}