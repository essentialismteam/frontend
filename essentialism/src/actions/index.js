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
            localStorage.setItem('userID', res.data.id);
            dispatch({ type: LOGIN_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.log(`login err: `, err.response);
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
            console.log(`signup res: `, res.data);
            localStorage.setItem('token', res.data.token);
            dispatch({ type: SIGNUP_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log(`signup err: `, err.response);
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
            console.log(`globalvalues res: `, res.data);
            dispatch({ type: FETCH_VALUES_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.log(`globalvalues err: `, err.response)
            dispatch({ type: FETCH_VALUES_FAILURE, payload: err.response });
        });
};

export const FETCH_USER_INFO_START = 'FETCH_USER_INFO_START';
export const FETCH_USER_INFO_SUCCESS = 'FETCH_USER_INFO_SUCCESS';
export const FETCH_USER_INFO_FAILURE = 'FETCH_USER_INFO_FAILURE';

export const getUserInfo = id => dispatch => {
    dispatch({ type: FETCH_USER_INFO_START });
    console.log(id);
    axios
        .get(`https://essentialism-backend.herokuapp.com/users/${id}`)
        .then(res => {
            console.log(`userinfo res: `, res.data);
            dispatch({ type: FETCH_USER_INFO_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.log(`userinfo err: `, err.response);
            dispatch({ type: FETCH_USER_INFO_FAILURE, payload: err.response })
        });
};

export const ADD_USER_VALUES_START = 'ADD_USER_VALUES_START';
export const ADD_USER_VALUES_SUCCESS = 'ADD_USER_VALUES_SUCCESS';
export const ADD_USER_VALUES_FAILURE = 'ADD_USER_VALUES_FAILURE';

export const addUserValues = (id, value) => dispatch => {
    dispatch({ type: ADD_USER_VALUES_START });
    axios
        .post(`https://essentialism-backend.herokuapp.com/users/${id}/values`, value, {
            HEADERS: { Authorization: localStorage.getItem('token') }
        })
        .then(res => {
            console.log(`uservalues res: `, res.data)
            dispatch({ type: ADD_USER_VALUES_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.log(`uservalues err: `, err.response)
            dispatch({ type: ADD_USER_VALUES_FAILURE, payload: err.response });
        });
};

export const DELETE_USER_VALUES_START = 'DELETE_USER_VALUES_START';
export const DELETE_USER_VALUES_SUCCESS = 'DELETE_USER_VALUES_SUCCESS';
export const DELETE_USER_VALUES_FAILURE = 'DELETE_USER_VALUES_FAILURE';

export const deleteUserValues = id => dispatch => {
    dispatch({ type: DELETE_USER_VALUES_START });
    axios
        .delete(`http://localhost:5000/api/friends/${id}`, {
            headers: { Authorization: localStorage.getItem('token') }
        })
        .then(res => {
            dispatch({ type: DELETE_USER_VALUES_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.log('call failed: ', err.response);
            dispatch({ type: DELETE_USER_VALUES_FAILURE, payload: err.response });
        });
};

export const ADD_USER_JOURNAL_START = 'ADD_USER_JOURNAL_START';
export const ADD_USER_JOURNAL_SUCCESS = 'ADD_USER_JOURNAL_SUCCESS';
export const ADD_USER_JOURNAL_FAILURE = 'ADD_USER_JOURNAL_FAILURE';

export const addUserJournal = (id, journal) => dispatch => {
    dispatch({ type: ADD_USER_JOURNAL_START });
    axios
        .post(`https://essentialism-backend.herokuapp.com/users/${id}/values`, journal, {
            HEADERS: { Authorization: localStorage.getItem('token') }
        })
        .then(res => {
            console.log(`uservalues res: `, res.data)
            dispatch({ type: ADD_USER_JOURNAL_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.log(`uservalues err: `, err.response)
            dispatch({ type: ADD_USER_JOURNAL_FAILURE, payload: err.response });
        });
};