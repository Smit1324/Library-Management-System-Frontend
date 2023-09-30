import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { BiSearchAlt2 } from "react-icons/bi";

import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Book from '../Assets/Book.png'
import store from '../store/store';

const Search = () => {

    const bookState = store.getState().books;
    const navigate = useNavigate();
    const [search, setSearch] = useState('')
    const [book, setBook] = useState('')
    const [isBtnClicked, setIsBtnClicked] = useState(false)

    const classes = (type) => {
        switch (type) {
            case "Romance":
                return ('text-pink-500 mt-1');
            case "Adventure":
                return ('text-green-700 mt-1');
            case "Horror":
                return ('text-blue-500 mt-1');

            default:
                return ('text-zinc-600 mt-1');
        }
    }

    const handleChange = e => {
        setIsBtnClicked(false)
        setSearch(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        setIsBtnClicked(true)
        setBook('')

        const bookCheck = bookState.find(ele => ele.name.toLowerCase() === search.toLowerCase())
        if (bookCheck !== undefined) {
            setBook(bookCheck)
        }
    }

    return (
        <>
            <Navbar />
            <div className='w-full mt-12 flex flex-col items-center justify-center'>

                <div className='w-10/12 flex flex-col items-start justify-center'>
                    <div className='w-full flex flex-col items-start justify-center'>
                        <p className='text-2xl text-zinc-600 font-medium'>Find Your favourite books . . .</p>
                        <div className='w-full mt-5 flex items-center justify-start'>
                            <input
                                type="text"
                                className='outline-gray-500 border-2 border-gray-300 rounded-lg w-11/12 h-12 pl-4 font-medium'
                                placeholder='Search here . . .'
                                name='serach'
                                id={search}
                                onChange={handleChange}
                                autoComplete='off'
                            />
                            <button
                                className='border-2 border-blue-500 text-blue-500 rounded-lg w-16 h-12 flex items-center justify-center ms-2 hover:bg-blue-500 hover:text-white'
                                onClick={handleSubmit}
                            >
                                <BiSearchAlt2 className='text-3xl' />
                            </button>
                        </div>

                    </div>
                </div>

                <div className='w-11/12 ms-20 mt-12 grid grid-cols-4 gap-y-10'>
                    {
                        isBtnClicked && search ?
                            book !== '' ?
                                < button
                                    className='border-2 rounded-lg flex flex-col items-center justify-start w-56 h-64 hover:border-zinc-500 text-zinc-600 hover:text-black'
                                    onClick={() => navigate(`/issuebook/${book._id}`)}
                                >
                                    <img src={Book} alt="book img" className='w-36' />
                                    <p className='font-medium mt-3'>{book.name}</p>
                                    <p className='text-sm font-extralight mt-1'>{book.author}</p>
                                    <p className={classes(book.genre)}>{book.genre}</p>
                                </button>
                                :
                                <p className='text-lg font-medium ms-10'>No data Found ＞﹏＜</p>

                            :
                            bookState.map((ele, index) => {
                                return (
                                    < button
                                        className='border-2 rounded-lg flex flex-col items-center justify-start w-56 h-64 hover:border-zinc-500 text-zinc-600 hover:text-black'
                                        key={index}
                                        onClick={() => navigate(`/issuebook/${ele._id}`)}
                                    >
                                        <img src={Book} alt="book img" className='w-36' />
                                        <p className='font-medium mt-3'>{ele.name}</p>
                                        <p className='text-sm font-extralight mt-1'>{ele.author}</p>
                                        <p className={classes(ele.genre)}>{ele.genre}</p>
                                    </button>
                                )
                            })

                    }
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Search