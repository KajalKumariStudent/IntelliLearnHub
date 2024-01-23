import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Profile from './Profile';

function Login({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const LogIn = () => setIsLoggedIn(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const userList = JSON.parse(localStorage.getItem('usersList'));
  console.log(userList)

  const handleLogin = (e) => {
    e.preventDefault();

    const user = userList.find((user) => user.email == email && user.password == password );
console.log(user)
    if (user) {
      // Redirect to the Home component if the user is registered
      LogIn();
      // Use navigate function from useNavigate to navigate to the Home page
      navigate('/home');
    } else {
      // Display an alert if the user is not registered
      alert('Invalid email or password');
    }
  };

  return (
    <>
      <div className='flex justify-center items-center bg-gray-300 w-[600px] mx-64 my-20'>
        <form className='flex justify-center flex-wrap flex-col' onSubmit={handleLogin}>
          <div className='align-middle'>
            <label htmlFor='email'>
              Email-Id :
              <input
                id='email'
                className='w-[400px] h-[40px] bg-gray-100 m-4 p-4 border-solid border-[#000000] border-2 rounded-md'
                value={email}
                onChange={(e) => setEmail( e.target.value)}
                type='text'
                placeholder='emailId'
              />
            </label>
          </div>

          <div className='align-middle'>
            <label htmlFor='pass'>
              Password :
              <input
                id='pass'
                className='w-[400px] h-[40px] bg-gray-100 m-4 p-4 border-solid border-[#000000] border-2 rounded-md '
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type='password'
                placeholder='Password'
              />
            </label>
          </div>

          <div className='flex justify-center'>
           <Link to='/home'> <button
              type='submit'
              placeholder='Login'
              className='m-4 bg-blue-700 w-40 h-10 text-cyan-50 border rounded-md'
            >
              Login
            </button>
            </Link>
          </div>

          <div className='flex justify-center'>
            <button className='m-4'>Forgot Password?</button>
          </div>
        </form>
      </div>
      <Profile email = {email} />
    </>
  );
}

export default Login;
