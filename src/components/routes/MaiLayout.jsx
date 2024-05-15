import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import { Toaster } from 'react-hot-toast';

const MaiLayout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Toaster></Toaster>

        </div>
    );
};

export default MaiLayout;