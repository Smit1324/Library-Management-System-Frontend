import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ColorRing } from 'react-loader-spinner'

import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Book from '../Assets/Book.png'
import store from '../store/store';
import { issueBook } from '../actions/userActions';

const IssueBookPage = () => {

    const { id } = useParams()
    const userState = store.getState().users;
    const bookState = store.getState().books;
    const book = bookState.find(ele => ele._id === id)
    const [loader, setLoader] = useState(false)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const addABook = async e => {
        e.preventDefault();
        setLoader(true)

        try {

            const res = await fetch(`https://library-management-system-server.onrender.com/api/users/issuebook/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "x-auth-token": userState.token
                },
            })

            if (res.status === 200) {

                const data = await res.json();
                toast.success(data.message);

                dispatch(issueBook(book))

                setTimeout(() => {
                    navigate('/profile')
                }, 2200);
            }
            else {
                const data = await res.json();
                toast.error(data.error);
                setTimeout(() => {
                    navigate('/profile')
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

                        <button
                            className={loader ? `flex items-center justify-center border-2 border-blue-500 text-lg bg-blue-500 text-white w-32 h-11 rounded-lg mt-16` : `flex items-center justify-center border-2 border-blue-500 text-blue-600 text-lg hover:bg-blue-500 hover:text-white w-32 h-11 rounded-lg mt-16`}
                            onClick={loader ? e => e.preventDefault() : addABook}
                        >
                            {loader ? <ColorRing
                                visible={true}
                                height="40"
                                width="40"
                                ariaLabel="blocks-loading"
                                wrapperStyle={{}}
                                wrapperClass="blocks-wrapper"
                                colors={['white', 'white', 'white', 'white', 'white']}
                            /> : "Issue Book"}
                        </button>
                    </div>

                </div>

            </div>

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

export default IssueBookPage