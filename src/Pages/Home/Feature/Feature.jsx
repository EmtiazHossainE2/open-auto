import React from 'react';
import pickuService from '../../../Assets/picku service.png'

const Feature = () => {
  return (
    <div className='container mx-auto px-5 py-20 bg-[#141821]'>
      <div className="flex flex-col-reverse lg:flex-row items-center gap-x-5 gap-y-12">
        <div className='lg:w-1/2 flex justify-center items-center'>
          <img className='w-[75%]' src={pickuService} alt="Picku_Service" />
        </div>
        <div className='lg:w-1/2 text-center lg:text-left'>
          <h2 className='text-4xl font-semibold '>Focused on <br className='hidden lg:block'/> Time Saving</h2>
          <p className='py-6 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis maxime enim aliquam fugit, reprehenderit sint voluptate, eveniet tempore doloremque, iusto quae. Quisquam reiciendis facere est aspernatur voluptatibus a in nulla dignissimos harum optio illum numquam, dolore, similique omnis repudiandae. Voluptatem quam tenetur amet repellat. Architecto in consequuntur, fugiat perferendis deserunt .</p>
          <a className='border-2 rounded-3xl px-6 py-2 ' href='https://play.google.com/store' target="_blank" rel="noopener noreferrer"> Download the mobile app </a>
        </div>
      </div>
    </div>
  );
};

export default Feature;