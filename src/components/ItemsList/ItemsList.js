import React from 'react';
import styles from "./ItemsList.module.css";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getProducts} from "../../redux/action-creators/Products";
import ItemOne from "../ItemOne/ItemOne";

const ItemsList = () => {

    // const db = database;

    const dispatch = useDispatch();
    const {products} = useSelector(({products: {products}}) => ({products}));

    // console.log(db[1]);

    useEffect(() => {
        dispatch(getProducts())
    }, [])

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