import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full mt-24 bg-[#000033] text-gray-300 py-y px-2">
      <div className="max-w-[1240px] mx-auto grid grid-cols-4 border-b-2 border-gray-600 py-8">
        <div className="col-span-2 pt-8 md:pt-2">
          <p className="text-left font-bold text-6xl">Zetta</p>
          <p className="text-left py-4">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2">Solutions</h6>
          <ul>
            <li className="py-1">UI UX Designer</li>
            <li className="py-1">Web Scrapping</li>
            <li className="py-1">Web Development</li>
            <li className="py-1">Mobile Development</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2">Agency</h6>
          <ul>
            <li className="py-1">About</li>
            <li className="py-1">Blog</li>
            <li className="py-1">Jobs</li>
            <li className="py-1">Press</li>
            <li className="py-1">Partners</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500">
        <p className="py-4">Copyright @2022 Zetta Agency</p>
        <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
         <button><FaFacebook /></button> 
         <button><FaInstagram /></button> 
         <button><FaTwitter /></button> 
         <button><FaGithub /></button> 
         <button><FaLinkedin /></button> 
        </div>
      </div>
    </div>
  );
};

export default Footer;
