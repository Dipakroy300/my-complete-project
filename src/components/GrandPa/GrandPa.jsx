
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';

const GrandPa = () => {
    return (
        <div className='border-solid border-2 border-sky-500 ms-80 mr-80 ps-40'>

            <h1 className='text-3xl ms-40' >GrandPaa</h1>
            <section className='flex gap-20'>
            <Father></Father>
            <Uncle></Uncle>
            </section>
            
        </div>
    );
};

export default GrandPa;