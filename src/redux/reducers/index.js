import products from "./Products";
import comments from "./Coments";
import {combineReducers} from "redux";

export const reducers = combineReducers({
    products: products,
    product: products,
    comments: comments,
    chosenComments: comments
})