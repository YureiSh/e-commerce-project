import axios from "axios";
import { toast } from "react-toastify";
import { BASE_URL } from "../../constants/apiConstant";

//1. adım action constant oluştur
export const SET_CATEGORIES = "SET_CATEGORIES";
export const SET_PRODUCT_LIST = "SET_PRODUCT_LIST";
export const SET_PRODUCT = "SET_PRODUCT";
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
export const fetchCategories = () => async (dispatch) => {
    try {
        const result = await axios.get(`${BASE_URL}/categories`)
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

        const result = await axios.get(`${BASE_URL}/products?${queryParams.toString()}`);

        dispatch(setProductList(result.data.content));
        dispatch(setTotal(result.data.totalElements));
    } catch (error) {
        toast.error(error?.response?.data?.message || "Something went wrong");
    } finally {
        dispatch(setLoading(false));
    }
};

export function setProduct(product) { //3 product (For the product detail page)
    return {
        type: SET_PRODUCT,
        payload: product
    }
}

export const fetchProduct = (productId) => async (dispatch) => {
    
    try {
        dispatch(setLoading(true));
        const result = await axios.get(`${BASE_URL}/products/${productId}`);
        dispatch(setProduct(result.data));
    } catch (error) {
        toast.error(error?.response?.data?.message || "Something went wrong");
    } finally{
        dispatch(setLoading(false));
    }
}

export function setTotal(total) { //4 total
    return {
        type: SET_TOTAL,
        payload: total
    }
}
export function setLimit(limit) { //5 limit
    return {
        type: SET_LIMIT,
        payload: limit
    };
}

export function setOffset(offset) { //6 offset
    return {
        type: SET_OFFSET,
        payload: offset
    };
}

export function setFilter(filter) { //7 filter
    return {
        type: SET_FILTER,
        payload: filter
    };
}

export function setFetchState(fetchState) { //8 fetch state
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