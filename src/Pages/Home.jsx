import React from 'react'

import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import store from '../store/store';

const Home = () => {

  const bookState = store.getState().books;

  return (
    <>
      <Navbar />
      {
        bookState.map((ele, index) => {
          return (<p className='mx-5' key={index}>{ele.name}</p>)
        })
      }
      <Footer />
    </>
  )
}

export default Home