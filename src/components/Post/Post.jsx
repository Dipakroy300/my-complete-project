import React from 'react';
import { Button } from "@material-tailwind/react";
import { useNavigate} from 'react-router-dom';

const Post = ({ post }) => {
    const navigate = useNavigate();
    const { id } = post;

    const navigateHandler = () => {
        navigate(`/postInfo/${id}`);
    }

    const { title, body } = post;

    return (
        <div className='border border-4 mt-8 p-8 rounded-lg w-[50%] mx-auto text-indigo-900 text-center'>
            <p>ID: {id}</p>
            <p>Title: {title}</p>
            <p>Body: {body}</p>
            <Button onClick={navigateHandler} className='pt-3'>Show More</Button>
        </div>
    );
};

export default Post;
