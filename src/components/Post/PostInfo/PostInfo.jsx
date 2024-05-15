import { Button } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const PostInfo = () => {

    const [post,setPost]=useState([]);

    const {id}=useParams();

    useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res=>res.json())
    .then(data=>setPost(data))
    },[id])

    const navigate=useNavigate();

    const goBack=()=>{
        navigate(-1);
    }

    return (
        <div className='bg-green-800 mt-5 p-4 mx-auto text-center rounded-xl w-[50%]'>
           <p>ID: {post?.id}</p>
            <p>Title: {post?.title}</p>
            <p>Body: {post?.body}</p>
            <Button onClick={goBack}>Go Back</Button>
        </div>
    );
};

export default PostInfo;