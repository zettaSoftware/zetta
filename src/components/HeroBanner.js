import React from "react";

const HeroBanner = () => {
  return (
    <div name="home" className="w-full flex flex-col justify-between">
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto py-20">
        <div className="flex flex-col md:items-start w-full px-2 py-8">
          <h1 className="py-3 text-3xl md:text-5xl font-bold">
            Best Technology
          </h1>
          <h1 className="py-3 text-3xl md:text-5xl font-bold">
            Service For You In
          </h1>
          <h1 className="py-3 text-3xl md:text-5xl font-bold">
            4.0 in The World
          </h1>
          <p>
            A website that serves services in the form of
          </p>
          <p>
          Development to Web Scraping
          </p>
          <button className="py-3 px-6 rounded-lg text-2xl bg-[#0000FF] text-white my-4">
            Contact Us
          </button>
        </div>
        <div>
          <img
            className="w-full py-12"
            src="https://res.cloudinary.com/hafidkrntn/image/upload/v1665544014/rwid/banner_1_c2bvho.jpg"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
