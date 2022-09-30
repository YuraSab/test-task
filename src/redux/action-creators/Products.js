import {DELETE_PRODUCT, GET_PRODUCT_BY_ID, GET_PRODUCTS} from "../action-types";
import {productService} from "../../services/ProductService";

const pService = productService;

export const getProducts = () => ({
    type: GET_PRODUCTS,
    payload: pService.getProducts()
});


export const getProductById = (id) => ({
    type: GET_PRODUCT_BY_ID,
    payload: pService.getProductById(id)
});


export const deleteProducts = (item) => ({
    type: DELETE_PRODUCT,
    payload: item
})