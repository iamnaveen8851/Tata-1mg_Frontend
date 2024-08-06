import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { avpReducer } from "./reducers/avpReducer";
import { thunk } from "redux-thunk";
import { productReducer } from "./reducers/productReducer";

const reducers = combineReducers({
  avpReducer,
  productReducer,
});
export const store = legacy_createStore(reducers, applyMiddleware(thunk));
