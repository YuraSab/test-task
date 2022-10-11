import {ADD_COMMENT, DELETE_COMMENT, EDIT_COMMENT, GET_COMMENTS, GET_COMMENTS_BY_PRODUCT_ID} from "../action-types";

const initialState = {
    comments: [],
    chosenComments: []
}

export default (state = initialState, action) => {
    switch(action.type) {

        case GET_COMMENTS: {
            return {
                ...state,
                comments: action.payload
            }
        }
        case GET_COMMENTS_BY_PRODUCT_ID: {
            const byId = state.comments.filter(el => el.productId == action.payload);
            return {
                ...state,
                chosenComments: byId
            }
        }
        case EDIT_COMMENT: {
            const edit = state.comments.filter(el => el.id !== action.payload.id);
            const edited = [...edit, action.payload];
            return {
                ...state,
                comments: edited
            }
        }
        case ADD_COMMENT: {
            const add = [...state.comments, action.payload];
            return {
                ...state,
                comments: add
            }
        }
        case DELETE_COMMENT: {
            const deleted = state.comments.filter(el => el.id !== action.payload);
            return {
                ...state,
                comments: deleted
            }
        }

        default: {
            return state
        }

    }


}