import React from 'react';
import Cousin from '../Cousin/Cousin';

const Uncle = () => {
    return (
        <div className='border border-4 p-5 rounded-lg'>
           <h1>Uncle</h1>

           <div>
            <Cousin></Cousin>
           </div>
        </div>
    );
};

export default Uncle;