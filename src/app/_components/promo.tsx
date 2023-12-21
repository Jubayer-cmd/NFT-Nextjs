import React from 'react';
import card from './../../assets/card-tick-1 1.png';
import chart from './../../assets/chart-square 2.png';
import Image from 'next/image';
export default function PromoSection() {
  return (
    <div className='bg-[#D9E0EC33] my-20 py-10 md:py-20'>
      <div className='grid grid-cols-1 md:grid-cols-3 justify-between gap-8 md:gap-16'>
        <div className='text-center '>
          <h3 className='font-mono text-xl md:text-2xl font-semibold mx-auto text-center'>
            The amazing NFT art of the world here
          </h3>
        </div>
        <div className='flex justify-between mx-auto p-2'>
          <div>
            <Image
              src={card}
              alt=''
              width={60}
              height={60}
              className='pr-2 mt-1'
            />
          </div>
          <div>
            <p className='font-mono text-base md:text-xl font-semibold'>Fast Transaction</p>
            <p className='font-sans text-prime text-sm mt-2 '>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              etiam viverra tellus imperdiet.
            </p>
          </div>
        </div>
        <div className='flex justify-between mx-auto p-2'>
          <div>
            <Image
              src={chart}
              alt=''
              width={60}
              height={60}
              className='pr-2 mt-1'
            />
          </div>
          <div>
            <p className='font-mono text-base md:text-xl font-semibold'>
              Growth Transaction
            </p>
            <p className='font-sans text-prime text-sm mt-2'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              etiam viverra tellus
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
