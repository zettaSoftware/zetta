import React from "react";

const Services = () => {
  return (
    <div name="service" className="w-full text-black my-6">
      <div className="max-w-[1240px] mx-auto py-6">
        <div className="">
          <h3 className="text-5xl font-bold mb-8">Services</h3>
          <h2>A website that serves services in the form of</h2>
          <h2>Development to Web Scraping</h2>
        </div>
        <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-4 gap-6">
          {/* Card */}
          <div className="rounded-xl relative">
            {/* Overlay */}
            <img
              className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
              src="https://res.cloudinary.com/hafidkrntn/image/upload/v1665544012/rwid/uiux_dnrjsq.jpg"
              alt="/"
            />
            <div className="border-2">
              <p className="text-xl ml-2 text-lg text-bold">
                UI UX Designer
              </p>
            </div>
          </div>

          {/* Card */}
          <div className="rounded-xl relative">
            {/* Overlay */}
            
            <img
              className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
              src="https://res.cloudinary.com/hafidkrntn/image/upload/v1665544012/rwid/mobile_dev_zr4g9k.jpg"
              alt="/"
            />
            <div className="border-2">
              <p className="text-xl ml-2 text-lg text-bold">
                Mobile Developer
              </p>
            </div>
          </div>

          {/* Card */}
          <div className="rounded-xl relative">
            {/* Overlay */}
            <img
              className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
              src="https://res.cloudinary.com/hafidkrntn/image/upload/v1665544013/rwid/scraping_mybid0.jpg"
              alt="/"
            />
            <div className="border-2">
              <p className="text-xl ml-2 text-lg text-bold">
                Web Scrapping
              </p>
            </div>
          </div>

          {/* Card */}
          <div className="rounded-xl relative">
            {/* Overlay */}
            <img
              className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
              src="https://res.cloudinary.com/hafidkrntn/image/upload/v1665544011/rwid/web_design_mlrcvz.jpg"
              alt="/"
            />
            <div className="border-2">
              <p className="text-xl ml-2 text-lg text-bold">
                Web Development
              </p>
            </div>
          </div>
    
          
        </div>
      </div>
    </div>
  );
};

export default Services;
