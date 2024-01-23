import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const LoginForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const allData = location.state?.allData || [];

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();

    for (let i = 0; i < localStorage.length; i++) {
      
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      const data = JSON.parse(value);
      

      console.log('data', data);
      console.log('formData', formData);

      if (formData.email == data.email && formData.password == data.password) {
        // Save user details in state
        navigate('/userdetails',{data});
        setIsLoggedIn(true);
        window.alert('Logged In');
      }
    }
  }

  return (
    <div className='flex justify-center align-center'>
      <form
        onSubmit={submitHandler}
        className='flex flex-col justify-center items-center mt-20 text-2xl bg-slate-200 w-[20rem]  h-[25rem]'
      >
        <label className='flex flex-col'>
          <p>
            Email Address<sup className='text-red-600'>*</sup>
          </p>
          <input
            required
            type='email'
            value={formData.email}
            onChange={changeHandler}
            placeholder='Enter email id'
            name='email'
            className='text-black text-xl w-1/1 h-10 m-1'
          />
        </label>
        <br />

        <label className='flex flex-col'>
          <p>
            Password<sup className='text-red-600'>*</sup>
          </p>

          <div className='flex relative'>
            <input
              required
              type={showPassword ? 'text' : 'password'}
              value={formData.password}
              onChange={changeHandler}
              placeholder='Enter Password'
              name='password'
              className='text-black text-xl w-1/1 h-10 m-1'
            />

            <span
              className='absolute right-[1rem] top-3'
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </div>
        </label>

        <br />

        <Link to='#'>
          <p className='text-md'>Forgot Password</p>
        </Link>

        <br />

        <button className='bg-amber-400 rounded-md p-3 px-10 text-white '>
          Next
        </button>
      </form>
    </div>
  );
};

export default LoginForm;