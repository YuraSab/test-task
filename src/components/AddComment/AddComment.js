import React, {useState} from 'react';
import styles from "./AddComment.module.css";
import {useDispatch, useSelector} from "react-redux";
import {addComment} from "../../redux/action-creators/Comments";

const AddComment = ({setIsAdding, productId}) => {

    const [comment, setComment] = useState('');

    const dispatch = useDispatch();


    const {comments} = useSelector(({comments: {comments}}) => ({comments}));


    console.log(comments);
    const onAddComment = () => {

        if(comment) {
            const item = {
                id: parseInt(comments.length+1),
                productId:  parseInt(productId),
                description: comment,
                date:  Date.now().toLocaleString()
            }


            dispatch(addComment(item));
        }
    }

    return (
        <div className={styles.addForm}>
            <div className={styles.form}>
                <div className={styles.newComment}>New comment</div>
                <div className={styles.blocking}>

                        <textarea
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            className={styles.inputComment}
                            placeholder={"Write comment..."}
                        />
                </div>
                <div className={styles.buttons}>
                    <button className={styles.button} onClick={onAddComment}>Send</button>
                    <button className={styles.button} onClick={() => setIsAdding(false)}>Cansel</button>
                </div>
            </div>
        </div>
    );
};

export default AddComment;