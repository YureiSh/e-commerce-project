import { ADD_ADDRESS, ADD_PAYMENT, CHANGE_ADDRESS, CHANGE_PAYMENT, DECREASE_CART, INCREASE_CART, REMOVE_ADDRESS, REMOVE_CART, REMOVE_PAYMENT, RESET_CART, SET_ADDRESS, SET_CART, SET_ORDER, SET_ORDER_ADDRESS, SET_ORDER_PAYMENT, SET_ORDER_PRODUCTS, SET_PAYMENT, TOGGLE_CHECK_CART } from "../actions/shoppingCartActions";

const initialState = {
    cart: [],
    payment: [],
    address: [],
    order: {}
};

export function shoppingCartReducer(state = initialState, action) {
    switch (action.type) {
        case SET_CART: {
            const exists = state.cart.find(item => item.product.id === action.payload.product.id);
            if (exists) {
                return {
                    ...state,
                    cart: state.cart.map(item =>
                        item.product.id === action.payload.product.id
                            ? { ...item, count: item.count + 1 }
                            : item
                    )
                };
            }
            return { ...state, cart: [...state.cart, action.payload] };
        }
        case RESET_CART:
            return initialState;
        /*Payment cases*/
        case SET_PAYMENT:
            return {
                ...state,
                payment: action.payload
            }
        case ADD_PAYMENT:
            return {
                ...state,
                payment: [...state.payment, action.payload]
            }
        case CHANGE_PAYMENT:
            return {
                ...state,
                payment: state.payment.map((a) =>
                    a.id === action.payload.id ? action.payload : a
                )
            }
        case REMOVE_PAYMENT:
            return {
                ...state,
                payment: state.payment.filter((a) => a.id !== action.payload)
            }
        /*Address Cases*/
        case SET_ADDRESS:
            return {
                ...state,
                address: action.payload
            }
        case ADD_ADDRESS:
            return {
                ...state,
                address: [...state.address, action.payload]
            }
        case CHANGE_ADDRESS:
            return {
                ...state,
                address: state.address.map((a) =>
                    a.id === action.payload.id ? action.payload : a
                )
            }
        case REMOVE_ADDRESS:
            return {
                ...state,
                address: state.address.filter((a) => a.id !== action.payload)
            }
        /*Cart cases*/
        case INCREASE_CART: {
            return {
                ...state,
                cart: state.cart
                    .map(item => item.product.id === action.payload
                        ? { ...item, count: item.count + 1 }
                        : item
                    )
                    .filter(item => item.count > 0)
            };
        } case DECREASE_CART: {
            return {
                ...state,
                cart: state.cart
                    .map(item => item.product.id === action.payload
                        ? { ...item, count: item.count - 1 }
                        : item
                    )
                    .filter(item => item.count > 0)
            };
        } case REMOVE_CART: {
            return {
                ...state,
                cart: state.cart.filter(
                    item => item.product.id !== action.payload
                )
            };
        } case TOGGLE_CHECK_CART: {
            return {
                ...state,
                cart: state.cart.map(item => item.product.id === action.payload
                    ? { ...item, checked: !item.checked } : item
                )
            }
        }
        case SET_ORDER: {
            return {
                ...state,
                order: action.payload
            }
        }
        case SET_ORDER_ADDRESS: {
            const addressData = action.payload || {};
            return {
                ...state,
                order: {
                    ...state.order,
                    name: addressData.name ?? state.order.name,
                    surname: addressData.surname ?? state.order.surname,
                    phone: addressData.phone ?? state.order.phone,
                    city: addressData.city ?? state.order.city,
                    district: addressData.district ?? state.order.district,
                    neighborhood: addressData.neighborhood ?? state.order.neighborhood,
                }
            };
        }
        case SET_ORDER_PAYMENT: {
            return {
                ...state,
                order: {
                    ...state.order,
                    lastFour: action.payload.lastFour,
                    nameOnCard: action.payload.nameOnCard,
                    expireMonth: action.payload.expireMonth,
                    expireYear: action.payload.expireYear
                }
            };
        }
        case SET_ORDER_PRODUCTS: {
            return {
                ...state,
                order: {
                    ...state.order,
                    price: action.payload.price,
                    products: action.payload.products
                }
            };
        }

        default:
            return state;
    }
}
//(prev) => prev.filter((item) => )