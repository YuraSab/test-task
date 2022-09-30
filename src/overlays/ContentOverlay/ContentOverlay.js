import React from 'react';
import {Route, Routes,} from "react-router-dom";
import ProductList from "../../pages/ProductList/ProductList";
import Main from "../../elements/Main/Main";
import ChosenItem from "../../components/ChosenItem/ChosenItem";


const ContentOverlay = () => {
    return (
        <div style={{minHeight: '75vh'}}>
            <Routes>
                <Route path={'/'} element={<Main/>}>
                    <Route index element={<ProductList/>}/>
                    <Route path={':id'} element={<ChosenItem/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export default ContentOverlay;