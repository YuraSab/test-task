import React, {useEffect} from 'react';
import {Route, Routes,} from "react-router-dom";
import ProductList from "../../pages/ProductList/ProductList";
import Main from "../../elements/Main/Main";
import ChosenItem from "../../components/ChosenItem/ChosenItem";
import EditItem from "../../components/EditItem/EditItem";
import ChosenOutlet from "../../components/ChosenItem/ChosenOutlet";

import {getProducts} from "../../redux/action-creators/Products";
import {useDispatch} from "react-redux";


const ContentOverlay = () => {


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts())
    }, []);


    return (
        <div style={{minHeight: '75vh'}}>
            <Routes>
                <Route path={'/'} element={<Main/>}>
                    <Route index element={<ProductList/>}/>
                    <Route path={':id'} element={<ChosenItem/>}/>
                    <Route path={':id/edit'} element={<EditItem/>}/>

                </Route>
            </Routes>
        </div>
    );
};

export default ContentOverlay;