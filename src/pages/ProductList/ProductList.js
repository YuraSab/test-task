import React, {useState} from 'react';
import ItemsList from "../../components/ItemsList/ItemsList";
import SortItems from "../../components/SortItems/SortItems";
import AddProduct from "../../components/AddProduct/AddProduct";
import styles from "./ProductList.module.css";

const ProductList = () => {


    const [onAdd, setOnAdd] = useState(false);

    return (
        <div>
            <SortItems/>
            <ItemsList/>
            <div className={styles.addProduct}>
                <button className={styles.addButton} onClick={() => setOnAdd(prevState => prevState = !prevState)}>+Add</button>
                {
                    onAdd === true ? <AddProduct onAdd={onAdd} setOnAdd={setOnAdd}/>
                        : <div></div>

                }
            </div>
        </div>
    );
};

export default ProductList;