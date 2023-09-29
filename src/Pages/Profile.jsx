import React from 'react'
import { AiFillPlusCircle } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

import Navbar from '../Components/Navbar'
import ProfilePic from '../Assets/Profile.png'
import store from '../store/store';

const Profile = () => {

    const userState = store.getState();
    const navigate = useNavigate();

    return (
        <>
            <Navbar />

            <div className='h-screen w-full flex items-start justify-center'>

                <div className='w-10/12 h-5/6 px-20 flex items-center justify-between border-2 border-green-200 rounded-xl shadow-xl shadow-green-100 mt-16'>
                    <div className='flex flex-col items-center justify-center'>
                        <p className='text-3xl font-semibold mb-7'>MY PROFILE</p>
                        <div>
                            <img src={ProfilePic} alt="profile pic" className='w-52 h-48' />
                        </div>
                        <div className='flex flex-col items-center justify-center mt-3 border-2 border-zinc-300 rounded-lg shadow-lg shadow-zinc-300 w-72 h-32'>
                            <p className='text-lg font-medium'>{userState.users.name}</p>
                            <p className='text-sm font-extralight mt-1'>{userState.users.email}</p>
                            <p className='font-medium mt-5'>No. of books issued : {userState.users.books.length}</p>
                        </div>
                    </div>

                    <div className='flex flex-col items-center justify-center'>
                        <div className='flex items-center justify-center'>
                            <button
                                className='border-4 border-dashed rounded-lg flex items-center justify-center w-40 h-52 text-zinc-300 hover:border-zinc-400 hover:text-zinc-400 mr-3'
                                onClick={() => navigate('/issuebook')}
                            >
                                <AiFillPlusCircle className='text-5xl' />
                            </button>
                            <button
                                className='border-4 border-dashed rounded-lg flex items-center justify-center w-40 h-52 text-zinc-300 hover:border-zinc-400 hover:text-zinc-400 mx-3'
                                onClick={() => navigate('/issuebook')}
                            >
                                <AiFillPlusCircle className='text-5xl' />
                            </button>
                            <button
                                className='border-4 border-dashed rounded-lg flex items-center justify-center w-40 h-52 text-zinc-300 hover:border-zinc-400 hover:text-zinc-400 ml-3'
                                onClick={() => navigate('/issuebook')}
                            >
                                <AiFillPlusCircle className='text-5xl' />
                            </button>
                        </div>
                        <div className='flex items-center justify-center mt-10'>
                            <button
                                className='border-4 border-dashed rounded-lg flex items-center justify-center w-40 h-52 text-zinc-300 hover:border-zinc-400 hover:text-zinc-400 mr-3'
                                onClick={() => navigate('/issuebook')}
                            >
                                <AiFillPlusCircle className='text-5xl' />
                            </button>
                            <button
                                className='border-4 border-dashed rounded-lg flex items-center justify-center w-40 h-52 text-zinc-300 hover:border-zinc-400 hover:text-zinc-400 ml-3'
                                onClick={() => navigate('/issuebook')}
                            >
                                <AiFillPlusCircle className='text-5xl' />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Profile