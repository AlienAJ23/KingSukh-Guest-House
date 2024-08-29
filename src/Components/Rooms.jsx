import React from "react";
import small from "../Resources/small.jpg";
import large from "../Resources/large.jpg";

const Rooms = () => {
    return (
      <section id="rooms" className="p-4 md:p-8 bg-gray-100">
        <p className="text-2xl  text-left-">Our Living Room</p>
        <h1 className="text-4xl font-medium  mt-4 w-full md:w-1/3">The Most Memorable Rest Time Starts Here.</h1>
        <div className="flex flex-col md:flex-row justify-around mt-8 h-auto">
          <div className="bg-white shadow-lg rounded-md overflow-hidden w-1/8 md:w-1/2 m-4 ">
            <img src={small} alt="Cozy Haven Room" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold">Cozy Haven Room</h3>
              <p className="mt-4 text-lg text-stone-500 ">Escape to comfort in our Cozy Haven Room, a snug retreat designed for intimate relaxation. <div className="font-medium">Starting from <a href="" className="text-black">Rs.1000/night.</a></div> </p>
              <button className="mt-6 bg-pink-500 text-white px-6 py-3 rounded">BOOK NOW</button>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-md overflow-hidden w-full md:w-1/2 m-4">
            <img src={large} alt="Spacious Serenity Suite" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold">Spacious Serenity Suite</h3>
              <p className="mt-4 text-lg text-stone-500">Indulge in luxury and ample space in our Spacious Serenity Suite, where tranquility meets roomy elegance.<div className="font-medium"> Starting from <a href="" className="text-black">Rs. 1500/night.</a></div></p>
              <button className="mt-6 bg-pink-500 text-white px-6 py-3 rounded">BOOK NOW</button>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Rooms;