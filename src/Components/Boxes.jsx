import React from 'react'
import { AiFillPlusCircle } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

const Boxes = () => {

    const navigate = useNavigate();

    return (
        <button
            className='border-4 border-dashed rounded-lg flex items-center justify-center w-40 h-52 text-zinc-300 hover:border-zinc-400 hover:text-zinc-400 mr-3'
            onClick={() => navigate('/issuebook')}
        >
            <AiFillPlusCircle className='text-5xl' />
        </button>
    )
}

export default Boxes