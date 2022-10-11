import React, {useState} from 'react';
import styles from "./AddProduct.module.css";
import {useDispatch, useSelector} from "react-redux";
import {addProduct, editProduct} from "../../redux/action-creators/Products";

const AddProduct = ({onAdd, setOnAdd}) => {

    const [name, setName] = useState("");
    const [imgUrl, setImgUrl] = useState("");
    const [count, setCount] = useState("");
    const [width, setWidth] = useState("");
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");

    const {products} = useSelector(({products: {products}}) => ({products}));
    const dispatch = useDispatch();

    const onAddItem = () => {

        const item = {
            id: parseInt(products.length+1),
            imageUrl: `${imgUrl}`,
            name: `${name}`,
            count: `${count}`,
            size: {
                width: `${width}`,
                height: `${height}`
            },
            weight: `${weight}`,
        }


        dispatch(addProduct(item));
        // console.log("products2", products);
        setOnAdd(false);
    }



    return (
        <div className={styles.main}>
            <div className={styles.form}>
                <div className={styles.blocking}>
                    <div>Name:
                        <input
                            style={{marginLeft: 20}}
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />
                    </div>
                    <div>Image:
                        <input
                            style={{marginLeft: 20}}
                            onChange={(event) => setImgUrl(event.target.value)}
                            value={imgUrl}
                        />
                    </div>
                    <div>Count:
                        <input
                            style={{marginLeft: 20}}
                            onChange={(event) => setCount(event.target.value)}
                            value={count}
                        />
                    </div>
                    <div>Width:
                        <input
                            style={{marginLeft: 20}}
                            onChange={(event) => setWidth(event.target.value)}
                            value={width}
                        />
                    </div>
                    <div>Height:
                        <input
                            style={{marginLeft: 20}}
                            onChange={(event) => setHeight(event.target.value)}
                            value={height}
                        />
                    </div>
                    <div>Weight:
                        <input
                            style={{marginLeft: 20}}
                            onChange={(event) => setWeight(event.target.value)}
                            value={weight}
                        />
                    </div>

                    <div>
                        <button
                            onClick={() => onAddItem()}
                            style={{marginTop: 40, height: 30, width: 120, background: "lightblue"}}
                            disabled={!(name &&
                                imgUrl &&
                                count &&
                                width &&
                                height &&
                                weight)}
                        >
                            Send
                        </button>
                        <button
                            onClick={() => setOnAdd(false)}

                            style={{marginLeft: 5 ,marginTop: 40, height: 30, width: 120, background: "lightblue"}}
                        >
                            Cancel
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AddProduct;