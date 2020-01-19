/* eslint-disable import/prefer-default-export */
import {
  ADMIN_CHECK_KEY_BEGIN,
  ADMIN_CHECK_KEY_SUCCESS,
  ADMIN_CHECK_KEY_FAILURE,
} from './actions';

export function admin(state = {}, action) {
  switch (action.type) {
    case ADMIN_CHECK_KEY_BEGIN:
      return { ...state, loading: true };
    case ADMIN_CHECK_KEY_SUCCESS:
      return {
        ...state,
        loading: false,
        key: action.payload,
        success: true,
        error: false,
      };
    case ADMIN_CHECK_KEY_FAILURE:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
}
