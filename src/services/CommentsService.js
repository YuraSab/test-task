import {comments} from "../dataBase/DB";

class CommentsService {
    getComments() {
        return comments
    }
}

export const commentService = new CommentsService();