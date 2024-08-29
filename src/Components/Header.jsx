import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; 

const Header = () => {
  const [navOpen, setNavOpen] = useState(false); 

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <header className="bg-cover bg-center h-auto bg-hero-image">
      <div className="flex justify-between items-center p-6 bg-pink-400 md:bg-inherit">
        <div className="text-3xl font-medium text-white ">King Sikh Guest House</div>
        <div className="text-white md:hidden" onClick={toggleNav}>
          {navOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </div>
        <nav className={`md:flex md:items-center md:space-x-8 ${navOpen ? 'block' : 'hidden'} absolute md:relative bg-pink-400 md:bg-transparent w-full md:w-auto top-20 md:top-0 left-0 md:left-auto p-6 md:p-0`}>
          <a href="#home" className="text-lg block md:inline-block text-white hover:pink-500 hover:underline py-2 md:py-0 text-center">Home</a>
          <a href="#about" className="text-lg block md:inline-block text-white hover:text-yellow-500 py-2 md:py-0 text-center">About</a>
          <a href="#rooms" className="text-lg block md:inline-block text-white hover:text-yellow-500 py-2 md:py-0 text-center">Rooms</a>
          <a href="#services" className="text-lg block md:inline-block text-white hover:text-yellow-500 py-2 md:py-0 text-center">Services</a>
          <a href="#gallery" className="text-lg block md:inline-block text-white hover:text-yellow-500 py-2 md:py-0 text-center">Gallery</a>
          <a href="#contact" className="text-lg block md:inline-block text-white py-2 md:py-0 text-center">Contact</a>
          <div className='text-center'><button className="bg-pink-500 text-white px-4 py-2 rounded md:py-2 text-center">BOOK NOW</button></div>
        </nav>
      </div>
      

      {/* Hero Section */}
      <div className="flex justify-center items-center h-3/4 text-center">
        <div className="text-white">
          <p className="text-2xl text-stone-300">Simple - Unique - Friendly</p>
          <h1 className="text-6xl font-medium mt-2 text-center">Make Yourself At Home In Our <a className='text-pink-500' href="">Guest House</a>.</h1>
        </div>
      </div>
      <div className='flex items-end justify-center'>
      <div className='bg-white text-center w-4/5 p-7 rounded-xl shadow-lg'>
        <button className='text-lg bg-pink-500 text-white px-4 py-2 rounded-xl' >BOOK NOW</button>
      </div>
      </div>
      
      
  
    </header>
  ); 
};

export default Header;



