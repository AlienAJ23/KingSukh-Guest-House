import React from "react";
import out from "../Resources/out.jpg";
import flower from "../Resources/flower.jpg";
import palash from "../Resources/palash.webp";
import ayodhya from "../Resources/ayodhya.webp";
import mithonDam from "../Resources/mithonDam.webp";
import trop from "../Resources/1.jpg";
import baranti from "../Resources/baranti.webp";
import recep from "../Resources/recep.jpg";
import service from "../Resources/service.jpg";
import header from "../Resources/header.jpg";
import room1 from "../Resources/room1.jpg";
import large from "../Resources/large.jpg";
import small from "../Resources/small.jpg";

const Gallery = () => {
    return (
      <section id="gallery" className="p-8 md:p-16 bg-gray-100">
        <h2 className="text-3xl font- text-center">GALLERY</h2>
        <br />
        <div><h3 className="text-xl text-stone-500">Scenaries and Enviornment</h3>
        <div className="mt-8 flex overflow-x-scroll">
          
          <img src={baranti} alt="Gallery Image 2" className="w-3/4 md:w-1/4 h-64 object-cover m-2 rounded-lg" />
          <img src={flower} alt="Gallery Image 2" className="w-3/4 md:w-1/4 h-64 object-cover m-2 rounded-lg" />
          <img src={palash} alt="Gallery Image 3" className="w-3/4 md:w-1/4 h-64 object-cover m-2 rounded-lg" />
          <img src={ayodhya} alt="Gallery Image 4" className="w-3/4 md:w-1/4 h-64 object-cover m-2 rounded-lg" />
          <img src={mithonDam} alt="Gallery Image 4" className="w-3/4 md:w-1/4 h-64 object-cover m-2 rounded-lg" />
          <img src={trop} alt="Gallery Image 4" className="w-3/4 md:w-1/4 h-64 object-cover m-2 rounded-lg" />
        </div>
        </div>
        <br />
        <div><h3 className="text-xl text-stone-500">Interior and Rooms</h3>
        <div className="mt-8 flex overflow-x-scroll">
          <img src={out} alt="Gallery Image 1" className="w-1/2 md:w-1/4 h-64 object-cover m-2 rounded-lg"/> 
          <img src={service} alt="Gallery Image 2" className="w-3/4 md:w-1/4 h-64 object-cover m-2 rounded-lg" />
          <img src={recep} alt="Gallery Image 1" className="w-3/4 md:w-1/4 h-64 object-cover m-2 rounded-lg"/>
          <img src={header} alt="Gallery Image 2" className="w-3/4 md:w-1/4 h-64 object-cover m-2 rounded-lg" />
          <img src={large} alt="Gallery Image 4" className="w-3/4 md:w-1/4 h-64 object-cover m-2 rounded-lg" />
          <img src={small} alt="Gallery Image 4" className="w-3/4 md:w-1/4 h-64 object-cover m-2 rounded-lg" />
          <img src={room1} alt="Gallery Image 3" className="w-3/4 md:w-2/3 h-64 object-cover m-2 rounded-lg" />
        </div>
        </div>
        
      </section>
    );
  };
  
  export default Gallery;
  