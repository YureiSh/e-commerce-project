import axios from "axios";
import { toast } from "react-toastify";
import { BASE_URL } from "../../constants/apiConstant";

// actions.js
export const SET_CART = "SET_CART";
export const RESET_CART = "RESET_CART";

export const SET_PAYMENT = "SET_PAYMENT";
export const ADD_PAYMENT = "ADD_PAYMENT";
export const CHANGE_PAYMENT = "CHANGE_PAYMENT";
export const REMOVE_PAYMENT = "REMOVE_PAYMENT";

export const SET_ADDRESS = "SET_ADDRESS";
export const ADD_ADDRESS = "ADD_ADDRESS";
export const CHANGE_ADDRESS = "CHANGE_ADDRESS";
export const REMOVE_ADDRESS = "REMOVE_ADDRESS";

export const INCREASE_CART = "INCREASE_CART";
export const DECREASE_CART = "DECREASE_CART";
export const REMOVE_CART = "REMOVE_CART";
export const TOGGLE_CHECK_CART = "TOGGLE_CHECK_CART";

export const SET_ORDER = "SET_ORDER";
export const SET_ORDER_ADDRESS = "SET_ORDER_ADDRESS";
export const SET_ORDER_PAYMENT = "SET_ORDER_PAYMENT";
export const SET_ORDER_PRODUCTS = "SET_ORDER_PRODUCTS";

export function setCart(cart) {
    const { count, checked, product } = cart;
    return {
        type: SET_CART,
        payload: { count, checked, product }
    }
}
export function resetCart() {
    return {
        type: RESET_CART
    }
}

/*Payment functions*/
export function setPayment(payment) {
    return {
        type: SET_PAYMENT,
        payload: payment
    }
}

export function addPayment(payment) {
    return {
        type: ADD_PAYMENT,
        payload: payment
    }
}
export function changePayment(payment) {
    return {
        type: CHANGE_PAYMENT,
        payload: payment
    }
}
export function removePayment(payment) {
    return {
        type: REMOVE_PAYMENT,
        payload: payment
    }
}

export const fetchPayments = () => async (dispatch, getState) => {
    try {
        const result = await axios.get(`${BASE_URL}/user/card`);
        console.log("result bu:" + result);
        dispatch(setPayment(result.data));
    } catch (error) {
        toast.error(error?.response?.data?.message || "Something went wrong");
    }
}

export const newPayment = (payment) => async (dispatch, getState) => {
    try {
        const result = await axios.post(`${BASE_URL}/user/card`, payment);
        console.log("result bu:" + result);
        dispatch(addPayment(result.data));
    } catch (error) {
        toast.error(error?.response?.data?.message || "Something went wrong");
    }
}
export const updatePayment = (payment) => async (dispatch, getState) => {
    try {
        const result = await axios.put(`${BASE_URL}/user/card/${payment.id}`, payment);
        console.log("result bu:" + result);
        dispatch(changePayment(result.data));
    } catch (error) {
        toast.error(error?.response?.data?.message || "Something went wrong");
    }
}
export const deletePayment = (cardId) => async (dispatch, getState) => {
    try {
        const result = await axios.delete(`${BASE_URL}/user/card/${cardId}`);
        console.log("result bu:" + result);
        dispatch(removePayment(cardId));
    } catch (error) {
        toast.error(error?.response?.data?.message || "Something went wrong");
    }
}

/*Address functions*/
export function setAddress(address) {
    return {
        type: SET_ADDRESS,
        payload: address
    }
}
export function addAddress(address) {
    return {
        type: ADD_ADDRESS,
        payload: address
    }
}
export function changeAddress(address) {
    return {
        type: CHANGE_ADDRESS,
        payload: address
    }
}
export function removeAddress(address) {
    return {
        type: REMOVE_ADDRESS,
        payload: address
    }
}


export const fetchAddresses = () => async (dispatch, getState) => {
    try {
        const result = await axios.get(`${BASE_URL}/user/address`);
        console.log("result bu:" + result);
        dispatch(setAddress(result.data));
    } catch (error) {
        toast.error(error?.response?.data?.message || "Something went wrong");
    }
}

export const newAddress = (address) => async (dispatch, getState) => {
    try {
        const result = await axios.post(`${BASE_URL}/user/address`, address);
        console.log("result bu:" + result);
        dispatch(addAddress(result.data));
    } catch (error) {
        toast.error(error?.response?.data?.message || "Something went wrong");
    }
}
export const updateAddress = (address) => async (dispatch, getState) => {
    try {
        const result = await axios.put(`${BASE_URL}/user/address/${address.id}`, address); ///${address.addressId}
        console.log("result bu:" + result);
        dispatch(changeAddress(result.data));
    } catch (error) {
        toast.error(error?.response?.data?.message || "Something went wrong");
    }
}
export const deleteAddress = (addressId) => async (dispatch, getState) => {
    try {
        const result = await axios.delete(`${BASE_URL}/user/address/${addressId}`);
        console.log("result bu:" + result);
        dispatch(removeAddress(addressId));
    } catch (error) {
        toast.error(error?.response?.data?.message || "Something went wrong");
    }
}


export function increaseCart(productId) {
    return {
        type: INCREASE_CART,
        payload: productId
    }

} export function decreaseCart(productId) {
    return {
        type: DECREASE_CART,
        payload: productId
    }
}
export function removeCart(productId) {
    return {
        type: REMOVE_CART,
        payload: productId
    }
}
export function toggleCheckCart(productId) {
    return {
        type: TOGGLE_CHECK_CART,
        payload: productId
    }
}

/*Order functions*/
export function setOrder(order) {
    return {
        type: SET_ORDER,
        payload: order
    }
}

export function setOrderAddress(addrObj) {
    return {
        type: SET_ORDER_ADDRESS,
        payload: addrObj
    }
}
export function setOrderPayment(pymnt) {
    return {
        type: SET_ORDER_PAYMENT,
        payload: pymnt
    }
}
export function setOrderProducts(products) {
    return {
        type: SET_ORDER_PRODUCTS,
        payload: products
    }
}

export const createOrder = (order) => async (dispatch, getState) => {
    try {
        const result = await axios.post(`${BASE_URL}/order`, order);
        return result.data;  
    } catch (error) {
        toast.error(error?.response?.data?.message || "Something went wrong");
        throw error;
    }
}