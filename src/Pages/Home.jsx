import React from 'react'
import { BsArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import store from '../store/store';
import Hero from '../Assets/Hero.png'
import Book from '../Assets/Book.png'

const Home = () => {

  const bookState = store.getState().books;
  const book1 = bookState[2];
  const book2 = bookState[12];
  const book3 = bookState[22];
  const revBookState = [...bookState].reverse();
  const navigate = useNavigate();

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

  return (
    <>
      <Navbar />
      <div className='w-full mt-16 flex items-center justify-center'>

        <div className='w-11/12 flex items-start justify-between'>

          <div className='w-2/5 flex flex-col items-start justify-center ms-5'>

            <p className='text-5xl text-zinc-700 font-semibold mt-5'>Welcome to Our Online Library</p>
            <p className='text-lg text-zinc-600 font-extralight mt-3 ms-2'>A Place to Explore & Borrow Books at your own leisure</p>
            <button
              className='flex items-center justify-evenly border-2 border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white w-40 h-10 rounded-lg mt-5 ms-1'
              onClick={() => navigate('/issuebook')}
            >
              Explore Now <BsArrowRightCircleFill className='text-lg' />
            </button>

          </div>

          <div className='w-3/5 flex items-center justify-center'>
            <img src={Hero} alt="book-img" className='w-80' />
          </div>

        </div>
      </div>

      <div className='w-11/12 flex flex-col justify-center items-start mt-20'>

        <p className='text-3xl font-medium text-blue-500 ms-20'>Our Top Picks</p>

        <div className='w-full ms-20 mt-9 grid grid-cols-4 gap-y-12'>
          {
            revBookState.map((ele, index) => {
              return (
                index < 4 &&
                < button
                  className='border-2 rounded-lg flex flex-col items-center justify-start w-56 h-64 hover:border-zinc-500 text-zinc-600 hover:text-black'
                  key={index}
                  onClick={() => navigate(`/issuebook/${ele._id}`)}
                >
                  <img src={Book} alt="book img" className='w-36' />
                  <p className='font-medium mt-6'>{ele.name}</p>
                  <p className='text-xs font-extralight mt-1'>{ele.author}</p>
                </button>
              )
            })
          }
        </div>

      </div>

      <div className='w-11/12 flex flex-col justify-center items-start mt-20'>

        <p className='text-3xl font-medium text-blue-500 ms-20'>Just for You . . .</p>

        <div className='w-full ms-20 mt-9 grid grid-cols-4 gap-y-12'>

          < button
            className='border-2 rounded-lg flex flex-col items-center justify-start w-56 h-64 hover:border-zinc-500 text-zinc-600 hover:text-black'
            onClick={() => navigate(`/issuebook/${book1._id}`)}
          >
            <img src={Book} alt="book img" className='w-36' />
            <p className='font-medium mt-3'>{book1.name}</p>
            <p className='text-sm font-extralight mt-1'>{book1.author}</p>
            <p className={classes(book1.genre)}>{book1.genre}</p>
          </button>

          < button
            className='border-2 rounded-lg flex flex-col items-center justify-start w-56 h-64 hover:border-zinc-500 text-zinc-600 hover:text-black'
            onClick={() => navigate(`/issuebook/${book2._id}`)}
          >
            <img src={Book} alt="book img" className='w-36' />
            <p className='font-medium mt-3'>{book2.name}</p>
            <p className='text-sm font-extralight mt-1'>{book2.author}</p>
            <p className={classes(book2.genre)}>{book2.genre}</p>
          </button>

          < button
            className='border-2 rounded-lg flex flex-col items-center justify-start w-56 h-64 hover:border-zinc-500 text-zinc-600 hover:text-black'
            onClick={() => navigate(`/issuebook/${book3._id}`)}
          >
            <img src={Book} alt="book img" className='w-36' />
            <p className='font-medium mt-3'>{book3.name}</p>
            <p className='text-sm font-extralight mt-1'>{book3.author}</p>
            <p className={classes(book3.genre)}>{book3.genre}</p>
          </button>

          < button
            className='border-4 border-dashed rounded-lg flex flex-col items-center justify-center w-56 h-64 hover:border-zinc-500 text-zinc-400 font-medium hover:text-zinc-600'
            onClick={() => navigate(`/search`)}
          >
            <BsArrowRightCircleFill className='text-4xl my-3' />SEE MORE

          </button>

        </div>

      </div>

      <div className='w-full flex flex-col justify-center items-center mt-20'>

        <button
          className='flex items-center justify-center border-2 border-blue-500 text-blue-600 text-lg font-medium hover:bg-blue-500 hover:text-white w-44 h-12 rounded-lg mt-5 ms-1'
          onClick={() => navigate('/issuebook')}
        >
          Browse More
        </button>

      </div>

      <Footer marginTop={'mt-20'} />
    </>
  )
}

export default Home