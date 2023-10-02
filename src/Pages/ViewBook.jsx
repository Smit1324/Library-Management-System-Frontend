import React from 'react'
import { useParams } from 'react-router-dom';

import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Book from '../Assets/Book.png'
import store from '../store/store';

const ViewBook = () => {

    const { id } = useParams();
    const bookState = store.getState().books;
    const book = bookState.find(ele => ele._id === id)

    return (
        <>
            <Navbar />

            <div className='h-screen w-full flex items-start justify-center'>

                <div className={`w-10/12 h-4/6 px-20 flex items-center justify-between border-2 border-blue-200 rounded-xl shadow-xl shadow-blue-100 mt-16`}>

                    <div className='w-2/5 flex items-center justify-start'>
                        < div
                            className={`border-2 rounded-lg flex items-center justify-center w-60 h-72 border-blue-400`}
                        >
                            <img src={Book} alt="book img" className='w-50' />
                        </div>
                    </div>

                    <div className={`w-3/5 flex flex-col items-start justify-center text-blue-400`}>

                        <p className='text-3xl font-medium'>{book.name}</p>
                        <p className='text-xl mt-2 ms-2'>By {book.author}</p>
                        <p className='text-2xl font-medium mt-7'>Genre : {book.genre}</p>

                    </div>

                </div>

            </div>

            <Footer marginTop={'mt-0'} />
        </>
    )
}

export default ViewBook