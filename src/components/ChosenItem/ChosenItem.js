import React, {useEffect} from 'react';
import styles from "./ChoosenItem.module.css";
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getProductById} from "../../redux/action-creators/Products";

const ChosenItem = () => {

    const {id} = useParams();
    console.log(id);
    const {product} = useSelector(({product: {product}}) => ({product}));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductById(id));
    }, []);

    console.log(product);

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
            <Link to={`edit`}>
                <div>Edit</div>
            </Link>
        </div>

    );
};

export default ChosenItem;