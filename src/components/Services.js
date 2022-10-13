import React from "react";

const Services = () => {
  return (
    <div className="container w-full relative pb-8">
      <h3 className="text-5xl font-bold py-8">Services</h3>
      <div className="space-y-4">
      <div className="">
        <h2>A website that serves services in the form of</h2>
        <h2>Development to Web Scraping</h2>
      </div>
      <div className="flex relative justify-around mx-auto gap-x-4 gap-2">

        <div className="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <img
            src="https://res.cloudinary.com/hafidkrntn/image/upload/v1665544012/rwid/uiux_dnrjsq.jpg"
            alt="remote worker"
            className="w-[298px]"
          />
          <a href="/">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              UI UX Designer
            </h5>
          </a>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <img
            src="https://res.cloudinary.com/hafidkrntn/image/upload/v1665544012/rwid/mobile_dev_zr4g9k.jpg"
            alt="remote worker"
            className="w-[298px]"
          />
          <a href="/">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Mobile Developer
            </h5>
          </a>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <img
            src="https://res.cloudinary.com/hafidkrntn/image/upload/v1665544013/rwid/scraping_mybid0.jpg"
            alt="web scraping"
            className="w-[298px]"
          />
          <a href="/">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Web Scraping
            </h5>
          </a>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <img
            src="https://res.cloudinary.com/hafidkrntn/image/upload/v1665544011/rwid/web_design_mlrcvz.jpg"
            alt="web-development"
            className="w-[298px]"
          />
          <a href="/">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Web Development
            </h5>
          </a>
        </div>

        
      </div>
      </div>
    </div>
  );
};

export default Services;
