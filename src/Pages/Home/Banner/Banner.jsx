import React from 'react';
import { useForm } from 'react-hook-form';
import Pickup_Illustration from '../../../Assets/Pickup_Illustration.png'
import { RiFacebookFill, RiTwitterFill, RiYoutubeFill, RiLinkedinFill, RiInstagramFill } from 'react-icons/ri'
import { BsFillCaretDownSquareFill } from 'react-icons/bs'

const Banner = () => {

  const { register, formState: { errors }, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log('submit', data);
    reset()
  }

  return (
    <div className="container mx-auto px-6 ">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-x-12 pt-8 lg:pt-16 lg:pb-5">
        <div className='w-full lg:w-5/12 '>
          <div className="text-2xl lg:text-4xl space-y-2 text-center lg:text-left font-semibold">
            <h2>Vehicle maintenance</h2>
            <h2>From The Comfort of</h2>
            <h2>Your Home</h2>
          </div>
          <p className='text-lg py-8 text-center lg:text-left text-[#9c9999]'>Open Auto Soothes the hassle of maintaining your vehicle and helps you  deal with unexpected repairs worry-free</p>
          <div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
              <div className=''>
                <input
                  type="text"
                  placeholder='Enter Your Name'
                  className='px-3 text-sm w-full lg:w-7/12 py-2 border border-[#a8a8a8] rounded-2xl bg-[#0F141D]'
                  {...register('name', {
                    required: {
                      value: true,
                      message: 'Name Required !!',
                    },
                  })}
                />
                <p className='text-[13px] text-red-500 pl-2 pt-1'>{errors.name?.message}</p>
              </div>
              <div>
                <input
                  type="email"
                  placeholder='Enter Your Email'
                  className='px-3 text-sm w-full lg:w-7/12 py-2 border border-[#a8a8a8] rounded-2xl bg-[#0F141D]'
                  {...register('email', {
                    required: {
                      value: true,
                      message: 'Email Required !!',
                    },
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                      message: 'Invalid Email Provided !!',
                    },
                  })}
                />
                <p className='text-[13px] text-red-500 pl-2 pt-1'>{errors.email?.message}</p>
              </div>
              <button className='w-full lg:w-7/12 py-2 border border-[#a8a8a8] rounded-2xl bg-[#0F141D] hover:bg-[#5703a1] hover:border-[#5703a1]'>Submit</button>
            </form>
          </div>
        </div>
        <div className='lg:w-7/12 py-10 lg:py-0'>
          <img src={Pickup_Illustration} alt="Pickup_Illustration" />
        </div>
      </div>
      <div className='flex items-center'>
        <div className='w-6/12 hidden lg:flex justify-end text-4xl'>
          <BsFillCaretDownSquareFill className='rounded-full cursor-pointer' />
        </div>
        <div className='w-full lg:w-6/12 flex justify-evenly lg:justify-end gap-x-3 pr-5'>
          <a href="http://www.facebook.com" target="_blank" rel="noopener noreferrer"><RiFacebookFill className=' text-2xl' /></a>
          <a href="http://www.twitter.com" target="_blank" rel="noopener noreferrer"><RiTwitterFill className=' text-2xl' /></a>
          <a href="http://www.youtube.com" target="_blank" rel="noopener noreferrer"><RiYoutubeFill className=' text-2xl' /></a>
          <a href="http://www.linkedin.com" target="_blank" rel="noopener noreferrer"><RiLinkedinFill className=' text-2xl' /></a>
          <a href="http://www.instagram.com" target="_blank" rel="noopener noreferrer"><RiInstagramFill className=' text-2xl' /></a>
        </div>
      </div>
    </div>
  );
};

export default Banner;