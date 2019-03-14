import axios from 'axios';
import { axiosWithAuth } from '../helpers/axiosAuth'

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

const apiUrl = 'https://essentialism-backend.herokuapp.com/'

export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START });
    return axios
        .post(`${apiUrl}auth/login`, creds)
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
        .post(`${apiUrl}auth/register`, creds)
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
        .get(`${apiUrl}values`, {
            HEADERS: { authorization: localStorage.getItem('token') }
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
    axiosWithAuth
        .get(`${apiUrl}users/${id}`)
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

export const addValue = (id, value) => dispatch => {
    dispatch({ type: ADD_USER_VALUES_START });
    return axiosWithAuth
        .post(`${apiUrl}users/${id}/values`, value, {
            HEADERS: { authorization: localStorage.getItem('token') }
        })
        .then(res => {
            console.log(`user values res: `, res.data)
            dispatch({ type: ADD_USER_VALUES_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.log(`user values err: `, err.response)
            dispatch({ type: ADD_USER_VALUES_FAILURE, payload: err.response });
        });
};

export const UPDATE_USER_VALUES_START = 'UPDATE_USER_VALUES_START';
export const UPDATE_USER_VALUES_SUCCESS = 'UPDATE_USER_VALUES_SUCCESS';
export const UPDATE_USER_VALUES_FAILURE = 'UPDATE_USER_VALUES_FAILURE';

export const updateUserValues = (id, value) => dispatch => {
    dispatch({ type: UPDATE_USER_VALUES_START });
    return axiosWithAuth
        .put(`${apiUrl}users/${id}/values`, value, {
            HEADERS: { authorization: localStorage.getItem('token') }
        })
        .then(res => {
            console.log(`uservalues res: `, res.data)
            dispatch({ type: UPDATE_USER_VALUES_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.log(`uservalues err: `, err.response)
            dispatch({ type: UPDATE_USER_VALUES_FAILURE, payload: err.response });
        });
};

export const DELETE_USER_VALUES_START = 'DELETE_USER_VALUES_START';
export const DELETE_USER_VALUES_SUCCESS = 'DELETE_USER_VALUES_SUCCESS';
export const DELETE_USER_VALUES_FAILURE = 'DELETE_USER_VALUES_FAILURE';

export const deleteUserValues = id => dispatch => {
    dispatch({ type: DELETE_USER_VALUES_START });
    return axiosWithAuth
        .delete(`${apiUrl}users/${id}/values`, {
            headers: { authorization: localStorage.getItem('token') }
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

export const addJournal = (id, journal) => dispatch => {
    dispatch({ type: ADD_USER_JOURNAL_START });
    return axiosWithAuth
        .post(`${apiUrl}users/${id}/values`, journal, {
            HEADERS: { authorization: localStorage.getItem('token') }
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

export const UPDATE_JOURNAL_START = 'UPDATE_JOURNAL_START';
export const UPDATE_JOURNAL_SUCCESS = 'UPDATE_JOURNAL_SUCCESS';
export const UPDATE_JOURNAL_FAILURE = 'UPDATE_JOURNAL_FAILURE';

export const updateJournal = (id, journal) => dispatch => {
    dispatch({ type: UPDATE_JOURNAL_START });
    return axiosWithAuth
        .put(`${apiUrl}users/${id}/journal`, journal, {
            HEADERS: { authorization: localStorage.getItem('token') }
        })
        .then(res => {
            console.log(`user journal res: `, res.data)
            dispatch({ type: UPDATE_JOURNAL_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.log(`user journal err: `, err.response)
            dispatch({ type: UPDATE_JOURNAL_FAILURE, payload: err.response });
        });
};

export const DELETE_JOURNAL_START = 'DELETE_JOURNAL_START';
export const DELETE_JOURNAL_SUCCESS = 'DELETE_JOURNAL_SUCCESS';
export const DELETE_JOURNAL_FAILURE = 'DELETE_JOURNAL_FAILURE';

export const deleteJournal = id => dispatch => {
    dispatch({ type: UPDATE_JOURNAL_START });
    return axiosWithAuth
        .delete(`${apiUrl}users/${id}/journal`, {
            HEADERS: { authorization: localStorage.getItem('token') }
        })
        .then(res => {
            console.log(`user journal res: `, res.data)
            dispatch({ type: UPDATE_JOURNAL_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.log(`user journal err: `, err.response)
            dispatch({ type: UPDATE_JOURNAL_FAILURE, payload: err.response });
        });
};

export const ADD_PROJECT_START = 'ADD_PROJECT_START';
export const ADD_PROJECT_SUCCESS = 'ADD_PROJECT_SUCCESS';
export const ADD_PROJECT_FAILURE = 'ADD_PROJECT_FAILURE';

export const addProject = (id, project) => dispatch => {
    dispatch({ type: ADD_PROJECT_START });
    console.log(`id: `, id)
    console.log(`project: `, project)
    return axiosWithAuth
        .post(`${apiUrl}users/${id}/projects`, project, {
            HEADERS: { authorization: localStorage.getItem('token') }
        })
        .then(res => {
            console.log(`user project res: `, res.data)
            dispatch({ type: ADD_PROJECT_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.log(`user project err: `, err.response)
            dispatch({ type: ADD_PROJECT_FAILURE, payload: err.response });
        });
};

export const UPDATE_PROJECT_START = 'UPDATE_JOURNAL_START';
export const UPDATE_PROJECT_SUCCESS = 'UPDATE_JOURNAL_SUCCESS';
export const UPDATE_PROJECT_FAILURE = 'UPDATE_JOURNAL_FAILURE';

export const updateProject = (id, project) => dispatch => {
    dispatch({ type: UPDATE_PROJECT_START });
    return axiosWithAuth
        .put(`${apiUrl}users/${id}/projects`, project, {
            HEADERS: { authorization: localStorage.getItem('token') }
        })
        .then(res => {
            console.log(`user project res: `, res.data)
            dispatch({ type: UPDATE_PROJECT_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.log(`user project err: `, err.response)
            dispatch({ type: UPDATE_PROJECT_FAILURE, payload: err.response });
        });
};

export const DELETE_PROJECT_START = 'DELETE_PROJECT_START';
export const DELETE_PROJECT_SUCCESS = 'DELETE_PROJECT_SUCCESS';
export const DELETE_PROJECT_FAILURE = 'DELETE_PROJECT_FAILURE';

export const deleteProject = (userID, projID) => dispatch => {
    dispatch({ type: DELETE_PROJECT_START });
    console.log(`userID: `, userID)
    console.log(`projID: `, projID)
    return axiosWithAuth
        .delete(`${apiUrl}users/${userID}/projects`, projID, {
            HEADERS: { authorization: localStorage.getItem('token') }
        })
        .then(res => {
            console.log(`user project res: `, res.data)
            dispatch({ type: DELETE_PROJECT_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.log(`user project err: `, err.response)
            dispatch({ type: DELETE_PROJECT_FAILURE, payload: err.response });
        });
};

//thanks for reading this far