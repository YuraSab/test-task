import React, {useState} from 'react';
import styles from "./AddComment.module.css";

const AddComment = (setIsAdding) => {

    const [comment, setComment] = useState('');

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
                    <div className={styles.button}>Send</div>
                    <div className={styles.button} onClick={() => setIsAdding(false)}>Cansel</div>
                </div>
            </div>
        </div>
    );
};

export default AddComment;