
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';

const GrandPa = () => {
    return (
        <div className='border-solid border-2 border-sky-500 ms-80 mr-80 ps-40'>

            <h1 className='text-2xl ms-36'>GrandPaa</h1>
            <section className='ms-32 text-2xl flex gap-10 mt-10'>
            <Father></Father>
            <Uncle></Uncle>
            </section>
            
        </div>
    );
};

export default GrandPa;