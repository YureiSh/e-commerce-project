import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { ACCESS_TOKEN_KEY } from "../constants/constants";
import { setUser } from "../store/actions/clientActions";

export const useAuthVerification = () => {
    const [authLoading, setAuthLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        const token = localStorage.getItem(ACCESS_TOKEN_KEY);

        if (token) {
            axios.defaults.headers.common["Authorization"] = token;

            axios.get("https://workintech-fe-ecommerce.onrender.com/verify")
                .then((res) => {
                    dispatch(setUser(res.data));
                    const newToken = res.headers["new-token"] ?? token;
                    localStorage.setItem(ACCESS_TOKEN_KEY, newToken);
                    axios.defaults.headers.common["Authorization"] = newToken;
                })
                .catch(() => {
                    localStorage.removeItem(ACCESS_TOKEN_KEY);
                    delete axios.defaults.headers.common["Authorization"];
                })
                .finally(() => setAuthLoading(false));
        } else {
            setAuthLoading(false);
        }
    }, []);

    return { authLoading };
};