import { USER_ERROR, USER_TOKEN } from '../reducers/userReducer';
const baseUrl = 'http://localhost:3000';

export const userToken = (payload) => {
  return { type: USER_TOKEN, payload };
};

export const userError = (payload) => {
  return { type: USER_ERROR, payload };
};

export const userSignIn = (payload) => {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      fetch(`${baseUrl}/sign-in`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })
        .then((res) => {
          if (!res.ok) throw new Error('Cannot Request Data From Server');
          return res.json();
        })
        .then((data) => {
          dispatch(userToken(data.access_token));
          localStorage.setItem('access_token', data.access_token);
          resolve();
        })
        .catch((err) => {
          dispatch(userError(err.message));
          reject();
        });
    });
  };
};
