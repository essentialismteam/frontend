import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START });
    return axios
        .post('https://essentialism-backend.herokuapp.com/auth/login', creds)
        .then(res => {
            console.log(`login res: `, res);
            localStorage.setItem('token', res.data.token);
            dispatch({ type: LOGIN_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.log(`get values: `, err.response);
            dispatch({ type: LOGIN_FAILURE, payload: err.response });
        });
};

export const SIGNUP_START = 'SIGNUP_START';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

export const signup = creds => dispatch => {
    dispatch({ type: SIGNUP_START });
    return axios
        .post('https://essentialism-backend.herokuapp.com/auth/register', creds)
        .then(res => {
            console.log(res.data);
            localStorage.setItem('token', res.data.token);
            dispatch({ type: SIGNUP_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log(`get values: `, err.response);
            dispatch({ type: SIGNUP_FAILURE, payload: err.response });
        });

};

export const FETCH_VALUES_START = 'FETCH_VALUES_START';
export const FETCH_VALUES_SUCCESS = 'FETCH_VALUES_SUCCESS';
export const FETCH_VALUES_FAILURE = 'FETCH_VALUES_FAILURE';

export const getValues = () => dispatch => {
    dispatch({ type: FETCH_VALUES_START });
    axios
        .get('https://essentialism-backend.herokuapp.com/values', {
            HEADERS: { Authorization: localStorage.getItem('token') }
        })
        .then(res => {
            console.log(res.data);
            dispatch({ type: FETCH_VALUES_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.log(`get values: `, err.response)
            dispatch({ type: FETCH_VALUES_FAILURE, payload: err.response });
        });
};

export const FETCH_USER_INFO_START = 'FETCH_USER_INFO_START';
export const FETCH_USER_INFO_SUCCESS = 'FETCH_USER_INFO_SUCCESS';
export const FETCH_USER_INFO_FAILURE = 'FETCH_USER_INFO_FAILURE';

export const getUserInfo = id => dispatch => {
    dispatch({ type: FETCH_USER_INFO_START });
    axios
        .get(`https://essentialism-backend.herokuapp.com/users/${id}`, {
            HEADERS: { Authorization: localStorage.getItem('token') }
        })
        .then(res => {
            console.log(`get user info: `, res.data);
            dispatch({ type: FETCH_USER_INFO_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.log(`get user info: `, err.response);
            dispatch({ type: FETCH_USER_INFO_FAILURE, payload: err.response })
        });
};

export const FETCH_USER_VALUES_START = 'FETCH_USER_VALUES_START';
export const FETCH_USER_VALUES_SUCCESS = 'FETCH_USER_VALUES_SUCCESS';
export const FETCH_USER_VALUES_FAILURE = 'FETCH_USER_VALUES_FAILURE';

export const getUserValues = id => dispatch => {
    dispatch({ type: FETCH_USER_VALUES_START });
    axios
        .get(`https://essentialism-backend.herokuapp.com/users/${id}/values`, {
            HEADERS: { Authorization: localStorage.getItem('token') }
        })
        .then(res => {
            dispatch({ type: FETCH_USER_VALUES_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.log(`get values: `, err.response)
            dispatch({ type: FETCH_USER_VALUES_FAILURE, payload: err.response });
        });
};