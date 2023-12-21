import Image from 'next/image';
import React from 'react';
import profile from './../../assets/Ellipse 95.png';
import img1 from './../../assets/feature/unsplash_9anj7QWy-2g.png';
import img2 from './../../assets/feature/unsplash_F56Y7dgrAkc (1).png';
import img3 from './../../assets/feature/unsplash_F56Y7dgrAkc (2).png';
import img4 from './../../assets/feature/unsplash_F56Y7dgrAkc (3).png';
import img5 from './../../assets/feature/unsplash_LpbyDENbQQg.png';
import img6 from './../../assets/feature/unsplash_pVoEPpLw818.png';
export default function Feature() {
  return (
    <div className='mt-20 py-10 bg-[#D9E0EC33] p-2'>
      <p className='font-mono text-3xl font-semibold'>
        Collection Featured NFTs
      </p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-16 md:gap-10'>
        <div>
          <div className='flex'>
            <Image src={img2} alt=' ' />
            <div className='ml-4'>
              <Image src={img1} alt=' ' />
              <Image src={img5} alt=' ' className='my-5' />
              <Image src={img6} alt=' ' />
            </div>
          </div>
          <p className='font-sans text-lg font-semibold my-3'>
            Amazing Collection
          </p>
          <div className='flex justify-between items-center'>
            <div className='flex items-center'>
              <Image src={profile} alt='collection' className='mr-2' />
              <p className='font-sans font-bold'>by Arkhan</p>
            </div>
            <button className='border-2 border-[#2639ED] py-2 px-3 rounded-full text-[#2639ED] font-sans text-xs hover:bg-[#2639ED] hover:text-white'>
              Total 54 Items
            </button>
          </div>
        </div>
        <div>
          <div className='flex'>
            <Image src={img3} alt=' ' />
            <div className='ml-4'>
              <Image src={img5} alt=' ' />
              <Image src={img1} alt=' ' className='my-5' />
              <Image src={img6} alt=' ' />
            </div>
          </div>
          <p className='font-sans text-lg font-semibold my-3'>
            Amazing Collection
          </p>
          <div className='flex justify-between items-center'>
            <div className='flex items-center'>
              <Image src={profile} alt='collection' className='mr-2' />
              <p className='font-sans font-bold'>by Arkhan</p>
            </div>
            <button className='border-2 border-[#2639ED] py-2 px-3 rounded-full text-[#2639ED] font-sans text-xs hover:bg-[#2639ED] hover:text-white'>
              Total 54 Items
            </button>
          </div>
        </div>
        <div>
          <div className='flex'>
            <Image src={img4} alt=' ' />
            <div className='ml-4'>
              <Image src={img6} alt=' ' />
              <Image src={img1} alt=' ' className='my-5' />
              <Image src={img5} alt=' ' />
            </div>
          </div>
          <p className='font-sans text-lg font-semibold my-3'>
            Amazing Collection
          </p>
          <div className='flex justify-between items-center'>
            <div className='flex items-center'>
              <Image src={profile} alt='collection' className='mr-2' />
              <p className='font-sans font-bold'>by Arkhan</p>
            </div>
            <button className='border-2 border-[#2639ED] py-2 px-3 rounded-full text-[#2639ED] font-sans text-xs hover:bg-[#2639ED] hover:text-white'>
              Total 54 Items
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
