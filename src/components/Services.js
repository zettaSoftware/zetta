import React from "react";

const Services = () => {
  return (
    <div className="container w-full relative pb-8">
      <h3 className="text-5xl font-bold py-8">Services</h3>
      <div className="relative space-y-4">
        <div className="">
          <h2>A website that serves services in the form of</h2>
          <h2>Development to Web Scraping</h2>
        </div>
        <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-4 gap-6">
          {/* Card */}
          <div className="rounded-xl relative">
            {/* Overlay */}
            <div className="absolute w-full h-full rounded-xl text-white">
              <button className="border-white rounded-lg px-8 bg-white text-black mx-2 absolute bottom-4">
                UI UX Designer
              </button>
            </div>
            <img
              className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
              src="https://res.cloudinary.com/hafidkrntn/image/upload/v1665544012/rwid/uiux_dnrjsq.jpg"
              alt="/"
            />
          </div>

          {/* Card */}
          <div className="rounded-xl relative">
            {/* Overlay */}
            <div className="absolute w-full h-full rounded-xl text-white">
              <button className="border-white rounded-lg px-8 bg-white text-black mx-2 absolute bottom-4">
                Mobile Developer
              </button>
            </div>
            <img
              className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
              src="https://res.cloudinary.com/hafidkrntn/image/upload/v1665544012/rwid/mobile_dev_zr4g9k.jpg"
              alt="/"
            />
          </div>

          {/* Card */}
          <div className="rounded-xl relative">
            {/* Overlay */}
            <div className="absolute w-full h-full rounded-xl text-white">
              <button className="border-white rounded-lg px-8 bg-white text-black mx-2 absolute bottom-4">
                Web Scraping
              </button>
            </div>
            <img
              className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
              src="https://res.cloudinary.com/hafidkrntn/image/upload/v1665544013/rwid/scraping_mybid0.jpg"
              alt="/"
            />
          </div>

          {/* Card */}
          <div className="rounded-xl relative">
            {/* Overlay */}
            <div className="absolute w-full h-full rounded-xl text-white">
              <button className="border-white rounded-lg px-8 bg-white text-black mx-2 absolute bottom-4">
                Web Development
              </button>
            </div>
            <img
              className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
              src="https://res.cloudinary.com/hafidkrntn/image/upload/v1665544011/rwid/web_design_mlrcvz.jpg"
              alt="/"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
