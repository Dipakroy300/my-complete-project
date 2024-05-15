import React, { useEffect, useState } from 'react';
import { Button } from "@material-tailwind/react";
import { Link, useParams, useNavigate } from 'react-router-dom';

const User = ({ user }) => {
    const navigate = useNavigate();
    const { id, name, username, email, phone, website } = user;


    const navigateHandler = () => {
        navigate(`/postDetails/${id}`);
    }

    return (
        <div className='bg-lime-800 mt-5 p-4 mx-auto text-center rounded-xl w-[50%]'>
            <h1>{name}</h1>
            <p>{username}</p>
            <p>{email}</p>
            <p>{phone}</p>
            <p>{website}</p>
            <Button onClick={navigateHandler} className='mt-2'>Show More</Button>
        </div>
    );
};

export default User;
