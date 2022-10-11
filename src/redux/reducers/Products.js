import {
    ADD_PRODUCT,
    DELETE_PRODUCT, EDIT_PRODUCT,
    GET_PRODUCT_BY_ID,
    GET_PRODUCTS,
    SORT_NAME_DEC,
    SORT_NAME_INC,
    SORT_PRICE_HIGHER,
    SORT_PRICE_LOWER
} from "../action-types";

const initialState = {
    products: [],
    product: '',
    // deletedProducts: [],
}

export default (state = initialState, action) => {
    switch (action.type){
        case GET_PRODUCTS: {
            return {
                ...state,
                products: action.payload
            }
        }
        case DELETE_PRODUCT: {
            const filtered = state.products.filter(el => el.id !== action.payload.id);
            return {
                ...state,
                products: filtered,
                // deletedProducts: action.payload
            }
        }
        case SORT_NAME_DEC: {
            const sorted = state.products.sort((a, b) => a.name.localeCompare(b.name));
            return {
                ...state,
                products: sorted
            }
        }
        case SORT_NAME_INC: {
            const sorted = state.products.sort((a, b) => b.name.localeCompare(a.name));
            return {
                ...state,
                products: sorted
            }
        }
        case SORT_PRICE_LOWER: {
            const sorted = state.products.sort(function (a, b) {
                return a.count - b.count
            });
            return {
                ...state,
                products: sorted
            }
        }
        case SORT_PRICE_HIGHER: {
            const sorted = state.products.sort(function (a, b) {
                return b.count - a.count
            });
            return {
                ...state,
                products: sorted
            }
        }
        case GET_PRODUCT_BY_ID: {
            return {
                ...state,
                product: action.payload
            }
        }

        case EDIT_PRODUCT: {
            console.log(`object` ,action.payload);
            console.log("products",state.products);
            const filtered = state.products.filter(el => el.id !== action.payload.id);

            console.log("filter", filtered);
            const pushed = [...filtered, action.payload];
            console.log(pushed);
            return {
                    ...state,
                    products: pushed
            }
        }
        case ADD_PRODUCT: {
            const added = [...state.products, action.payload];
            console.log(added);
            return {
                ...state,
                products: added
            }
        }

        default: {
            return state
        }
    }
}