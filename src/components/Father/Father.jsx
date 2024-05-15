import React from 'react';
import Child from '../Child/Child';
import Daughter from '../Child/Daughter';

const Father = () => {
    return (
        <div className='bg-amber-900 p-5 rounded-lg' >
            <h1>Father</h1>
           <section className=' flex gap-5'>
                <Child></Child>
                <Daughter></Daughter>
           </section>
        </div>
    );
};

export default Father;