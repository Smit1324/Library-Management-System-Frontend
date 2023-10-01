import React from 'react'
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

import Logo from '../Assets/Logo.png'

const Footer = ({ marginTop }) => {
  return (
    <div className={`w-full h-44 ${marginTop} flex items-center justify-center bg-gray-50`}>

      <div className='w-10/12 flex flex-col items-center justify-center'>

        <div className='w-full flex items-center justify-between mt-3 py-3 border-b border-zinc-3 00'>

          <div>
            <img src={Logo} alt="logo" className='w-32 h-14' />
          </div>

          <div className='w-1/12 flex items-center justify-between'>
            <AiOutlineTwitter className='text-2xl text-blue-300 hover:text-blue-500' />
            <AiFillInstagram className='text-2xl text-red-300 hover:text-red-500' />
            <AiFillFacebook className='text-2xl text-blue-400 hover:text-blue-700' />
          </div>

        </div>

        <div className='mt-6'>
          <p className='text-sm font-extralight'>© 2023 | All Rights Reserved</p>
        </div>

      </div>
    </div>
  )
}

export default Footer