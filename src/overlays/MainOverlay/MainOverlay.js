import React from 'react';
import styles from "./MainOverlay.module.css";
import ContentOverlay from "../ContentOverlay/ContentOverlay";
import Header from "../../elements/Header/Header";
import Footer from "../../elements/Footer/Footer";


const MainOverlay = () => {
    return (
        <div className={styles.main}>
            <header>
                <Header/>
            </header>
            <main>
                <ContentOverlay/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
};

export default MainOverlay;