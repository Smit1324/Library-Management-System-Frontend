import React, { useState } from 'react'
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { login } from '../actions/userActions'

const GetUserData = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const [formData, setFormData] = useState({ email: "", password: "" })
    const [passToText, setPassToText] = useState(false)

    const changeType = e => {
        e.preventDefault();
        setPassToText(!passToText)
    }

    const handleInput = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async e => {
        e.preventDefault();

        const { email, password } = formData

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
            const { name, email, books } = userResData2.user
            dispatch(login(id, token, name, email, books))

            navigate('/')
        }
        else {
            const userResData = await userRes.json()
            alert(userResData.error);
        }

    }

    return (
        <form className='flex flex-col items-start justify-center'>

            <div>
                <p className='font-medium text-3xl text-left text-blue-800'>SignIn To Your Account</p>
            </div>

            <input
                type="text"
                placeholder='Enter your college Id'
                className='outline-none border border-zinc-700 rounded-md w-96 h-10 pl-3 mb-3 mt-10'
                name='email'
                value={formData.email}
                onChange={e => handleInput(e)}
            />

            <div className='relative'>
                <input
                    type={passToText ? 'text' : 'password'}
                    placeholder='Enter your password'
                    className='outline-none border border-zinc-700 rounded-md w-96 h-10 pl-3 my-3'
                    name='password'
                    value={formData.password}
                    onChange={e => handleInput(e)}
                />
                <button
                    className='absolute top-5 right-3'
                    onClick={changeType}
                >
                    {passToText ? <AiFillEye className='text-blue-500 text-2xl' /> : <AiFillEyeInvisible className='text-blue-400 text-2xl' />
                    }
                </button>
            </div>

            <button
                className='w-96 h-12 flex items-center justify-center border-2 border-blue-500 rounded-lg text-blue-600 text-xl font-medium hover:bg-blue-500 hover:text-white mt-5'
                onClick={handleSubmit}
            >
                Login
            </button>

        </form>
    )
}

export default GetUserData