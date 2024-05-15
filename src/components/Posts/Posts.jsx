import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';

const Posts = () => {
  
    const [posts,setPosts]=useState([]);

    useEffect(()=>{
         fetch(`https://jsonplaceholder.typicode.com/posts`)
         .then(res=>res.json())
         .then(data=>setPosts(data))
    },[])

    return (
        <div>
            <h1 className='mt-10 text-red-600 text-3xl flex items-center justify-center'>some post i will display here</h1>

            {
                posts.map(post=> <Post 
                 key={post.id}
                 post={post}
                >all post</Post> )
            }
        </div>
    );
};

export default Posts;