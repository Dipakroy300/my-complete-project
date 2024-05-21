import React, { useContext } from 'react';
import { ringContext } from '../GrandPa/GrandPa';

const Child = () => {

    const ring=useContext(ringContext);
    return (
        <div>
            <h1>child:{ring}</h1>
            <p>{ring}</p>
        </div>
    );
};

export default Child;