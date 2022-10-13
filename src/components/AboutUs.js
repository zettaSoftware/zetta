import React from 'react'


const AboutUs = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src="https://res.cloudinary.com/hafidkrntn/image/upload/v1665471124/rwid/image_7_h5yezn.png" alt='/' />
        <div className='flex flex-col justify-center text-left'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Hire us in Upwork</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?
          </p>
          <button className='bg-[#0000FF] text-white w-[200px] rounded-md text-xl font-medium my-6 mx-auto md:mx-0 py-3'>Hire Us</button>
        </div>
      </div>
    </div>
  )
}

export default AboutUs