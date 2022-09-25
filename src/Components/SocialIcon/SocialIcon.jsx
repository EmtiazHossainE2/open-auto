import React from 'react';
import { RiFacebookFill, RiTwitterFill, RiYoutubeFill, RiLinkedinFill, RiInstagramFill } from 'react-icons/ri'

const SocialIcon = () => {
  return (
    <div className='w-full lg:w-6/12 flex justify-evenly lg:justify-end gap-x-3 pr-5'>
      <a href="http://www.facebook.com" target="_blank" rel="noopener noreferrer"><RiFacebookFill className=' text-xl' /></a>
      <a href="http://www.twitter.com" target="_blank" rel="noopener noreferrer"><RiTwitterFill className=' text-xl' /></a>
      <a href="http://www.youtube.com" target="_blank" rel="noopener noreferrer"><RiYoutubeFill className=' text-xl' /></a>
      <a href="http://www.linkedin.com" target="_blank" rel="noopener noreferrer"><RiLinkedinFill className=' text-xl' /></a>
      <a href="http://www.instagram.com" target="_blank" rel="noopener noreferrer"><RiInstagramFill className=' text-xl' /></a>
    </div>
  );
};

export default SocialIcon;