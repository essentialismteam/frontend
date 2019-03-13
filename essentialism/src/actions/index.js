import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START });
    return axios
        .post('https://essentialism-backend.herokuapp.com/auth/login', creds)
        .then(res => {
            console.log(res.data);
            localStorage.setItem('token', res.data.token);
            dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload});
        });
};

export const FETCH_VALUES_START = 'FETCH_VALUES_START';
export const FETCH_VALUES_SUCCESS = 'FETCH_VALUES_SUCCESS';
export const FETCH_VALUES_FAILURE = 'FETCH_VALUES_FAILURE';
export const USER_UNAUTHORIZED = 'USER_UNAUTHORIZED';

export const getValues = () => dispatch => {
    dispatch({ type: FETCH_VALUES_START });
    axios
        .get('https://essentialism-backend.herokuapp.com/values', {
            HEADERS: { Authorization: localStorage.getItem('token')}
        })
        .then(res => {
            console.log(res.data);
            dispatch({ type: FETCH_VALUES_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.log(`get values: `, err.response)
            if (err.response.status === 403) {
                dispatch({ type: USER_UNAUTHORIZED, payload: err.response });
            } else {
                dispatch({ type: FETCH_VALUES_FAILURE, payload: err.response });
            }
        });
};

export const FETCH_USER_VALUES_START = 'FETCH_USER_VALUES_START';
export const FETCH_USER_VALUES_SUCCESS = 'FETCH_USER_VALUES_SUCCESS';
export const FETCH_USER_VALUES_FAILURE = 'FETCH_USER_VALUES_FAILURE';

export const getUserValues = () => dispatch => {
    dispatch({ type: FETCH_USER_VALUES_START });
    axios
        .get('https://essentialism-backend.herokuapp.com/values', {
            HEADERS: { Authorization: localStorage.getItem('token')}
        })
        .then(res => {
            dispatch({ type: FETCH_USER_VALUES_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.log(`get values: `, err.response)
            if (err.response.status === 403) {
                dispatch({ type: USER_UNAUTHORIZED, payload: err.response });
            } else {
                dispatch({ type: FETCH_USER_VALUES_FAILURE, payload: err.response });
            }
        });
};