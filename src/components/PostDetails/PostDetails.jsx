import { Button } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const PostDetails = () => {
    const [users, setUsers] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => res.json())
            .then(data => setUsers(data))


        // const fetchData = async () => {
        //     try {
        //         const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        //         const data = await response.json();
        //         setUsers(data);
        //     } catch (error) {
        //         console.error('Error fetching data:', error);
        //     }
        // };

        // fetchData();
    }, [id]);
    // console.log(users);

    const navigate=useNavigate();

    const goBack=()=>{
        navigate(-1);
    }

    return (
        <div className='bg-lime-800 mt-5 p-4 mx-auto text-center rounded-xl w-[50%]'>
            <h1>UserId:{users?.id}</h1>
            <h1>Name:{users?.name}</h1>
            <h1>Email:{users?.email}</h1>
           
            <p>phone:{users?.phone}</p>
            <p>website:{users?.website}</p>
            <Button onClick={goBack}>Go Back</Button>

        </div>
    );
};

export default PostDetails;
