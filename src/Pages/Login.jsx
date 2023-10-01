import React from 'react'

import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import LoginVector from '../Assets/Login.png'
import GetUserData from '../functions/GetUserData'

const Login = () => {
  return (
    <>
      <Navbar />

      <div className='h-screen w-full flex items-start justify-center'>

        <div className='w-10/12 h-4/6 px-20 flex items-center justify-between border-2 border-blue-200 rounded-xl shadow-xl shadow-blue-100 mt-16'>

          <div>
            <img src={LoginVector} alt="Login img" className='w-9/12' />
          </div>

          <GetUserData />

        </div>
      </div>

      <Footer marginTop={'mt-0'}/>
    </>
  )
}

export default Login