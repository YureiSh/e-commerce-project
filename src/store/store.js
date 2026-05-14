import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import { clientReducer } from "./reducers/clientReducer";
import { logger } from "redux-logger";
import { thunk } from "redux-thunk";
import { productReducer } from "./reducers/productReducer";
import { shoppingCartReducer } from "./reducers/shoppingCartReducer";

const reducers = combineReducers({
    client: clientReducer,
    product: productReducer,
    shoppingCart: shoppingCartReducer
})

export const store = createStore(reducers, applyMiddleware(thunk, logger)); 
//Potential bug: redux-thunk and redux-logger imports are probably wrong for your package versions