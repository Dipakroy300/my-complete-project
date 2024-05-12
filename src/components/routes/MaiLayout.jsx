import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const MaiLayout = () => {
    return (
        <div>
            <Header />
            <Outlet />

        </div>
    );
};

export default MaiLayout;