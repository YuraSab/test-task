import React from 'react';
import {Outlet} from "react-router-dom";

const ChosenOutlet = () => {
    return (
        <div>
            <Outlet/>
        </div>
    );
};

export default ChosenOutlet;