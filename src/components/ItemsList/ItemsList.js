import React from 'react';
import styles from "./ItemsList.module.css";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getProducts} from "../../redux/action-creators/Products";
import ItemOne from "../ItemOne/ItemOne";

const ItemsList = () => {


    const {products} = useSelector(({products: {products}}) => ({products}));

    // const db = database;
    // const dispatch = useDispatch();
    // console.log(db[1]);
    // useEffect(() => {
    //     dispatch(getProducts())
    // }, []);

    console.log('products', products);

    return (
        <div className={styles.list}>
            {
                products.map(value => {
                    return(
                        <ItemOne
                            key={value.id}
                            item={value}
                        />
                    )
                })
            }
        </div>
    );
};

export default ItemsList;