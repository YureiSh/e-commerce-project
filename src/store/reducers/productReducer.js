import { SET_CATEGORIES, SET_PRODUCT_LIST, SET_TOTAL, SET_LIMIT, SET_OFFSET, SET_FILTER, SET_FETCH_STATE, SET_LOADING } from "../actions/productActions";

const initialState = {
    categories: [],
    productList: [],
    total: 1,
    limit: 25,
    offset: 0,
    filter: "",
    fetchState: "NOT_FETCHED",
    loading: false
    //{String} | "NOT_FETCHED" by default | one of "NOT_FETCHED" , "FETCHING", "FETCHED", "FAILED" fetchState muhtemelen loading yerine geçebilir?
    //filter is now a dead code, it is never used.
};


export function productReducer(state = initialState, action) {
    switch (action.type) {
        case SET_CATEGORIES:
            return {
                ...state,
                categories: action.payload
            };
        case SET_PRODUCT_LIST:
            return {
                ...state,
                productList: action.payload
            };
        case SET_TOTAL:
            return {
                ...state,
                total: action.payload
            };
        case SET_LIMIT:
            return {
                ...state,
                limit: action.payload
            };
        case SET_OFFSET:
            return {
                ...state,
                offset: action.payload
            };
        case SET_FILTER:
            return {
                ...state,
                filter: { ...state.filter, ...action.payload }
            };
        case SET_FETCH_STATE:
            return {
                ...state,
                fetchState: action.payload
            };
        case SET_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        default:
            return state;
    }
}