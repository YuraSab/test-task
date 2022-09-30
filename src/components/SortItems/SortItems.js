import React from 'react';
import styles from "./SortItems.module.css";
import {useSelector} from "react-redux";


const SortItems = () => {

    const {products} = useSelector(({products: {products}}) => ({products}));

    return (
        <div>
            {
                products.length > 0 ?
                    (
                        <div>
                            <div className={styles.sort}>Sort</div>
                            <div className={styles.main}>

                                <button className={styles.button}>Name decrement</button>
                                <button className={styles.button}>Name increment</button>
                                <button className={styles.button}>Price lower</button>
                                <button className={styles.button}>Price higher</button>
                            </div>
                        </div>
                    ) : null
            }
        </div>
    );
};

export default SortItems;