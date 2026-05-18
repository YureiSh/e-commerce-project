import axios from "axios";
import { toast } from "react-toastify";

//1. adım action constant oluştur
export const SET_CATEGORIES = "SET_CATEGORIES";
export const SET_PRODUCT_LIST = "SET_PRODUCT_LIST";
export const SET_TOTAL = "SET_TOTAL";
export const SET_LIMIT = "SET_LIMIT";
export const SET_OFFSET = "SET_OFFSET";
export const SET_FILTER = "SET_FILTER";
export const SET_FETCH_STATE = "SET_FETCH_STATE";

//extra
export const SET_LOADING = "SET_LOADING";

//2. adım action creator function oluştur
export function setCategories(categories) { //1 categories
    return {
        type: SET_CATEGORIES,
        payload: categories
    }
}
export const fetchCategories = () => async (dispatch, getState) => {
    try {
        const result = await axios.get("https://workintech-fe-ecommerce.onrender.com/categories")
        dispatch(setCategories(result.data));
    } catch (error) {
        toast.error(error?.response?.data?.message || "Something went wrong");
    }
}
export function setProductList(productList) { //2 product list
    return {
        type: SET_PRODUCT_LIST,
        payload: productList
    }
}
export const fetchProducts = (params) => async (dispatch) => {
    try {
        dispatch(setLoading(true));
        const queryParams = new URLSearchParams();

        if (params.category) queryParams.append("category", params.category);
        if (params.sort) queryParams.append("sort", params.sort);
        if (params.filter) queryParams.append("filter", params.filter);
        if (params.limit) queryParams.append("limit",params.limit);
        if (params.offset) queryParams.append("offset",params.offset);

        const result = await axios.get(`https://workintech-fe-ecommerce.onrender.com/products?${queryParams.toString()}`);

        dispatch(setProductList(result.data.products));
        dispatch(setTotal(result.data.total));
    } catch (error) {
        toast.error(error?.response?.data?.message || "Something went wrong");
    } finally {
        dispatch(setLoading(false));
    }
};

export function setTotal(total) { //3 total
    return {
        type: SET_TOTAL,
        payload: total
    }
}
export function setLimit(limit) { //4 limit
    return {
        type: SET_LIMIT,
        payload: limit
    };
}

export function setOffset(offset) { //5 offset
    return {
        type: SET_OFFSET,
        payload: offset
    };
}

export function setFilter(filter) { //6 filter
    return {
        type: SET_FILTER,
        payload: filter
    };
}

export function setFetchState(fetchState) { //7 fetch state
    return {
        type: SET_FETCH_STATE,
        payload: fetchState
    };
}

//Extra

export function setLoading(bool) {
    return {
        type: SET_LOADING,
        payload: bool
    }
}