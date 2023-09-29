import React, { useState } from 'react'

import Logo from '../Assets/Logo.png'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false)
  const navigate = useNavigate()

  return (
    <div className='flex items-center justify-between px-10 py-2'>
      <div>
        <NavLink to='/'>
          <img src={Logo} alt="LMS" className='w-32 h-14' />
        </NavLink>
      </div>
      <div>
        <button
          className={isLoggedIn ? 'flex items-center justify-center border-2 border-red-500 text-red-600 hover:bg-red-500 hover:text-white w-24 h-10 rounded-lg' : 'flex items-center justify-center border-2 border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white w-24 h-10 rounded-lg'}
          onClick={() => navigate('/login')}
        >
          {isLoggedIn ? 'Logout' : 'Login'}
        </button>
      </div>
    </div>
  )
}

export default Navbar