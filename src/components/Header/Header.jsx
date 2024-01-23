import React from 'react'
import{Link,NavLink} from 'react-router-dom'
 

export default function Header({isLoggedIn}) {
    
   const content = isLoggedIn? (<>
    <label htmlFor="myprofile" className="text-gray-800 hover:bg-gray-50 focus:ring-4
        focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">
                                    
                                
                                <select name="myDetails" id="myprofile">
                                   <option value="My Profile"><Link to='/profile'> <button>My Profile</button></Link></option>
                                   <option value="Logout" className='text-red-500'> 
                                   <Link to='/login'><button onClick={isLoggedIn=false}> Logout</button></Link></option>
                                </select>
                                </label> 
   </>)
    : (<>
    <Link
                            to='/login'
                            className="text-gray-800 hover:bg-gray-50 focus:ring-4
                             focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2
                              focus:outline-none"
                        >
                           Login
                        </Link>
                        
                        <Link
                            to="/signup"
                            className="text-white bg-blue-700
                             hover:bg-blue-800 focus:ring-4
                              focus:ring-blue-300 font-medium 
                              rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Sign up
                        </Link>
   </>)

    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://bcassetcdn.com/social/n2l1idr8s0/preview.png"
                            className="mr-3 h-[70px] w-64 object-cover "
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center lg:order-2">
                       {content}
                    </div>
                    <div
                        className="hidden justify-between items-center 
                        w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                         <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li >
                                <NavLink
                                to="/home"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 
                                        ${isActive ? "text-blue-700" : "text-grey-700"}
                                        border-b
                                         border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent 
                                         lg:border-0 hover:text-blue-700 lg:p-0`
                                    
                                    }
                                >
                                    Home 
                                </NavLink>
                            </li>
                            <li >
                                <NavLink
                                to="/about"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 
                                        ${isActive ? "text-blue-700" : "text-grey-700"}
                                        border-b
                                         border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent 
                                         lg:border-0 hover:text-blue-700 lg:p-0`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li >
                                <NavLink
                                to="/userslist"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 
                                        ${isActive ? "text-blue-700" : "text-grey-700"}
                                        border-b
                                         border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent 
                                         lg:border-0 hover:text-blue-700 lg:p-0`
                                    }
                                >
                                    Users List
                                </NavLink>
                            </li>
                            
                               
        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

