import React from 'react'

import Logo from '../Assets/Logo.png'
import { NavLink, useNavigate } from 'react-router-dom'
import store from '../store/store';

const Navbar = () => {

  const userState = store.getState().users;
  const admin = userState.isAdmin

  const isLoggedIn = userState.isLoggedIn
  const navigate = useNavigate()

  return (
    <div className='flex items-center justify-between px-10 py-2'>
      <div>
        <NavLink to={isLoggedIn ? admin ? '/admin' : '/home' : '/'}>
          <img src={Logo} alt="LMS" className='w-32 h-14' />
        </NavLink>
      </div>
      <div className='flex items-center justify-between'>
        <div className={isLoggedIn && !admin ? 'flex items-center justify-center mr-10' : 'hidden'}>
          <NavLink to='/search' className='hover:font-semibold active:font-semibold text-lg mx-5'>Search</NavLink>
          <NavLink to='/issueBook' className='hover:font-semibold active:font-semibold text-lg mx-5'>Issue a book</NavLink>
          <NavLink to='/profile' className='hover:font-semibold active:font-semibold text-lg mx-5'>My Profile</NavLink>
        </div>
        <button
          className={isLoggedIn && admin ? 'flex items-center justify-center border-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white w-32 h-10 rounded-lg mr-5' : 'hidden'}
          onClick={() => navigate('/admin/addbook')}
        >
          Add a Book
        </button>
        <button
          className={isLoggedIn ? 'flex items-center justify-center border-2 border-red-500 text-red-600 hover:bg-red-500 hover:text-white w-24 h-10 rounded-lg' : 'hidden'}
          onClick={() => navigate('/logout')}
        >
          Logout
        </button>
      </div>
    </div>
  )
}

export default Navbar