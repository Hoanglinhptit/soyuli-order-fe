import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import ProductReducer from "./ProductReducer";
import CartReducer from "./CartReducer";

export default combineReducers({
    AuthReducer,
    ProductReducer,
    CartReducer,
})