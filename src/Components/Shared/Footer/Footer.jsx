import React from 'react';
import logo from '../../../Assets/logo.png'
import { FiPhoneCall } from 'react-icons/fi';
import { AiOutlineMail } from 'react-icons/ai';
import SocialIcon from '../../SocialIcon/SocialIcon';

const Footer = () => {
  return (
    <div className='container mx-auto px-8 py-6 space-y-6 lg:space-y-0'>
      {/* Footer Top  */}
      <div className='flex flex-col lg:flex-row justify-between items-center'>
        <img className='w-40 lg:w-48 cursor-pointer d-block mx-auto lg:mx-0' src={logo} alt="open-auto logo" />
        <div className='flex justify-between lg:justify-evenly gap-x-5 lg:gap-x-16 text-[#cdcbcb]'>
          <div className='flex items-center gap-x-2 text-sm'>
            <FiPhoneCall />
            <a href='tel:+769 586 4558' target="_blank" rel="noopener noreferrer"
            > +769 586 4558 </a>
          </div>
          <div className='flex items-center gap-x-2 text-sm'>
            <AiOutlineMail />
            <a href='mailto:service@openauto.ca' target="_blank" rel="noopener noreferrer"
            > service@openauto.ca </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom  */}
      <div className='flex flex-col lg:flex-row items-center pb-5 gap-y-5 lg:gap-y-0'>
        <p className='lg:w-1/2'>Open Auto &#169; All Right Reserved</p>
        <div className='flex justify-between lg:hidden text-sm gap-x-5'>
          <a href="/" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
          <a href="/" target="_blank" rel="noopener noreferrer">Terms of use</a>
          <a href="/" target="_blank" rel="noopener noreferrer">Cookie Policy</a>
        </div>
        <SocialIcon/>
      </div>
    </div>
  );
};

export default Footer;