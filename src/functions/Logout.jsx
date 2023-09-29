import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'

import { logout } from '../actions/userActions';

const Logout = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {

        const signout = async () => {

            await fetch(`https://library-management-system-server.onrender.com/api/users/logout`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            dispatch(logout())
            navigate('/')
        }

        signout();
    }, [])

    return (
        <></>
    )
}

export default Logout