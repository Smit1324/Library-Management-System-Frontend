import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ColorRing } from 'react-loader-spinner'

import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import AddBookVector from '../Assets/AddBook.png'
import { getAll, deleteAll } from '../actions/bookActions';
import store from '../store/store';

const AddBook = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userState = store.getState().users
    const [formData, setFormData] = useState({ name: "", author: "", genre: "" })
    const [loader, setLoader] = useState(false)

    const handleInput = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setLoader(true)

        const { name, author, genre } = formData

        try {

            const res = await fetch(`https://library-management-system-server.onrender.com/api/books/addbooks`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-auth-token": userState.token
                },
                body: JSON.stringify({
                    name, author, genre
                })
            })

            if (res.status === 201) {

                const data = await res.json();

                dispatch(deleteAll())

                const booksRes = await fetch(`https://library-management-system-server.onrender.com/api/books/`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                })

                const booksData = await booksRes.json();

                booksData.books.map((ele) => {
                    return (
                        dispatch(getAll(ele))
                    )
                })

                toast.success(data.message);
                setTimeout(() => {
                    navigate('/admin')
                }, 2200);
            }
            else {

                const data = await res.json();
                toast.error(data.error);
                setTimeout(() => {
                    navigate('/admin')
                }, 2200);

            }

        }

        catch (error) {
            console.log(error);
        }

        setLoader(false)

    }

    return (
        <>
            <Navbar />

            <div className='h-screen w-full flex items-start justify-center'>

                <div className='w-10/12 h-4/6 px-20 flex items-center justify-between border-2 border-green-200 rounded-xl shadow-xl shadow-green-100 mt-16'>

                    <div className='ms-10'>
                        <img src={AddBookVector} alt="Login img" className='w-12/12' />
                    </div>

                    <form className='flex flex-col items-start justify-center'>

                        <div>
                            <p className='font-medium text-3xl text-left text-green-600'>Add a New Book</p>
                        </div>

                        <input
                            type="text"
                            placeholder='Enter Book Name'
                            className='outline-none border border-zinc-700 rounded-md w-96 h-10 pl-3 mb-3 mt-10'
                            name='name'
                            value={formData.name}
                            onChange={e => handleInput(e)}
                            autoComplete='off'
                        />

                        <input
                            type='text'
                            placeholder='Enter Author Name'
                            className='outline-none border border-zinc-700 rounded-md w-96 h-10 pl-3 my-3'
                            name='author'
                            value={formData.author}
                            onChange={e => handleInput(e)}
                            autoComplete='off'
                        />

                        <input
                            type='text'
                            placeholder='Enter the genre of the book'
                            className='outline-none border border-zinc-700 rounded-md w-96 h-10 pl-3 my-3'
                            name='genre'
                            value={formData.genre}
                            onChange={e => handleInput(e)}
                            autoComplete='off'
                        />


                        <button
                            className={loader ? 'w-96 h-12 flex items-center justify-center border-2 border-green-500 rounded-lg bg-green-500 mt-5' : 'w-96 h-12 flex items-center justify-center border-2 border-green-500 rounded-lg text-green-600 text-xl font-medium hover:bg-green-500 hover:text-white mt-5'}
                            onClick={loader ? e => e.preventDefault() : handleSubmit}
                        >
                            {loader ? <ColorRing
                                visible={true}
                                height="40"
                                width="40"
                                ariaLabel="blocks-loading"
                                wrapperStyle={{}}
                                wrapperClass="blocks-wrapper"
                                colors={['white', 'white', 'white', 'white', 'white']}
                            /> : "Add to Library"}
                        </button>

                        <ToastContainer
                            position="top-center"
                            autoClose={2000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="light"
                        />

                    </form>

                </div >
            </div >

            <Footer />

            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    )
}

export default AddBook