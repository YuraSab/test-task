import React from 'react';
import styles from "./SortItems.module.css";
import {useDispatch, useSelector} from "react-redux";
import {sortNameDec, sortNameINC, sortPriceHigher, sortPriceLower} from "../../redux/action-creators/Products";


const SortItems = () => {

    const {products} = useSelector(({products: {products}}) => ({products}));
    const dispatch = useDispatch();

    const sortPriceH = () => {
        dispatch(sortPriceHigher())
        console.log(`sortPriceHigher`)
    }
    const sortPriceL = () => {
        dispatch(sortPriceLower())
        console.log(`sortPriceHigher`)

    }
    const sortNameI = () => {
        dispatch(sortNameINC())
        console.log(`sortPriceHigher`)

    }
    const sortNameD = () => {
        dispatch(sortNameDec())
        console.log(`sortPriceHigher`)

    }


    return (
        <div>
            {
                products.length > 0 ?
                    (
                        <div>
                            <div className={styles.sort}>Sort</div>
                            <div className={styles.main}>

                                <button onClick={sortNameD} className={styles.button}>Name decrement</button>
                                <button onClick={sortNameI} className={styles.button}>Name increment</button>
                                <button onClick={sortPriceL} className={styles.button}>Price lower</button>
                                <button onClick={sortPriceH} className={styles.button}>Price higher</button>
                            </div>
                        </div>
                    ) : null
            }
        </div>
    );
};

export default SortItems;