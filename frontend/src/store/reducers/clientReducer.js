import { LOGOUT_USER, SET_LANG, SET_LIKED, SET_ROLES, SET_THEME, SET_USER } from "../actions/clientActions";

const initialState = {
    user: {},
    addressList: [],
    creditCards: [],
    roles: [],
    theme: "",
    language: "",
    liked: []
};

export function clientReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.payload
            }
        case LOGOUT_USER:
            return {
                ...state,
                user: initialState.user
            }
        case SET_ROLES:
            return {
                ...state,
                roles: action.payload  //might be bugfix
            }
        case SET_THEME:
            return {
                ...state,
                theme: action.payload
            }
        case SET_LANG:
            return {
                ...state,
                language: action.payload
            }
        case SET_LIKED: {
            const exists = state.liked.find(item => item.id === action.payload.id);
            if (exists) {
                return {
                    ...state,
                    liked: state.liked.filter(item => item.id !== action.payload.id)
                };
            }
            return { ...state, liked: [...state.liked, action.payload] };
        }
        default:
            return state;
    }
}