import products from "./Products";
import {combineReducers} from "redux";

export const reducers = combineReducers({
    products: products,
    product: products,
})