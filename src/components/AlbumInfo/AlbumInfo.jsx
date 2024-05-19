
import { Button } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const AlbumInfo = () => {

    const [album,setAlbum]=useState([]);

     const {id}=useParams();

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/albums/${id}`)
        .then(res=>res.json())
        .then(data=>setAlbum(data))
    },[id])

    const navigate=useNavigate();

    const goBack=()=>{
        navigate(-1);
    }
    return (
        <div className='bg-deep-purple-700 text-white mt-5 p-4 mx-auto text-center rounded-xl w-[50%]'>
             <h1>id:{album?.id}</h1>
            <h1>userId:{album?.userId}</h1>
            <h1>title:{album?.title}</h1>
            <Button onClick={goBack}>Go Back</Button>
        </div>
    );
};

export default AlbumInfo;