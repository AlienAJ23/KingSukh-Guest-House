import React from "react";
import fb from "../Resources/facebook.png";
import insta from "../Resources/instagram.png";
import twitter from "../Resources/twitter.png";
import yt from "../Resources/youtube.png";

const Footer = () => {
    return (
      <footer className="bg-black text-stone-500 p-8 md:pt-16 pb-0 ">
        <div className="pb-20">
        <div className="flex flex-wrap md:flex-row justify-between mb-8 pl-2 pr-2 ">
          <div className="mb-8 md:mb-0 w-full md:w-1/4 pt-8">
            <h2 className="text-2xl font-medium text-left">Kingsukh Guest House</h2><br />
            <p className="mt-4 text-lg text-left">Discover a world of comfort, luxury, and adventure as you explore our curated selection of hotels, making every moment of your getaway truly extraordinary.</p><br />
            <button className="mt-6 bg-pink-500 text-white px-6 py-3 rounded mr-3 md:text-center">BOOK NOW</button>
          </div>
          <div className="mb-8 md:mb-0 pt-8">
            <h3 className="text-xl font-medium">QUICK LINKS</h3><br />
            <ul className="mt-4 space-y-2 text-lg">
              <li>Browse Destinations</li>
              <li>Special Offers & Packages</li>
              <li>Room Types & Amenities</li>
              <li>Customer Reviews & Ratings</li>
              <li>Travel Tips & Guides</li>
            </ul>
          </div>
          <div className="mb-8 md:mb-0 pt-8">
            <h3 className="text-xl font-medium">OUR SERVICES</h3><br />
            <ul className="mt-4 space-y-2 text-lg">
              <li>Concierge Assistance</li>
              <li>Flexible Booking Options</li>
              <li>Airport Transfers</li>
              <li>Wellness & Recreation</li>
            </ul>
          </div>
          <div className="mb-8 md:mb-0 w-full md:w-1/4 pt-8">
            <h3 className="text-xl font-medium">CONTACT US</h3><br />
            <ul className="text-lg space-y-2">
              <li><p className="mt-4 text-lg">Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156</p></li>
              <li>kkgosh0099@gmail.com</li>
              <li>+91 9007062180</li>
            </ul>
            <div className="flex mt-4" >
              <img src={fb} alt="facebook" className="h-10 m-2"/>
              <img src={insta} alt="Instagram" className="h-10 m-2"/>
              <img src={twitter} alt="Twitter" className="h-10 m-2"/>
              <img src={yt} alt="Youtube" className="h-10 m-2" />
            </div>
          </div>
        </div>
        </div>
        <div className="mt-8 mb-0 pb-1 text-center text-lg">
          <p>Copyright © 2024 Kingsukh Guest House. All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  