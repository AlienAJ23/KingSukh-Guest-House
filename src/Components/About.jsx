import React from "react";
import out from '../Resources/out.jpg';

const About = () => {
  return (
    <section id="about" className="flex flex-col md:flex-row justify-between items-center p-8 md:p-16">
      <img src={out} alt="Guest House" className="w-full md:w-1/2 rounded-md shadow-lg" />
      <div className="mt-8 md:mt-0 md:ml-8 text-center md:text-left">
        <h2 className="text-3xl font- text-left ">About Us</h2><br/>
        <h1 className="text-5xl font-bold text-left">The Best Holidays Start Here!</h1>
        <p className="mt-4 text-lg">Embark on a tranquil journey at our Kingsukh Guest House, enveloped by the scenic allure of Biharinath Hill, Baranti Hill, Susunia Hill, Joychandi Hill, Garhpanchkot, Baranti Dam, Maithon Dam, and the captivating Panchat Dam. Revel in the embrace of comfort, relish delightful meals, and unwind in our verdant garden oasis. Your ideal retreat beckons, promising a harmonious blend of nature's beauty and heartfelt hospitality. Explore the hidden gems of Purulia, creating memories that linger long after your stay.</p>
        <br /><a className="mt-4 text-lg text-blue-900 font-bold" href="https://www.google.com/maps/place/Kingsukh+Guest+House/@23.5862406,86.8597371,17z/data=!4m6!3m5!1s0x39f6e3fdd3ff9ebb:0x517a57e3f93c1807!8m2!3d23.5863324!4d86.8597904!16s%2Fg%2F11srygxjp6?entry=ttu&g_ep=EgoyMDI0MDgyMy4wIKXMDSoASAFQAw%3D%3D">Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156</a><br />
        <a className="mt-4 text-lg text-blue-900 font-bold" href="#">Contact us: +91 9007062180</a><br />
        <button className="mt-6 bg-pink-600 text-white px-6 py-3 rounded">BOOK NOW</button>
      </div>
    </section>
  );
};

export default About;

