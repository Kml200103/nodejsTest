import React from 'react';
import About from '../About';
import Daycare from '../Daycare';
import Feature from '../Card/Features';
import Contact from '../Contact';

const Home = () => {
  return (

    <>

      <div className=''>

        <div className=' px-4 py-4 md:px-16 md:py-8'></div>
        <div className="home-container">
          <Daycare />


        </div>


        <Contact />


      </div>


    </>
  )
}

export default Home;
