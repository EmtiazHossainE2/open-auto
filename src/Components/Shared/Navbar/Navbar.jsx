import React from 'react';
import logo from '../../../Assets/logo.png'
import { FiPhoneCall } from 'react-icons/fi';
import { AiOutlineMail } from 'react-icons/ai';


const Navbar = () => {
  return (
    <div className='container mx-auto px-5'>
      <div className='flex justify-between items-center'>
        <img className='w-48 lg:w-60 cursor-pointer d-block mx-auto lg:mx-0' src={logo} alt="open-auto logo" />
        <div className='hidden lg:flex justify-evenly gap-x-16 text-[#cdcbcb]'>
          <div className='flex items-center gap-x-2'>
            <FiPhoneCall />
            <a href='tel:+769 586 4558' target="_blank" rel="noopener noreferrer"
            > +769 586 4558 </a> 
          </div>
          <div className='flex items-center gap-x-2'>
            <AiOutlineMail />
            <a href='mailto:service@openauto.ca' target="_blank" rel="noopener noreferrer"
            > service@openauto.ca </a> 
          </div>
          <div>
            <a className='border-2 rounded-3xl px-5 py-2' href='https://play.google.com/store' target="_blank" rel="noopener noreferrer"
            > Download the mobile app </a> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;