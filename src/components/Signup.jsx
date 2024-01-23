import React, { useState, useEffect } from 'react';
import { UserProvider } from '../context/UserContext';
import { Navigate,Link } from 'react-router-dom'; // Import Navigate
import Profile from './Profile';

function Signup({ setIsLoggedIn }) {
  const LogIn = () => setIsLoggedIn(true);
  const [users, setUsers] = useState(() => {
    // Initialize the state with the users from localStorage
    const storedUsers = localStorage.getItem('usersList');
    return storedUsers ? JSON.parse(storedUsers) : [];
  });

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contact, setContact] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      name: `${name}`,
      email: `${email}`,
      password: `${password}`,
      contact: `${contact}`,
    };

    addUser(user);

    // Clear input fields after submission
    setName('');
    setPassword('');
    setEmail('');
    setContact('');
  };

  const addUser = (user) => setUsers((prev) => [{ id: Date.now(), ...user }, ...prev]);

  const handleNameChange = (e) => setName(e.target.value);

  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleEmailChange = (e) => setEmail(e.target.value);

  const handleContactChange = (e) => setContact(e.target.value);

  const handleClick = () => {
    LogIn();
    // Use Navigate from React Router to navigate to the Home page
    return <Navigate to="/home" />;
  };

  useEffect(() => {
    localStorage.setItem('usersList', JSON.stringify(users));
  }, [users]);

  return (
    <UserProvider value={{users, addUser, LogIn}}>
    <div className='  bg-gray-300 w-[650px] mx-64 my-4'>
      <form className='flex flex-col  items-center' onSubmit={handleSubmit}>

        <label className='ml-20' >
        Name : <input type="text" className='w-[400px] h-[40px] bg-gray-100 m-4 
       border-solid border-[#000000] border-2 rounded-md p-4' value={name}
       onChange={handleNameChange} /></label>

        <label htmlFor='email' className='ml-20'> 
        Email : <input value={email} onChange={handleEmailChange} id='email' type="text" className='w-[400px] h-[40px] bg-gray-100 m-4 
       border-solid border-[#000000] border-2 rounded-md p-4' /></label>

        <label htmlFor='contact' className='ml-20'> 
        Contact : <input value={contact} onChange={handleContactChange} id='contact' type="text"  className='w-[400px] h-[40px] bg-gray-100 m-4 
       border-solid border-[#000000] border-2 rounded-md p-4' /></label>

        <div className='w-[600px] flex flex-wrap space-evenly justify-evenly ml-20'>
            Gender :
       <span className='mx-6'> 
        <label htmlFor='male' > <input id='male' name='Gender'type="radio" value="male" />Male</label>
       </span> 
       <span className='mx-6'>
        <label htmlFor='female'> <input id='female' name='Gender' type="radio" value='female' />Female</label>
       </span >
       <span className='mx-6'>
         <label htmlFor='other' > <input id='other' name='Gender' type="radio" value="others" /> Others</label>
      </span>
      </div>

      <label> Create Password :<input value={password} onChange={handlePasswordChange} type="password" className='w-[400px] h-[40px] bg-gray-100 m-4 
       border-solid border-[#000000] border-2 rounded-md p-4 '/></label>

      <label> Confirm Password :<input type="password" className='w-[400px] h-[40px] bg-gray-100 m-4 
       border-solid border-[#000000] border-2 rounded-md p-4 '/></label>
    
    <Link to='/home'> <button type='submit' onClick={handleClick}
    onMouseDown={handleClick}
      className='m-4 bg-blue-700 w-40 h-10 text-cyan-50 border rounded-md' >
         Submit </button></Link>
      </form>
    </div>
    <Profile user={users.map((user) => user.id === Date.now() ? user : ""  )} />
    </UserProvider>
  )
}

export default Signup
