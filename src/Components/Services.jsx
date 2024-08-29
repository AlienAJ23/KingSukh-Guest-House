const Services = () => {
    return (
      <section id="services" className="p-8 md:p-16 bg-cover bg-center text-center bg-services-image">
        <div className="p-8 md:p-16 bg-gray-100 ">
        <h2 className="text-2xl ">Our Services</h2>
        <h1 className="text-4xl font-bold  mt-4">Strive Only For The Best.</h1>
        <div className="flex flex-wrap justify-around mt-8">
          <div className="w-full md:w-1/4 p-4">
            <i className="p-2.5 ri-shield-star-line text-4xl  bg-blue-200 text-blue-500 rounded-full"></i>
            <h3 className="text-xl mt-4">High Class Security</h3>
          </div>
          <div className="w-full md:w-1/4  p-4">
            <i className="p-2.5 border ri-24-hours-line text-4xl bg-pink-200 text-pink-500 rounded-full"></i>
            <h3 className="text-xl mt-4">24 Hours Room Service</h3>
          </div>
          <div className="w-full md:w-1/4 p-4">
            <i className="p-2.5 ri-restaurant-2-fill text-4xl bg-purple-200 text-purple-500 rounded-full"></i>
            <h3 className="text-xl mt-4">Restaurant</h3>
          </div>
          <div className="w-full md:w-1/4 p-4">
            <i className="p-2.5 ri-map-2-line text-4xl bg-pink-300 text-pink-700 rounded-full"></i>
            <h3 className="text-xl mt-4">Tourist Guide Support</h3>
          </div>
        </div>
        </div>
      </section>
    );
  };
  
  export default Services;
  