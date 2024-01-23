import React, { useEffect, useState } from 'react';
import Card from './Card';
import { useContextUser } from '../context/UserContext';

function UsersList() {
  // Use the context to get the users
  const { users: contextUsers } = useContextUser();
  
  // Local state to hold users
  const [localUsers, setLocalUsers] = useState([]);

  useEffect(() => {
    // Fetch user data from local storage when the component mounts
    const storedUsers = JSON.parse(localStorage.getItem('usersList')) || [];
    setLocalUsers(storedUsers);
  }, [contextUsers]); // Use contextUsers as a dependency if needed

  return (
    <>
    <div className='flex h-screen w-screen flex-wrap'>
      
      {localUsers.map((user) => (
        <Card key={user.id} username={user.name} details={user} />
      ))}
      
    </div>
    </>
  );
}

export default UsersList;
