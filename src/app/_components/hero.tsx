import Image from 'next/image';
import React from 'react';

import heroimg from './../../assets/hero.png';
import dot from './../../assets/Dot.png';

export default function Herosection() {
  return (
    <div className='max-w-screen-xl px-4 py-8 my-20 lg:px-8 mx-auto'>
      <div className='grid grid-cols-1 md:grid-cols-5 relative gap-10 md:gap-5 '>
        <div className='col-span-3 order-last md:order-first'>
          <h1 className='font-mono text-3xl md:text-5xl text-center md:text-left '>
            Discover, and collect Digital Art NFTs
          </h1>
          <div className='w-100 md:w-8/12'>
            <p className='font-sans my-10 text-xl text-prime text-center md:text-left'>
              Digital marketplace for crypto collectibles and non-fungible
              tokens (NFTs). Buy, Sell, and discover exclusive digital assets.
            </p>
          </div>
          <div className='text-center md:text-left'>
            <button className='text-xl mx- font-sans bg-[#3D00B7] px-5 py-3 rounded-full text-white'>
              Explore Now
            </button>
          </div>
          <div className='ml-5 md:ml-0 flex mt-8 font-mono text-center gap-9'>
            <div>
              <p className='text-3xl md:text-5xl '>98k+</p>
              <p className='font-sans text-prime text-xl'>Artwork</p>
            </div>
            <div>
              <p className='text-3xl md:text-5xl'>12k+</p>
              <p className='font-sans text-prime text-xl'>Auction</p>
            </div>
            <div>
              <p className='text-3xl md:text-5xl'>15k+</p>
              <p className='font-sans text-prime text-xl'>Artist</p>
            </div>
          </div>
          <Image
            src={dot}
            alt='dot image'
            className='absolute bottom-0 -left-14 -z-10 w-56 order-first md:order-last'
          />
        </div>

        <div className='col-span-2'>
          <Image src={heroimg} alt='hero-img' />
        </div>
      </div>
    </div>
  );
}
