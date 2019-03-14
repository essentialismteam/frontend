

import {
    LOGIN_START,
    LOGIN_SUCCESS,
    FETCH_VALUES_FAILURE,
    FETCH_VALUES_START,
    FETCH_VALUES_SUCCESS,
    SIGNUP_START,
    SIGNUP_SUCCESS,
    USER_UNAUTHORIZED,
    FETCH_USER_VALUES_START,
    FETCH_USER_VALUES_SUCCESS,
    FETCH_USER_VALUES_FAILURE,
    LOGIN_FAILURE,
    SIGNUP_FAILURE
} from '../actions'

const initialState = {
    loggingIn: false,
    signingUp: false,
    token: localStorage.getItem('token'),
    id: null,
    errorStatusCode: null,
    error: '',
    fetchingValues: false,
    values: [],
    fetchingUserValues: false,
    userValues: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_UNAUTHORIZED:
            return {
                ...state,
                error: action.payload.data.error,
                errorStatusCode: action.payload.status,
                fetchingValues: false
            }
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
                fetchingValues: true
            };
        case FETCH_VALUES_SUCCESS:
            return {
                ...state,
                errorStatusCode: null,
                fetchingValues: false,
                values: action.payload
            }
        case FETCH_VALUES_FAILURE:
            return {
                ...state,
                error: action.payload.data.error,
                errorStatusCode: action.payload.status,
                fetchingValues: false
            }
        case FETCH_USER_VALUES_START:
            return {
                ...state,
                fetchingUserValues: true
            }
        case FETCH_USER_VALUES_SUCCESS:
            return {
                ...state,
                fetchingUserValues: false,
                userValues: action.payload
            }
        case FETCH_USER_VALUES_FAILURE:
            return {
                ...state,
                error: action.payload.data.error,
                errorStatusCode: action.payload.status,
                fetchingValues: false
            }
        default:
            return state;
    }
};

export default reducer;