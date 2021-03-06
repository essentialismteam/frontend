

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
    UPDATE_USER_VALUES_START,
    UPDATE_USER_VALUES_SUCCESS,
    UPDATE_USER_VALUES_FAILURE,
    DELETE_USER_VALUES_FAILURE,
    DELETE_USER_VALUES_START,
    DELETE_USER_VALUES_SUCCESS,
    ADD_USER_JOURNAL_FAILURE,
    ADD_USER_JOURNAL_START,
    ADD_USER_JOURNAL_SUCCESS,
    UPDATE_JOURNAL_FAILURE,
    UPDATE_JOURNAL_START,
    UPDATE_JOURNAL_SUCCESS,
    DELETE_JOURNAL_FAILURE,
    DELETE_JOURNAL_START,
    DELETE_JOURNAL_SUCCESS,
    ADD_PROJECT_FAILURE,
    ADD_PROJECT_START,
    ADD_PROJECT_SUCCESS,
    UPDATE_PROJECT_FAILURE,
    UPDATE_PROJECT_START,
    UPDATE_PROJECT_SUCCESS,
    DELETE_PROJECT_FAILURE,
    DELETE_PROJECT_START,
    DELETE_PROJECT_SUCCESS
} from '../actions'

const initialState = {
    loggingIn: false,
    signingUp: false,
    token: localStorage.getItem('token'),
    errorStatusCode: null,
    error: '',
    adding: false,
    fetching: false,
    updating: false,
    deleting: false,
    values: [],
    userInfo: {
        projects: [],
        values: [],
        journal: []
    },
    userValue: {},
    userJournal: {},
    userProject: []
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
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                error: action.payload.data.error,
                errorStatusCode: action.payload.status,
                loggingIn: false
            };
        case SIGNUP_START:
            return {
                ...state,
                signingUp: true
            };
        case SIGNUP_SUCCESS:
            return {
                ...state,
                signingUp: false
            };
        case SIGNUP_FAILURE:
            return {
                ...state,
                error: action.payload.data.error,
                errorStatusCode: action.payload.status,
                signingIn: false
            };
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
            };
        case FETCH_VALUES_FAILURE:
            return {
                ...state,
                error: action.payload.data.error,
                errorStatusCode: action.payload.status,
                fetching: false
            };
        case FETCH_USER_INFO_START:
            return {
                ...state,
                fetching: true
            };
        case FETCH_USER_INFO_SUCCESS:
            return {
                ...state,
                fetching: false,
                userInfo: action.payload
            };
        case FETCH_USER_INFO_FAILURE:
            return {
                ...state,
                error: action.payload.data.error,
                errorStatusCode: action.payload.status,
                fetching: false
            };
        case UPDATE_USER_VALUES_START:
            return {
                ...state,
                updating: true
            };
        case UPDATE_USER_VALUES_SUCCESS:
            return {
                ...state,
                updating: false,
                userValues: action.payload
            };
        case UPDATE_USER_VALUES_FAILURE:
            return {
                ...state,
                error: action.payload.data.error,
                errorStatusCode: action.payload.status,
                updating: false
            };
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
            };
        case DELETE_USER_VALUES_FAILURE:
            return {
                ...state,
                deleting: false,
                error: ''
            };
        case ADD_USER_JOURNAL_START:
            return {
                ...state,
                upda: true
            }
        case ADD_USER_JOURNAL_SUCCESS:
            return {
                ...state,
                fetching: false,
                userValues: action.payload
            }
        case ADD_USER_JOURNAL_FAILURE:
            return {
                ...state,
                error: action.payload.data.error,
                errorStatusCode: action.payload.status,
                fetching: false
            }
        case UPDATE_JOURNAL_START:
            return {
                ...state,
                updating: true
            }
        case UPDATE_JOURNAL_SUCCESS:
            return {
                ...state,
                updating: false,
                userValues: action.payload
            }
        case UPDATE_JOURNAL_FAILURE:
            return {
                ...state,
                error: action.payload.data.error,
                errorStatusCode: action.payload.status,
                updating: false
            }
        case DELETE_JOURNAL_START:
            return {
                ...state,
                deleting: true
            };
        case DELETE_JOURNAL_SUCCESS:
            return {
                ...state,
                deleting: false,
                error: '',
                message: action.payload
            }
        case DELETE_JOURNAL_FAILURE:
            return {
                ...state,
                deleting: false,
                error: ''
            }
        case ADD_PROJECT_START:
            return {
                ...state,
                fetching: true
            }
        case ADD_PROJECT_SUCCESS:
            return {
                ...state,
                fetching: false,
                userInfo: {
                    ...state.userInfo,
                    project: [
                        ...state.userInfo.projects,
                        action.payload
                    ]
                }
            }
        case ADD_PROJECT_FAILURE:
            return {
                ...state,
                error: action.payload.data.error,
                errorStatusCode: action.payload.status,
                fetching: false
            }
        case UPDATE_PROJECT_START:
            return {
                ...state,
                updating: true
            }
        case UPDATE_PROJECT_SUCCESS:
            return {
                ...state,
                updating: false,
                userValues: action.payload
            }
        case UPDATE_PROJECT_FAILURE:
            return {
                ...state,
                error: action.payload.data.error,
                errorStatusCode: action.payload.status,
                updating: false
            }
        case DELETE_PROJECT_START:
            return {
                ...state,
                deleting: true
            };
        case DELETE_PROJECT_SUCCESS:
            return {
                ...state,
                deleting: false,
                error: '',
                message: action.payload
            }
        case DELETE_PROJECT_FAILURE:
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