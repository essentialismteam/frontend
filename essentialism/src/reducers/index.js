

import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    FETCH_VALUES_FAILURE,
    FETCH_VALUES_START,
    FETCH_VALUES_SUCCESS,
    SIGNUP_START,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
    FETCH_USER_INFO_FAILURE,
    FETCH_USER_INFO_START,
    FETCH_USER_INFO_SUCCESS,
    ADD_USER_VALUES_START,
    ADD_USER_VALUES_SUCCESS,
    ADD_USER_VALUES_FAILURE,
    DELETE_USER_VALUES_FAILURE,
    DELETE_USER_VALUES_START,
    DELETE_USER_VALUES_SUCCESS
} from '../actions'

const initialState = {
    loggingIn: false,
    signingUp: false,
    token: localStorage.getItem('token'),
    errorStatusCode: null,
    error: '',
    fetching: false,
    deleting: false,
    values: [],
    userInfo: [],
    userValues: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_START:
            return {
                ...state,
                loggingIn: true
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                loggingIn: false,
                token: action.payload.token,
                id: action.payload.id
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                error: action.payload.data.error,
                errorStatusCode: action.payload.status,
                loggingIn: false
            }
        case SIGNUP_START:
            return {
                ...state,
                signingUp: true
            }
        case SIGNUP_SUCCESS:
            return {
                ...state,
                signingUp: false
            }
        case SIGNUP_FAILURE:
            return {
                ...state,
                error: action.payload.data.error,
                errorStatusCode: action.payload.status,
                signingIn: false
            }
        case FETCH_VALUES_START:
            return {
                ...state,
                fetching: true
            };
        case FETCH_VALUES_SUCCESS:
            return {
                ...state,
                errorStatusCode: null,
                fetching: false,
                values: action.payload
            }
        case FETCH_VALUES_FAILURE:
            return {
                ...state,
                error: action.payload.data.error,
                errorStatusCode: action.payload.status,
                fetching: false
            }
        case FETCH_USER_INFO_START:
            return {
                ...state,
                fetching: true
            }
        case FETCH_USER_INFO_SUCCESS:
            return {
                ...state,
                fetching: false,
                userInfo: action.payload
            }
        case FETCH_USER_INFO_FAILURE:
            return {
                ...state,
                error: action.payload.data.error,
                errorStatusCode: action.payload.status,
                fetching: false
            }
        case ADD_USER_VALUES_START:
            return {
                ...state,
                fetching: true
            }
        case ADD_USER_VALUES_SUCCESS:
            return {
                ...state,
                fetching: false,
                userValues: action.payload
            }
        case ADD_USER_VALUES_FAILURE:
            return {
                ...state,
                error: action.payload.data.error,
                errorStatusCode: action.payload.status,
                fetching: false
            }
        case DELETE_USER_VALUES_START:
            return {
                ...state,
                deleting: true
            };
        case DELETE_USER_VALUES_SUCCESS:
            return {
                ...state,
                deleting: false,
                error: '',
                message: action.payload
            }
        case DELETE_USER_VALUES_FAILURE:
            return {
                ...state,
                deleting: false,
                error: ''
            }
        default:
            return state;
    }
};

export default reducer;