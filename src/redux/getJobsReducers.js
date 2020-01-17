/* eslint-disable import/prefer-default-export */
import { GET_JOBS_BEGIN, GET_JOBS_SUCCESS, GET_JOBS_FAILURE } from './actions';

export function getJobs(state = {}, action) {
  switch (action.type) {
    case GET_JOBS_BEGIN:
      return { ...state, loading: true };
    case GET_JOBS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case GET_JOBS_SUCCESS:
      return {
        ...state,
        loading: false,
        todayJobs: action.payload.today,
        pastWeekJobs: action.payload.pastWeek,
        pastMonthJobs: action.payload.pastMonth,
        olderJobs: action.payload.older,
        // jobs: action.payload,
      };
    default:
      return state;
  }
}
