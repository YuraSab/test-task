import {commentService} from "../../services/CommentsService";
import {ADD_COMMENT, DELETE_COMMENT, EDIT_COMMENT, GET_COMMENTS, GET_COMMENTS_BY_PRODUCT_ID} from "../action-types";


const cService = commentService;

export const getComments = () => ({
   type: GET_COMMENTS,
   payload: cService.getComments()
});

export const addComment = (comment) => ({
    type: ADD_COMMENT,
    payload: comment
});

export const editComment = (comment) => ({
    type: EDIT_COMMENT,
    payload: comment
});

export const deleteComment = (id) => ({
    type: DELETE_COMMENT,
    payload: id
});

export const getCommentByProductId = (id) => ({
    type: GET_COMMENTS_BY_PRODUCT_ID,
    payload: id
});