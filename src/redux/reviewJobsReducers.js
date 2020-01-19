/* eslint-disable no-underscore-dangle */
/* eslint-disable import/prefer-default-export */
import {
  GET_REVIEW_JOBS_BEGIN,
  GET_REVIEW_JOBS_FAILURE,
  GET_REVIEW_JOBS_SUCCESS,
  SELECTED_REVIEW_JOB,
  CONFIRM_REVIEW_JOB_BEGIN,
  CONFIRM_REVIEW_JOB_FAILURE,
  CONFIRM_REVIEW_JOB_SUCCESS,
} from './actions';

export function reviewJobs(state = { selected: 0 }, action) {
  switch (action.type) {
    case GET_REVIEW_JOBS_BEGIN:
      return { ...state, loading: true };
    case GET_REVIEW_JOBS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case GET_REVIEW_JOBS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        success: true,
        reviewJobs: action.payload,
      };
    case SELECTED_REVIEW_JOB:
      return { ...state, selected: action.payload };
    case CONFIRM_REVIEW_JOB_BEGIN:
      return { ...state, confirmLoading: true };
    case CONFIRM_REVIEW_JOB_FAILURE:
      return { ...state, confirmLoading: false, confirmError: action.payload };
    case CONFIRM_REVIEW_JOB_SUCCESS:
      return {
        ...state,
        confirmLoading: false,
        confirmError: false,
        confirmSuccess: true,
        confirmId: action.payload,
        reviewJobs: state.reviewJobs.filter(obj => obj._id !== action.payload),
      };
    default:
      return state;
  }
}
