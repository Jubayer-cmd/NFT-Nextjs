import Image from 'next/image';
import React from 'react';
import people from './../../assets/Group 110.png';
export default function Section() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-5 mx-auto items-center justify-between gap-10 mt-20'>
      <Image
        src={people}
        alt='people image'
        className='col-span-5 md:col-span-3 order-last md:order-first'
      />
      <div className='col-span-5 md:col-span-2 order-first md:order-last'>
        <h4 className='font-mono font-semibold text-2xl text-center md:text-left'>
          Create and <br /> sell your NFTs
        </h4>
        <p className='font-sans text-[#636363] text-base my-9 text-center md:text-left'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ac
          phasellus placerat a pellentesque tellus sed egestas. Et tristique
          dictum sit tristique sed non. Lacinia lorem id consectetur pretium
          diam ut. Pellentesque eu sit blandit fringilla risus faucibus.
        </p>
<div className='text-center md:text-left'>        <button className='bg-[#3D00B7] border-2 border-[#3D00B7]  px-6 py-3 rounded-full font-sans font-semibold text-xl md:text-2xl text-white hover:text-black hover:bg-white'>
          Sign Up Now
        </button></div>
      </div>
    </div>
  );
}
