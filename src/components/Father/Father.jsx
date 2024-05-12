import React from 'react';
import Child from '../Child/Child';
import Daughter from '../Child/Daughter';

const Father = () => {
    return (
        <div >
            <h1>Father</h1>
           <section className='ms-6 flex gap-5'>
                <Child></Child>
                <Daughter></Daughter>
           </section>
        </div>
    );
};

export default Father;