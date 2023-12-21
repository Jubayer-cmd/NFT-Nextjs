import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { IoLogoLinkedin } from 'react-icons/io5';
export default function Footers() {
  return (
    <div className='mt-24'>
      <div className='grid grid-cols-6 gap-10 justify-betweeen'>
        <div className='col-span-6 md:col-span-2'>
          <p className='font-mono font-bold text-2xl'>NFters</p>
          <p className='font-sans  text-base my-8 text-[#565656]'>
            The world’s first and largest digital marketplace for crypto
            collectibles and non-fungible tokens (NFTs). Buy, sell, and discover
            exclusive digital items.{' '}
          </p>
          <div className='flex gap-6 text-4xl'>
            <button>
              <FaFacebook className='text-[#3B5998]' />
            </button>
            <button>
              <FaXTwitter />
            </button>
            <button>
              <IoLogoLinkedin className='text-[#007AB9]' />
            </button>
          </div>
        </div>
        <div className='col-span-3 md:col-span-1'>
          <p className='font-sans font-semibold text-lg mb-4'>Market Place</p>
          <div className='flex flex-col items-start  gap-2 font-sans text-base text-[#3D3D3D] font-medium'>
            <button className='hover:text-blue-600'>All NFTs</button>
            <button className='hover:text-blue-600'>New</button>
            <button className='hover:text-blue-600'>Art</button>
            <button className='hover:text-blue-600'>Sports</button>
            <button className='hover:text-blue-600'>Utility</button>
            <button className='hover:text-blue-600'>Music</button>
            <button className='hover:text-blue-600'>Domain Name</button>
          </div>
        </div>
        <div className='col-span-3 md:col-span-1'>
          <p className='font-sans font-semibold text-lg mb-4'>My Account</p>
          <div className='flex flex-col items-start gap-2 font-sans text-base text-[#3D3D3D] font-medium'>
            <button className='hover:text-blue-600'>Profile</button>
            <button className='hover:text-blue-600'>Favorite</button>
            <button className='hover:text-blue-600'>My Collections</button>
            <button className='hover:text-blue-600'>Settings</button>
          </div>
        </div>
        <div className='col-span-6 md:col-span-2'>
          <p className='font-sans font-semibold text-lg mb-4'>
            Stay in the loop
          </p>
          <p className='font-sans text-[#363639] text-base'>
            Join our mailing list to stay in the loop with our newest feature
            releases, NFT drops, and tips and tricks for navigating NFTs.
          </p>

          <div className='relative max-w-lg mt-8'>
            <label className='sr-only' htmlFor='email'>
              Email
            </label>
            <input
              className='w-full rounded-full border-gray-200 bg-gray-100 p-4 pe-32 text-sm font-medium'
              id='email'
              type='email'
              placeholder='Enter your email address....'
            />
            <button className='absolute end-1 font-sans top-1/2 -translate-y-1/2 rounded-full bg-[#2639ED] px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700'>
              Subscibe Now
            </button>
          </div>
        </div>
      </div>
      <hr className='mt-20' />
    </div>
  );
}
