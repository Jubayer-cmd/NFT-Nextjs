import Image from 'next/image';
import React from 'react';
import img1 from './../../assets/unsplash_F56Y7dgrAkc.png';
import img2 from './../../assets/unsplash_8uZPynIu-rQ.png';
import img3 from './../../assets/unsplash_Tyg0rVhOTrE.png';
import img4 from './../../assets/unsplash_wHJ5L9KGTl4.png';
import profile from './../../assets/Ellipse 95.png';
import pro1 from './../../assets/collection/Group 108.png';
import pro2 from './../../assets/collection/unsplash_5MTf9XyVVgM.png';
import pro3 from './../../assets/collection/unsplash_WjIB-6UxA5Q.png';
import pro4 from './../../assets/collection/Group 109.png';
import pro5 from './../../assets/collection/unsplash_fT49QnFucQ8.png';
export default function Collection() {
  return (
    <div>
      <div className='grid grid-cols-3 gap-10'>
        <div>
          <Image src={img1} alt='collection' />
          <div className='flex justify-between items-center mt-4'>
            <div className='flex items-center'>
              <Image src={profile} alt='collection' className='mr-2' />
              <div>
                <p className='font-sans font-semibold text-xl'>
                  The Futr Abstr
                </p>
                <p className='font-sans text-xs text-prime mt-1'>
                  10 in the stock
                </p>
              </div>
            </div>
            <div>
              <p className='font-sans text-xs text-[#3A3A3A]'>Highest Bid</p>
              <p className='font-sans text-sm text-[#3A3A3A] font-semibold mt-1'>
                0.25 ETH
              </p>
            </div>
          </div>
        </div>
        {/* //middle column */}
        <div className='border-r-2 border-gray-200'>
          <div className='flex'>
            <Image src={img2} alt='collection' className='mr-4' />
            <div>
              <p className='font-sans text-xl font-semibold'>The Futr Abstr</p>
              <div className='flex items-center mt-2'>
                <Image
                  src={profile}
                  alt='collection'
                  className='mr-2'
                  width={30}
                  height={30}
                />
                <div className='border border-[#00AC4F] rounded py-1 px-2 mx-2'>
                  <p className='text-[#00AC4F] font-sans font-semibold text-xs  '>
                    0.25 ETH
                  </p>
                </div>
                <p className='text-[#757575] text-xs font-sans'>1 of 8</p>
              </div>
              <button className='bg-[#3D00B7] text-white font-sans rounded-full py-3 px-5 mt-5'>
                Place a bid
              </button>
            </div>
          </div>
          <div className='flex my-8'>
            <Image src={img3} alt='collection' className='mr-4' />
            <div>
              <p className='font-sans text-xl font-semibold'>The Futr Abstr</p>
              <div className='flex items-center mt-2'>
                <Image
                  src={profile}
                  alt='collection'
                  className='mr-2'
                  width={30}
                  height={30}
                />
                <div className='border border-[#00AC4F] rounded py-1 px-2 mx-2'>
                  <p className='text-[#00AC4F] font-sans font-semibold text-xs  '>
                    0.25 ETH
                  </p>
                </div>
                <p className='text-[#757575] text-xs font-sans'>1 of 8</p>
              </div>
              <button className='border-2 border-[#220970] text-[#220970] font-sans rounded-full py-3 px-5 mt-5 hover:bg-[#220970] hover:text-white'>
                Place a bid
              </button>
            </div>
          </div>
          <div className='flex'>
            <Image src={img4} alt='collection' className='mr-4' />
            <div>
              <p className='font-sans text-xl font-semibold'>The Futr Abstr</p>
              <div className='flex items-center mt-2'>
                <Image
                  src={profile}
                  alt='collection'
                  className='mr-2'
                  width={30}
                  height={30}
                />
                <div className='border border-[#00AC4F] rounded py-1 px-2 mx-2'>
                  <p className='text-[#00AC4F] font-sans font-semibold text-xs  '>
                    0.25 ETH
                  </p>
                </div>
                <p className='text-[#757575] text-xs font-sans'>1 of 8</p>
              </div>
              <button className='border-2 border-[#220970] text-[#220970] font-sans rounded-full py-3 px-5 mt-5 hover:bg-[#220970] hover:text-white'>
                Place a bid
              </button>
            </div>
          </div>
        </div>
        {/* third column */}
        <div>
          <p className='font-mono text-xl font-semibold mb-1'>
            Top Collections over{' '}
          </p>
          <p className='font-sans text-xl font-semibold text-[#3D00B7] '>
            Last 7 days
          </p>
          <div className='grid grid-cols-1 divide-y'>
            <div className='grid grid-cols-5 items-center gap-5 py-4'>
              <p className='font-sans font-semibold text-xl'>1</p>
              <Image src={pro1} alt='collection' />
              <div className='col-span-2'>
                <p className='font-sans font-bold text-base'>CryptoFunks</p>
                <p className='font-sans font-semibold text-sm text-[#636363]'>
                  19,769.39
                </p>
              </div>
              <p className='font-sans font-bold text-lg text-[#14C8B0]'>
                +26.52%
              </p>
            </div>
            <div className='grid grid-cols-5 items-center gap-5 py-4'>
              <p className='font-sans font-semibold text-xl'>2</p>
              <Image src={pro5} alt='collection' />
              <div className='col-span-2'>
                <p className='font-sans font-bold text-base'>Cryptix</p>
                <p className='font-sans font-semibold text-sm text-[#636363]'>
                  2,769.39
                </p>
              </div>
              <p className='font-sans font-bold text-lg text-[#FF002E]'>
                +10.52%
              </p>
            </div>
            <div className='grid grid-cols-5 items-center gap-5 py-4'>
              <p className='font-sans font-semibold text-xl'>3</p>
              <Image src={pro2} alt='collection' />
              <div className='col-span-2'>
                <p className='font-sans font-bold text-base'>Frensware</p>
                <p className='font-sans font-semibold text-sm text-[#636363]'>
                  9,232.39
                </p>
              </div>
              <p className='font-sans font-bold text-lg text-[#14C8B0]'>
                +2.52%
              </p>
            </div>
            <div className='grid grid-cols-5 items-center gap-5 py-4'>
              <p className='font-sans font-semibold text-xl'>4</p>
              <Image src={pro4} alt='collection' />
              <div className='col-span-2'>
                <p className='font-sans font-bold text-base'>PunkArt</p>
                <p className='font-sans font-semibold text-sm text-[#636363]'>
                  3,769.39
                </p>
              </div>
              <p className='font-sans font-bold text-lg text-[#14C8B0]'>
                +1.52%
              </p>
            </div>
            <div className='grid grid-cols-5 items-center gap-5 py-4'>
              <p className='font-sans font-semibold text-xl'>5</p>
              <Image src={pro3} alt='collection' />
              <div className='col-span-2'>
                <p className='font-sans font-bold text-base'>Art Crypto</p>
                <p className='font-sans font-semibold text-sm text-[#636363]'>
                  10,769.39
                </p>
              </div>
              <p className='font-sans font-bold text-lg text-[#FF002E]'>
                +2.52%
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
