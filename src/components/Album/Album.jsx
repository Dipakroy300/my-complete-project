import { Button } from '@material-tailwind/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Album = ({album}) => {

    const {id,userId,title}=album;

    const navigate=useNavigate();

    const navigateHandler=()=>{
        navigate(`/albumInfo/${id}`);
    }
    return (
        <div className='bg-deep-purple-700 text-white mt-5 p-4 mx-auto text-center rounded-xl w-[50%]'>
            
            <h1>id:{id}</h1>
            <h1>userId:{userId}</h1>
            <h1>title:{title}</h1>
            <Button onClick={navigateHandler} >More</Button>
        </div>
    );
};

export default Album;