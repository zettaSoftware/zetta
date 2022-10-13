import React from "react";

const Product = () => {
  return (
    <div name="product" className="w-full text-black my-24">
      <div className="relative py-8">
        <h3 className="text-5xl font-bold py-8">Paket Service Terbaik</h3>
        <h2>Sebuah Website yang melayani service berupa</h2>
        <h2>Development hingga service Web Scraping</h2>
      </div>
      <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-4 gap-6">
        <div className="relative p-4 w-full max-w-sm bg-white rounded-lg border shadow-md sm:p-8 hover:border-blue-700 hover:scale-105 duration-300">
          <h5 className="mb-4 text-xl font-medium text-gray-500">
            UI UX Design
          </h5>
          <p className="py-6 text-gray-500">
            Sebuah Website yang melayani service berupa development hingga
            service web scrapping
          </p>
          <div className="flex items-baseline text-gray-900">
            <span className="text-[#0000FF] text-3xl font-bold">Rp </span>
            <span className="text-[#0000FF] text-4xl font-semibold tracking-tight">
              3.5Jt
            </span>
            <span className="ml-1 text-xl font-normal text-gray-500">
              /project
            </span>
          </div>
          {/* <!-- List --> */}
          <ul className="my-7 space-y-5">
            <li className="flex space-x-3">
              {/* <!-- Icon --> */}
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-5 h-5 text-blue-600"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Check icon</title>
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500">
                2 team members
              </span>
            </li>
            <li className="flex space-x-3">
              {/* <!-- Icon --> */}
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-5 h-5 text-blue-600"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Check icon</title>
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500">
                20GB Cloud storage
              </span>
            </li>
            <li className="flex space-x-3">
              {/* <!-- Icon --> */}
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-5 h-5 text-blue-600"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Check icon</title>
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500">
                Integration help
              </span>
            </li>
            <li className="flex space-x-3 line-through decoration-gray-500">
              {/* <!-- Icon --> */}
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-5 h-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Check icon</title>
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500">
                Sketch Files
              </span>
            </li>
            <li className="flex space-x-3 line-through decoration-gray-500">
              {/* <!-- Icon --> */}
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-5 h-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Check icon</title>
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500">
                API Access
              </span>
            </li>
            <li className="flex space-x-3 line-through decoration-gray-500">
              {/* <!-- Icon --> */}
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-5 h-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Check icon</title>
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500">
                Complete documentation
              </span>
            </li>
            <li className="flex space-x-3 line-through decoration-gray-500">
              {/* <!-- Icon --> */}
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-5 h-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Check icon</title>
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500">
                24×7 phone &amp; email support
              </span>
            </li>
          </ul>
          <button
            type="button"
            className="text-blue-700 border-2 border-blue-700 bg-white hover:text-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
          >
            Choose plan
          </button>
        </div>

        <div className="relative p-4 w-full max-w-sm bg-white rounded-lg border shadow-md hover:border-blue-700 sm:p-8 hover:scale-105 duration-300">
          <h5 className="mb-4 text-xl font-medium text-gray-500">
            Web Scraping
          </h5>
          <p className="py-6 text-gray-500">
            Sebuah Website yang melayani service berupa development hingga
            service web scrapping
          </p>
          <div className="flex items-baseline text-gray-900">
            <span className="text-[#0000FF] text-3xl font-bold">Rp </span>
            <span className="text-[#0000FF] text-4xl font-semibold tracking-tight">
              2.5Jt
            </span>
            <span className="ml-1 text-xl font-normal text-gray-500">
              /project
            </span>
          </div>
          {/* <!-- List --> */}
          <ul className="my-7 space-y-5">
            <li className="flex space-x-3">
              {/* <!-- Icon --> */}
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-5 h-5 text-blue-600"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Check icon</title>
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500">
                2 team members
              </span>
            </li>
            <li className="flex space-x-3">
              {/* <!-- Icon --> */}
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-5 h-5 text-blue-600"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Check icon</title>
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500">
                20GB Cloud storage
              </span>
            </li>
            <li className="flex space-x-3">
              {/* <!-- Icon --> */}
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-5 h-5 text-blue-600"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Check icon</title>
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500">
                Integration help
              </span>
            </li>
            <li className="flex space-x-3 line-through decoration-gray-500">
              {/* <!-- Icon --> */}
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-5 h-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Check icon</title>
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500">
                Sketch Files
              </span>
            </li>
            <li className="flex space-x-3 line-through decoration-gray-500">
              {/* <!-- Icon --> */}
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-5 h-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Check icon</title>
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500">
                API Access
              </span>
            </li>
            <li className="flex space-x-3 line-through decoration-gray-500">
              {/* <!-- Icon --> */}
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-5 h-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Check icon</title>
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500">
                Complete documentation
              </span>
            </li>
            <li className="flex space-x-3 line-through decoration-gray-500">
              {/* <!-- Icon --> */}
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-5 h-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Check icon</title>
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500">
                24×7 phone &amp; email support
              </span>
            </li>
          </ul>
          <button
            type="button"
            className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
          >
            Choose plan
          </button>
        </div>

        <div className="relative p-4 w-full max-w-sm bg-white rounded-lg border shadow-md hover:border-blue-700 sm:p-8 hover:scale-105 duration-300">
          <h5 className="mb-4 text-xl font-medium text-gray-500">
            Fullstack Webdev
          </h5>
          <p className="py-6 text-gray-500">
            Sebuah Website yang melayani service berupa development hingga
            service web scrapping
          </p>
          <div className="flex items-baseline text-gray-900">
            <span className="text-[#0000FF] text-3xl font-bold">Rp </span>
            <span className="text-[#0000FF] text-4xl font-semibold tracking-tight">
              2.5Jt
            </span>
            <span className="ml-1 text-xl font-normal text-gray-500">
              /project
            </span>
          </div>
          {/* <!-- List --> */}
          <ul className="my-7 space-y-5">
            <li className="flex space-x-3">
              {/* <!-- Icon --> */}
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-5 h-5 text-blue-600"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Check icon</title>
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500">
                2 team members
              </span>
            </li>
            <li className="flex space-x-3">
              {/* <!-- Icon --> */}
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-5 h-5 text-blue-600"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Check icon</title>
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500">
                20GB Cloud storage
              </span>
            </li>
            <li className="flex space-x-3">
              {/* <!-- Icon --> */}
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-5 h-5 text-blue-600"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Check icon</title>
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500">
                Integration help
              </span>
            </li>
            <li className="flex space-x-3 line-through decoration-gray-500">
              {/* <!-- Icon --> */}
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-5 h-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Check icon</title>
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500">
                Sketch Files
              </span>
            </li>
            <li className="flex space-x-3 line-through decoration-gray-500">
              {/* <!-- Icon --> */}
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-5 h-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Check icon</title>
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500">
                API Access
              </span>
            </li>
            <li className="flex space-x-3 line-through decoration-gray-500">
              {/* <!-- Icon --> */}
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-5 h-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Check icon</title>
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500">
                Complete documentation
              </span>
            </li>
            <li className="flex space-x-3 line-through decoration-gray-500">
              {/* <!-- Icon --> */}
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-5 h-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Check icon</title>
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500">
                24×7 phone &amp; email support
              </span>
            </li>
          </ul>
          <button
            type="button"
            className="text-blue-700 border-2 border-blue-700 bg-white hover:text-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
          >
            Choose plan
          </button>
        </div>

        <div className="relative p-4 w-full max-w-sm bg-white rounded-lg border shadow-md hover:border-blue-700 sm:p-8 hover:scale-105 duration-300">
          <h5 className="mb-4 text-xl font-medium text-gray-500">
            Fullstack Mobile Dev
          </h5>
          <p className="py-6 text-gray-500">
            Sebuah Website yang melayani service berupa development hingga
            service web scrapping
          </p>
          <div className="flex items-baseline text-gray-900">
            <span className="text-[#0000FF] text-3xl font-bold">Rp </span>
            <span className="text-[#0000FF] text-4xl font-semibold tracking-tight">
              2.5jt
            </span>
            <span className="ml-1 text-xl font-normal text-gray-500">
              /project
            </span>
          </div>
          {/* <!-- List --> */}
          <ul className="my-7 space-y-5">
            <li className="flex space-x-3">
              {/* <!-- Icon --> */}
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-5 h-5 text-blue-600"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Check icon</title>
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500">
                2 team members
              </span>
            </li>
            <li className="flex space-x-3">
              {/* <!-- Icon --> */}
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-5 h-5 text-blue-600"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Check icon</title>
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500">
                20GB Cloud storage
              </span>
            </li>
            <li className="flex space-x-3">
              {/* <!-- Icon --> */}
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-5 h-5 text-blue-600"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Check icon</title>
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500">
                Integration help
              </span>
            </li>
            <li className="flex space-x-3 line-through decoration-gray-500">
              {/* <!-- Icon --> */}
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-5 h-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Check icon</title>
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500">
                Sketch Files
              </span>
            </li>
            <li className="flex space-x-3 line-through decoration-gray-500">
              {/* <!-- Icon --> */}
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-5 h-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Check icon</title>
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500">
                API Access
              </span>
            </li>
            <li className="flex space-x-3 line-through decoration-gray-500">
              {/* <!-- Icon --> */}
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-5 h-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Check icon</title>
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500">
                Complete documentation
              </span>
            </li>
            <li className="flex space-x-3 line-through decoration-gray-500">
              {/* <!-- Icon --> */}
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-5 h-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Check icon</title>
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500">
                24×7 phone &amp; email support
              </span>
            </li>
          </ul>
          <button
            type="button"
            className="text-blue-700 border-2 border-blue-700 bg-white hover:text-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
          >
            Choose plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
