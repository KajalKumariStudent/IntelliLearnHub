import React, { useState } from 'react';
import {
  Route,
  Routes, 
  BrowserRouter, 
  Navigate
} from 'react-router-dom';

import Layout from './components/Layout.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import UsersList from './components/UsersList.jsx';
import Profile from './components/Profile.jsx';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const AlertY = () =>  alert('Welcome to "IntelliLearnHub"') ;
   const AlertN = () => alert('You are not logged in please login first');

  return (
    <BrowserRouter>
      {/* Use Routes instead of RouterProvider */}
      <Routes>
        <Route
          path="/"
          element={<Layout isLoggedIn={isLoggedIn} />}
        >
          <Route path="login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />} />

          {/* Routes accessible only when logged in */}

            <Route path="home"  element={isLoggedIn ? <Home/>: <Navigate to="/login" />} />
            <Route path="about"  element={isLoggedIn ? <About /> : <Navigate to="/login" />} />
            <Route path="userslist" element={isLoggedIn ? <UsersList /> : <Navigate to="/login" />} />
            <Route path="profile" element={isLoggedIn ? <Profile /> : <Navigate to="/login" />}/>
           

       
       </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
