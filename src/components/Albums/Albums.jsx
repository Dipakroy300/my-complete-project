import React, { useEffect, useState } from 'react';
import Album from '../Album/Album';

const Albums = () => {

    const [albums,setAlbums]=useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/albums')
        .then(res=>res.json())
        .then(data=>setAlbums(data))
    },[])
    return (
        <div>
            <h1>some display i will display here</h1>
            {
                albums.map(album=> <Album 
                key={album.id}
                album={album}
                ></Album>)
            }
            
        </div>
    );
};

export default Albums;