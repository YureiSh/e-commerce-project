import axios from "axios";
import { toast } from "react-toastify";
import useLocalStorage from "../../utils/useLocalStorage";
import { ACCESS_TOKEN_KEY } from "../../constants/constants";
import { BASE_URL } from "../../constants/apiConstant";

//1. adım action constant oluştur
export const SET_USER = "SET_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const SET_ROLES = "SET_ROLES";
export const SET_THEME = "SET_THEME";
export const SET_LANG = "SET_LANG";
export const SET_LIKED = "SET_LIKED";

//2. adım action creator function oluştur
export function setUser(user) {
    return {
        type: SET_USER,
        payload: user
    }
}

export const logOutUser = () => (dispatch) => {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    delete axios.defaults.headers.common["Authorization"];
    dispatch({ type: LOGOUT_USER });
};

export const logUser = (user) => async (dispatch) => {
    const { rememberMe, ...userData } = user;

    try {
        const response = await axios.post(`${BASE_URL}/login`, userData);
        const token = response.data.token;

        dispatch(setUser(response.data));

        axios.defaults.headers.common["Authorization"] = token;

        if (rememberMe) localStorage.setItem(ACCESS_TOKEN_KEY, token);

        toast.success(`Hoşgeldin ${response.data.name}`);
    } catch (error) {
        toast.error(error?.response?.data?.message || "Something went wrong");
    }
};


export function setRoles(roles) {
    return {
        type: SET_ROLES,
        payload: roles
    }
}

export function setTheme(theme) {
    return {
        type: SET_THEME,
        payload: theme
    }
}

export function setLanguage(lang) {
    return {
        type: SET_LANG,
        payload: lang
    }
}

export function setLiked(liked) {
    return {
        type: SET_LIKED,
        payload: liked
    }
}