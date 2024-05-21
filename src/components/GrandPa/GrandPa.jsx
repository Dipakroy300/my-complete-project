
import { createContext } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';

export const ringContext=createContext('golden ring');

const GrandPa = () => {
    return (
        <div className='border-solid border-2 border-sky-500 ms-80 mr-80 ps-40'>

          <ringContext.Provider value='golden ring'>
          <h1 className='text-3xl ' >GrandPaa</h1>
            <section className=' '>
            <Father></Father>
            <Uncle></Uncle>
            </section>
          </ringContext.Provider>
            
        </div>
    );
};

export default GrandPa;