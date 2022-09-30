import {DELETE_PRODUCT, GET_PRODUCT_BY_ID, GET_PRODUCTS} from "../action-types";

const initialState = {
    products: [],
    product: '',
    deletedProducts: []
}

export default (state = initialState, action) => {
    switch (action.type){
        case GET_PRODUCTS: {
            return {
                ...state,
                products: action.payload
            }
        }
        case GET_PRODUCT_BY_ID: {
            return {
                ...state,
                product: action.payload
            }
        }
        case DELETE_PRODUCT: {
            const filtered = state.products.filter(el => el.id !== action.payload.id);
            return {
                ...state,
                products: filtered,
                deletedProducts: action.payload
            }
        }
        // case SORT_NAME_DEC: {
        //     const sorted = state.products.sort()
        // }



        default: {
            return state
        }
    }
}