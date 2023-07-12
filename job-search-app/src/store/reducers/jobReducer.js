export const SET_JOBS_FETCHED = 'job/fetched';
export const SET_JOBS_LOADING = 'job/loading';
export const SET_JOBS_ERROR = 'job/error';
export const SET_JOB_DETAIL_FETCHED = 'jobDetail/fetched';
export const SET_JOB_DETAIL_ERROR = 'jobDetail/error';
export const SET_JOB_DETAIL_LOADING = 'jobDetail/loading';
export const SET_CLIENT_ERROR = 'client/error';

const intial_state = {
  setJobs: [],
  setDetailJob: {},
  setDetailError: null,
  setDetailLoading: false,
  setLoading: false,
  setError: null,
  setClientError: null,
};

export default function jobReducer(state = intial_state, action) {
  switch (action.type) {
    case SET_JOBS_FETCHED:
      return { ...state, setJobs: action.payload };
    case SET_JOBS_LOADING:
      return { ...state, setLoading: action.payload };
    case SET_JOBS_ERROR:
      return { ...state, setError: action.payload };
    case SET_JOB_DETAIL_FETCHED:
      return { ...state, setDetailJob: action.payload };
    case SET_JOB_DETAIL_ERROR:
      return { ...state, setDetailError: action.payload };
    case SET_JOB_DETAIL_LOADING:
      return { ...state, setDetailLoading: action.payload };
    case SET_CLIENT_ERROR:
      return { ...state, setClientError: action.payload };
    default:
      return state;
  }
}
