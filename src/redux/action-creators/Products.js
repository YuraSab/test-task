import {
    DELETE_PRODUCT, EDIT_PRODUCT,
    GET_PRODUCT_BY_ID,
    GET_PRODUCTS,
    SORT_NAME_DEC,
    SORT_NAME_INC,
    SORT_PRICE_HIGHER, SORT_PRICE_LOWER
} from "../action-types";
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
});


export const sortNameDec = () => ({
    type: SORT_NAME_DEC,
});

export const sortNameINC = () => ({
    type: SORT_NAME_INC,
});

export const sortPriceHigher = () => ({
    type: SORT_PRICE_HIGHER,
});

export const sortPriceLower = () => ({
    type: SORT_PRICE_LOWER,
});

export const editProduct = (item, id) => ({
    type: EDIT_PRODUCT,
    payload: {item, id}
})