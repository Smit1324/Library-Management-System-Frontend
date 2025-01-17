import React, { useState } from 'react'
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ColorRing } from 'react-loader-spinner'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { login } from '../actions/userActions'
import { getAll } from '../actions/bookActions'

const GetUserData = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({ email: "", password: "" })
    const [passToText, setPassToText] = useState(false)
    const [loader, setLoader] = useState(false)

    const changeType = e => {
        e.preventDefault();
        setPassToText(!passToText)
    }

    const handleInput = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setLoader(true)

        const { email, password } = formData

        try {

            const userRes = await fetch(`https://library-management-system-server.onrender.com/api/users/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email, password
                })
            })

            if (userRes.status === 200) {

                const userResData = await userRes.json()
                const { id, token } = userResData;

                const userRes2 = await fetch(`https://library-management-system-server.onrender.com/api/users/${id}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "x-auth-token": token
                    }
                })

                const userResData2 = await userRes2.json();
                const { name, email, isAdmin, books } = userResData2.user

                const issuedBooks = []
                books.map(async (ele) => {
                    const issuedBooksRes = await fetch(`https://library-management-system-server.onrender.com/api/books/${ele}`, {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                        }
                    })
                    const issuedBooksData = await issuedBooksRes.json();
                    if (issuedBooksData.book !== null) {
                        issuedBooks.push(issuedBooksData.book)
                    }
                    else {
                        await fetch(`https://library-management-system-server.onrender.com/api/users/returnbook/${ele}`, {
                            method: "PUT",
                            headers: {
                                "Content-Type": "application/json",
                                "x-auth-token": userResData2.user.tokens[userResData2.user.tokens.length - 1].token
                            }
                        })
                    }
                })

                dispatch(login(id, token, name, email, isAdmin, issuedBooks))

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

                if (userResData2.user.isAdmin) {
                    toast.success("Login Successful");
                    setTimeout(() => {
                        navigate('/admin')
                    }, 2200);
                }
                else {
                    toast.success("Login Successful");
                    setTimeout(() => {
                        navigate('/home')
                    }, 2200);
                }
            }
            else {
                const userResData = await userRes.json()
                toast.warn(userResData.error);
            }
        }

        catch (error) {
            console.log(error);
        }

        setLoader(false)

    }

    return (
        <form className='flex flex-col items-start justify-center'>

            <div>
                <p className='font-medium text-3xl text-left text-blue-800'>SignIn To Your Account</p>
            </div>

            <div className='flex flex-col items-start justify-start'>
                <input
                    type="text"
                    placeholder='Enter your college Id/Librarian Id'
                    className='outline-none border border-zinc-700 rounded-md w-96 h-10 pl-3 mb-3 mt-10'
                    name='email'
                    value={formData.email}
                    onChange={e => handleInput(e)}
                    autoComplete='off'
                />
                <p className='ms-2 mt-[-4px] text-sm text-black'>
                    guest id: "testuser78@gmail.com"
                </p>
            </div>

            <div className='flex flex-col items-start justify-start'>

                <div className='relative'>
                    <input
                        type={passToText ? 'text' : 'password'}
                        placeholder='Enter your password'
                        className='outline-none border border-zinc-700 rounded-md w-96 h-10 pl-3 my-3'
                        name='password'
                        value={formData.password}
                        onChange={e => handleInput(e)}
                        autoComplete='off'
                    />
                    <button
                        className='absolute top-5 right-3'
                        onClick={changeType}
                    >
                        {passToText ? <AiFillEye className='text-blue-500 text-2xl' /> : <AiFillEyeInvisible className='text-blue-400 text-2xl' />
                        }
                    </button>
                </div>
                <p className='ms-2 mt-[-4px] text-sm text-black'>
                    password for guest: "abc@123"
                </p>
            </div>

            <button
                className={loader ? 'w-96 h-12 flex items-center justify-center border-2 border-blue-500 rounded-lg bg-blue-500 mt-5' : 'w-96 h-12 flex items-center justify-center border-2 border-blue-500 rounded-lg text-blue-600 text-xl font-medium hover:bg-blue-500 hover:text-white mt-5'}
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
                /> : "Login"}
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
    )
}

export default GetUserData