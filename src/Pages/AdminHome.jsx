import React, { useState } from 'react'
import { AiFillEye } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ColorRing } from 'react-loader-spinner'

import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import store from '../store/store';
import { deleteBook } from '../actions/bookActions'

const AdminHome = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userState = store.getState().users;
    const bookState = store.getState().books;
    const revBookState = [...bookState].reverse();
    const [loader, setLoader] = useState(false)

    const removeBook = async (e, id) => {
        e.preventDefault();
        setLoader(true)

        if (window.confirm("Do You Really want to delete this book ?")) {
            try {

                const res = await fetch(`https://library-management-system-server.onrender.com/api/books/deletebook/${id}`, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                        "x-auth-token": userState.token
                    }
                })

                const data = await res.json();

                dispatch(deleteBook(id))

                toast.success(data.message);
                setTimeout(() => {
                    navigate('/admin')
                }, 2200);

            }

            catch (error) {
                console.log(error);
            }
        }
        setLoader(false)
    }

    return (
        <>
            <Navbar />
            <div className='w-full flex items-center justify-center mt-10'>
                <div className='w-10/12'>
                    <table class="table-auto w-full">
                        <thead>
                            <tr className='h-16 border-b-2 border-zinc-200'>
                                <th className='text-left text-lg w-2/6'>Book</th>
                                <th className='text-left text-lg w-2/6'>Author</th>
                                <th className='text-left text-lg w-1/6'>Genre</th>
                                <th className='text-center text-lg w-1/12'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                revBookState.map((ele, index) => {
                                    return (
                                        <tr className='h-16 border-b' key={index}>
                                            <td>{ele.name}</td>
                                            <td>{ele.author}</td>
                                            <td>{ele.genre}</td>
                                            <td>
                                                <div className='flex items-center justify-evenly'>
                                                    <button
                                                        className='flex items-center justify-center border border-blue-400 text-blue-500 hover:bg-blue-500 hover:text-white rounded w-9 h-7'
                                                        onClick={() => navigate(`/admin/viewbook/${ele._id}`)}
                                                    >
                                                        <AiFillEye />
                                                    </button>
                                                    <button
                                                        className={loader ? 'flex items-center justify-center border border-red-400 bg-red-500 text-white rounded w-9 h-7' : 'flex items-center justify-center border border-red-400 text-red-500 hover:bg-red-500 hover:text-white rounded w-9 h-7'}
                                                        onClick={loader ? e => e.preventDefault() : e => removeBook(e, ele._id)}
                                                    >
                                                        {loader ? <ColorRing
                                                            visible={true}
                                                            height="20"
                                                            width="20"
                                                            ariaLabel="blocks-loading"
                                                            wrapperStyle={{}}
                                                            wrapperClass="blocks-wrapper"
                                                            colors={['white', 'white', 'white', 'white', 'white']}
                                                        /> : <AiFillDelete />}
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>

            <Footer marginTop={'mt-20'} />

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

export default AdminHome