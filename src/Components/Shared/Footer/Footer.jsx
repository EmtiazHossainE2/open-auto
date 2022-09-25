import React from 'react';
import logo from '../../../Assets/logo.png'
import { FiPhoneCall } from 'react-icons/fi';
import { AiOutlineMail } from 'react-icons/ai';
import SocialIcon from '../../SocialIcon/SocialIcon';

const Footer = () => {
  return (
    <div className='container mx-auto px-8 py-6'>
      {/* Footer Top  */}
      <div className='flex justify-between items-center'>
        <img className='w-40 lg:w-48 cursor-pointer d-block mx-auto lg:mx-0' src={logo} alt="open-auto logo" />
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
        </div>
      </div>

      {/* Footer Bottom  */}
      <div className='flex items-center pb-5'>
        <p className='w-1/2'>Open Auto &#169; All Right Reserved</p>
        <SocialIcon/>
      </div>
    </div>
  );
};

export default Footer;