import React, { useEffect, useState } from 'react';
import User from '../User/User';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
            
    }, []);

    return (
        <div>
            <h1>i will show here some users</h1>
            {
                users.map(user => <User
                    key={user.id}
                    user={user}
                />)
            }
        </div>
    );
};

export default Users;
