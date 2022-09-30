import React, {useState} from 'react';
import styles from "./ItemOne.module.css";
import deleteButton from "../../pictures/bin.png";
import {useDispatch} from "react-redux";
import {deleteProducts} from "../../redux/action-creators/Products";


const ItemOne = ({item}) => {

    const [pressedDelete, setPressedDelete] = useState(false);
    console.log(pressedDelete);
    const dispatch = useDispatch();

    const onDeleteItemHandle = (item) => {
        dispatch(deleteProducts(item));
    }

    return (
        <div className={styles.oneItem}>
            <div className={styles.title}>
                {item.name}
            </div>
            <div className={styles.image}>
                <img src={`${item.imageUrl}`} alt={item.name} className={styles.itemImg}/>
            </div>
            <div className={styles.price}>
                <div>{item.count} грн</div>
                <div>
                    {!pressedDelete ?
                        <img src={deleteButton} alt="cart"
                            // className={`${styles.cartItem} ${isActive ? styles.active : styles.noActive}`}
                             className={`${styles.cartItem} ${styles.active}`}
                             onClick={() => setPressedDelete(prevState => !prevState)}
                        /> : <div>
                            <div style={{fontSize: 18, width: "70%", paddingLeft: "15%", paddingTop: '20%'}}>
                                Are you sure?
                            </div>
                            <button
                                onClick={() => onDeleteItemHandle(item)}
                                className={`${styles.deleteButtons} ${styles.confirm}`}
                            >
                                Confirm
                            </button>
                            <button onClick={() => setPressedDelete(prevState => !prevState)}
                                    className={`${styles.deleteButtons} ${styles.cancel}`}
                            >
                                Cancel
                            </button>
                        </div>
                    }
                </div>
            </div>
            <div className={styles.description}>
                Width: {item.size.width}, Height: {item.size.height}
            </div>
        </div>
    );
};

export default ItemOne;