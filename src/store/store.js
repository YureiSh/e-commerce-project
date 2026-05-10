import { legacy_createStore as createStore } from "redux";
import { settingsReducer } from "./reducers/settingsReducer";

export const store = createStore(settingsReducer); 