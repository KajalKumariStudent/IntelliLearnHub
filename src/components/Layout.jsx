import React from 'react'
import Header from './Header/Header'
import { Outlet } from 'react-router-dom'

function Layout({isLoggedIn}) {
  return (
    <div>
      <Header isLoggedIn={isLoggedIn}/>
      
      <Outlet/>
    </div>
  )
}

export default Layout
