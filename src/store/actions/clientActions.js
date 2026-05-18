import axios from "axios";
import { toast } from "react-toastify";
import useLocalStorage from "../../utils/useLocalStorage";
import { ACCESS_TOKEN_KEY } from "../../constants/constants";

//1. adım action constant oluştur
export const SET_USER = "SET_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const SET_ROLES = "SET_ROLES";
export const SET_THEME = "SET_THEME";
export const SET_LANG = "SET_LANG";

//2. adım action creator function oluştur
export function setUser(user) {
    return {
        type: SET_USER,
        payload: user
    }
}
export function logOutUser() {
    return {
        type: LOGOUT_USER,
    }
}
export const logUser = (user) => async (dispatch, getState) => {
    const { rememberMe, ...userData } = user;

    try {
        const response = await axios.post(
            "https://workintech-fe-ecommerce.onrender.com/login",
            userData
        );
        dispatch(setUser(response.data));
        if(rememberMe) localStorage.setItem(ACCESS_TOKEN_KEY, response.data.token);
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