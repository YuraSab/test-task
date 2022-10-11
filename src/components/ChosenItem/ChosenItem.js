import React, {useEffect} from 'react';
import styles from "./ChoosenItem.module.css";
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getProductById} from "../../redux/action-creators/Products";
import {getCommentByProductId} from "../../redux/action-creators/Comments";

const ChosenItem = () => {

    const {id} = useParams();
    // console.log(id);
    const {product, chosenComments} = useSelector(({product: {product}, chosenComments: {chosenComments}}) => ({
        product,
        chosenComments
    }));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductById(id));
        dispatch(getCommentByProductId(id));
    }, []);

    // console.log(product);

    // console.log(chosenComments)

    return (
        <div className={styles.main}>
            <div className={styles.photo}>
                <img src={`${product.imageUrl}`} alt={product.name} className={styles.image}/>
            </div>
            <div className={styles.description}>
                <div style={{fontSize: 30, paddingBottom: 20}}>{product.name}</div>
                <div style={{fontSize: 20}}>Ціна: <b>{product.count} грн</b></div>
                <div style={{fontSize: 20}}>Об'єм: <b>{product.weight}</b></div>
            </div>
            <div>
                <Link to={`edit`} className={styles.editLink}>
                    Edit
                </Link>


                <div className={styles.commentsDiv}>
                    <div className={styles.commentsTitle}>Comments:</div>
                    {
                        chosenComments.map(el => <div key={el.id}>
                            <div className={styles.commentText}>{el.description}</div>
                            <div className={styles.commentDate}>Published: {el.date} <div>Edit</div><div>Delete</div></div>
                        </div>)
                    }


                    <button className={styles.addComment}>Add comment</button>
                </div>
            </div>
        </div>


    );
};

export default ChosenItem;