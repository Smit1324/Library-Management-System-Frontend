import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { logout } from '../actions/userActions';
import { deleteAll } from '../actions/bookActions';

const Logout = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {

        const signout = async () => {

            try {

                await fetch(`https://library-management-system-server.onrender.com/api/users/logout`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    }
                })

                dispatch(logout())
                dispatch(deleteAll())

                toast.success("Logout Successful");
                setTimeout(() => {
                    navigate('/')
                }, 2100);

            }

            catch (error) {
                console.log(error);
            }
        }

        signout();
    }, [])

    return (
        <>
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

export default Logout