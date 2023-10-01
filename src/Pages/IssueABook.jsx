import React from 'react'
import { useNavigate } from 'react-router-dom';

import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Book from '../Assets/Book.png'
import store from '../store/store';

const IssueABook = () => {

    const bookState = store.getState().books;
    const navigate = useNavigate();

    // console.log(bookState[0]._id);

    return (
        <>
            <Navbar />
            <div className='w-11/12 flex flex-col items-center justify-center'>

                <div className='w-11/12 flex flex-col justify-center items-start mt-12'>

                    <p className='text-3xl font-medium text-pink-500 ms-20'>Romance</p>

                    <div className='w-full ms-20 mt-9 grid grid-cols-4 gap-y-12'>
                        {
                            bookState.map((ele, index) => {
                                return (
                                    ele.genre === 'Romance' &&
                                    < button
                                        className='border-2 rounded-lg flex flex-col items-center justify-start w-56 h-64 hover:border-zinc-500 text-zinc-600 hover:text-black'
                                        key={index}
                                        onClick={() => navigate(`/issuebook/${ele._id}`)}
                                    >
                                        <img src={Book} alt="book img" className='w-36' />
                                        <p className='font-medium mt-6'>{ele.name}</p>
                                        <p className='text-xs font-extralight mt-1'>{ele.author}</p>
                                    </button>
                                )
                            })
                        }
                    </div>

                </div>

                <div className='w-11/12 flex flex-col justify-center items-start mt-12'>

                    <p className='text-3xl font-medium text-green-600 ms-20'>Adventure</p>

                    <div className='w-full ms-20 mt-9 grid grid-cols-4 gap-y-12'>
                        {
                            bookState.map((ele, index) => {
                                return (
                                    ele.genre === 'Adventure' &&
                                    < button
                                        className='border-2 rounded-lg flex flex-col items-center justify-start w-56 h-64 hover:border-zinc-500 text-zinc-600 hover:text-black'
                                        key={index}
                                        onClick={() => navigate(`/issuebook/${ele._id}`)}
                                    >
                                        <img src={Book} alt="book img" className='w-36' />
                                        <p className='font-medium mt-6'>{ele.name}</p>
                                        <p className='text-xs font-extralight mt-1'>{ele.author}</p>
                                    </button>
                                )
                            })
                        }
                    </div>

                </div>

                <div className='w-11/12 flex flex-col justify-center items-start mt-12'>

                    <p className='text-3xl font-medium text-blue-500 ms-20'>Horror</p>

                    <div className='w-full ms-20 mt-9 grid grid-cols-4 gap-y-12'>
                        {
                            bookState.map((ele, index) => {
                                return (
                                    ele.genre === 'Horror' &&
                                    < button
                                        className='border-2 rounded-lg flex flex-col items-center justify-start w-56 h-64 hover:border-zinc-500 text-zinc-600 hover:text-black'
                                        key={index}
                                        onClick={() => navigate(`/issuebook/${ele._id}`)}
                                    >
                                        <img src={Book} alt="book img" className='w-36' />
                                        <p className='font-medium mt-6'>{ele.name}</p>
                                        <p className='text-xs font-extralight mt-1'>{ele.author}</p>
                                    </button>
                                )
                            })
                        }
                    </div>

                </div>

            </div>
            <Footer marginTop={'mt-20'} />
        </>
    )
}

export default IssueABook