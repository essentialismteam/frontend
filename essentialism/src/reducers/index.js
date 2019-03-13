import { 
    LOGIN_START,
    LOGIN_SUCCESS,
    FETCH_VALUES_FAILURE,
    FETCH_VALUES_START,
    FETCH_VALUES_SUCCESS,
    USER_UNAUTHORIZED
} from '../actions'

const initialState = {
    loggingIn: false,
    token: localStorage.getItem('token'),
    id: null,
    errorStatusCode: null,
    error: '',
    values: []
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
        default:
            return state;
    }
};

export default reducer;