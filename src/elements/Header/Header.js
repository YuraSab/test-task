import React from 'react';
import styles from "./Header.module.css";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className={styles.main}>
            <Link className={styles.link} to={'/'}>
                Products
            </Link>
        </div>
    );
};

export default Header;