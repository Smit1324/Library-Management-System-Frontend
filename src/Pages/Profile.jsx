import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import ProfilePic from '../Assets/Profile.png'
import store from '../store/store';
import Boxes from '../Components/Boxes'
import Book from '../Assets/Book.png'

const Profile = () => {

    const userState = store.getState().users;
    const diff = 5 - userState.books.length;
    const [upperArr, setUpperArr] = useState([])
    const [lowerArr, setLowerArr] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        switch (diff) {
            case 1:
                setUpperArr([])
                setLowerArr([0])
                break;
            case 2:
                setUpperArr([])
                setLowerArr([0, 1])
                break;
            case 3:
                setUpperArr([0])
                setLowerArr([0, 1])
                break;
            case 4:
                setUpperArr([0, 1])
                setLowerArr([0, 1])
                break;
            case 5:
                setUpperArr([0, 1, 2])
                setLowerArr([0, 1,])
                break;
            default:
                break;
        }
    }, [])

    return (
        <>
            <Navbar />

            <div className='h-screen w-full flex items-start justify-center'>

                <div className='w-10/12 h-5/6 px-20 flex items-center justify-between border-2 border-green-200 rounded-xl shadow-xl shadow-green-100 mt-16'>
                    <div className='flex flex-col items-center justify-center'>
                        <p className='text-3xl font-semibold mb-7 shadow-sm'> MY PROFILE</p>
                        <div>
                            <img src={ProfilePic} alt="profile pic" className='w-52 h-48' />
                        </div>
                        <div className='flex flex-col items-center justify-center mt-3 border-2 border-zinc-300 rounded-lg shadow-lg shadow-zinc-300 w-72 h-32'>
                            <p className='text-lg font-medium'>{userState.name}</p>
                            <p className='text-sm font-extralight mt-1'>{userState.email}</p>
                            <p className='font-medium mt-5'>No. of books issued : {userState.books.length}</p>
                        </div>
                    </div>

                    <div className='flex flex-col items-center justify-center'>
                        <div className='flex items-center justify-center'>
                            {

                                userState.books.map((ele, index) => {
                                    return (
                                        index <= 2 &&
                                        <>
                                            <button
                                                className='border-2 rounded-lg flex flex-col items-center justify-start w-40 h-52 text-zinc-600 hover:border-zinc-500 hover:text-black mr-3'
                                                onClick={e => navigate(`/returnbook/${ele._id}`)}
                                            >
                                                <img src={Book} alt="book img" className='w-36' />
                                                <p className='text-sm font-medium mt-1'>{ele.name}</p>
                                                <p className='text-xs font-extralight'>{ele.author}</p>
                                            </button>

                                        </>
                                    )
                                })
                            }

                            {upperArr.map(() => {
                                return (
                                    <>
                                        <Boxes />
                                    </>
                                )
                            })}
                        </div>
                        <div className='flex items-center justify-center mt-10'>
                            {

                                userState.books.map((ele, index) => {
                                    return (
                                        index >= 3 && index <= 4 &&
                                        <>
                                            <button
                                                className='border-2 rounded-lg flex flex-col items-center justify-start w-40 h-52 text-zinc-600 hover:border-zinc-500 hover:text-black mr-3'
                                                onClick={e => navigate(`/returnbook/${ele._id}`)}
                                            >
                                                <img src={Book} alt="book img" className='w-36' />
                                                <p className='text-sm font-medium mt-1'>{ele.name}</p>
                                                <p className='text-xs font-extralight'>{ele.author}</p>
                                            </button>

                                        </>
                                    )
                                })
                            }

                            {lowerArr.map(() => {
                                return (
                                    <>
                                        <Boxes />
                                    </>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>

            <Footer marginTop={'mt-16'} />

        </>
    )
}

export default Profile