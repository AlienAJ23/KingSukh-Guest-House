const Contact = () => {
    return (
      <section id="contact" className="p-8 md:p-16 bg-pink-500 flex flex-col md:flex-row md:bg-stone-200">
        <div className="p-8 md:p-16 m-6 max-h-full bg-pink-600 rounded-3xl shadow-lg">
          <h2 className="text-3xl  text-white">Contact Us</h2>
          <p className="mt-4 text-white"><i className="ri-map-pin-line "></i> Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156</p>
          <p className="mt-4 text-white"><i className="ri-mail-line "></i> kkgosh0099@gmail.com</p>
          <p className="mt-4 text-white"><i className="ri-phone-line "></i> +91 9007062180</p>
          <div className="flex mt-4">
            <i className="ri-facebook-fill text-3xl mx-2 text-white"></i>
            <i className="ri-instagram-fill text-3xl mx-2 text-white"></i>
            <i className="ri-youtube-fill text-3xl mx-2 text-white"></i>
            <i className="ri-twitter-fill text-3xl mx-2 text-white"></i>
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0 bg-white p-2 md:p-4 rounded-3xl shadow-lg">
          <h2 className="text-3xl font-medium">Send a Message</h2>
          <form className="mt-4">
            <div className="flex flex-col md:flex-row md:space-x-4">
              <input type="text" placeholder="First Name" className="p-3 border border-gray-300 rounded-md w-full md:w-1/2 mb-4 md:mb-0" />
              <input type="text" placeholder="Last Name" className="p-3 border border-gray-300 rounded-md w-full md:w-1/2 mb-4 md:mb-0" />
            </div>
            <input type="email" placeholder="Email Address" className="p-3 border border-gray-300 rounded-md w-full mb-4" />
            <input type="text" placeholder="Mobile Number" className="p-3 border border-gray-300 rounded-md w-full mb-4" />
            <textarea placeholder="Send a Message" className="p-3 border border-gray-300 rounded-md w-full h-32 mb-4"></textarea>
            <button className="bg-pink-500 text-lg text-white px-6 py-3 rounded-xl">Send</button>
          </form>
        </div>
      </section>
    );
  };
  
  export default Contact;
  