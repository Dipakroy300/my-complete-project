import React, { useState } from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import { Typography } from '@material-tailwind/react';

const Home = () => {
    const [item, setItem] = useState(false);
    console.log("Change", item);
    const [fix,setFix]=useState(false);
    // console.log('change',fix);
    return (
        <div>
            <h1 className='mt-10 text-red-600 text-3xl flex items-center justify-center'>This is my HomePage</h1>
            <div>
                <button onClick={()=>setFix(!fix)} className=' bg-red-300 px-6 text-white py-2 rounded-sm'> solution</button>
                {
                    fix ? <p>fixed</p> : <p>not fixed</p>
                }
            </div>
            <div>
                <button onClick={() => setItem(!item)} className=' bg-red-300 px-6 text-white py-2 rounded-sm'>Toggle</button>
                {
                    item ? <h1>Toggle True</h1> : <h1>Toggle False</h1>
                }
            </div>
           <div>
          
                <figure>
                <img
                    className="h-full w-full rounded-lg object-cover object-center"
                    src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
                    alt="nature image"
                />
                <Typography  as="caption" variant="small" className="mt-2 text-center font-normal">
                    Image caption
                </Typography>
                </figure>
   
           </div>

        </div>
    );
};

export default Home;