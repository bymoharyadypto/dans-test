export const USER = 'user/fetched';
export const USER_LOADING = 'user/loading';
export const USER_ERROR = 'user/error';
export const USER_TOKEN = 'user/token';

const initialState = {
  user: {},
  userToken: '',
  userLoading: false,
  userError: null,
};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case USER:
      return { ...state, user: action.payload };
    case USER_LOADING:
      return { ...state, userLoading: action.payload };
    case USER_ERROR:
      return { ...state, userError: action.payload };
    case USER_TOKEN:
      return { ...state, userToken: action.payload };
    default:
      return state;
  }
}
