import Image from 'next/image';
import React from 'react';

import heroimg from './../../assets/hero.png';
import dot from './../../assets/Dot.png';

export default function Herosection() {
  return (
    <div className=''>
      <div className='grid grid-cols-5 relative'>
        <div className='col-span-3'>
          <h1 className='font-mono text-5xl'>
            Discover, and collect Digital Art NFTs{' '}
          </h1>
          <div className='w-100 md:w-8/12'>
            <p className='font-sans my-10 text-xl text-prime'>
              Digital marketplace for crypto collectibles and non-fungible
              tokens (NFTs). Buy, Sell, and discover exclusive digital assets.
            </p>
          </div>

          <button className='text-xl font-sans bg-[#3D00B7] px-5 py-3 rounded-full text-white'>
            Explore Now
          </button>
          <div className='flex mt-8 font-mono text-center gap-9'>
            <div>
              <p className='text-5xl'>98k+</p>
              <p className='font-sans text-prime text-xl'>Artwork</p>
            </div>
            <div>
              <p className='text-5xl'>12k+</p>
              <p className='font-sans text-prime text-xl'>Auction</p>
            </div>
            <div>
              <p className='text-5xl'>15k+</p>
              <p className='font-sans text-prime text-xl'>Artist</p>
            </div>
          </div>
          <Image
            src={dot}
            alt='dot image'
            className='absolute bottom-0 -left-14 -z-10 w-56'
          />
        </div>

        <div className='col-span-2'>
          <Image src={heroimg} alt='hero-img' />
        </div>
      </div>
    </div>
  );
}
