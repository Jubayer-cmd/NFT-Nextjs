import React from 'react';
import card from './../../assets/card/image 1.png';
import Image from 'next/image';
import { FaEthereum } from 'react-icons/fa';

export default function Card({ nft }: any) {
  const { name, image, price } = nft;

  return (
    <div className='bg-white p-2 m-2 rounded-md'>
      <div className='relative'>
        <Image src={card} alt='card' className='rounded-md' />
        <div className='flex -space-x-1 overflow-hidden absolute -bottom-3 left-5'>
          <Image
            className='inline-block h-8 w-8 rounded-full ring-2 ring-white'
            src='https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
            alt=''
            width={100}
            height={100}
          />
          <Image
            className='inline-block h-8 w-8 rounded-full ring-2 ring-white'
            src='https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
            alt=''
            width={100}
            height={100}
          />
          <Image
            className='inline-block h-8 w-8 rounded-full ring-2 ring-white'
            src='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80'
            alt=''
            width={100}
            height={100}
          />
          <Image
            className='inline-block h-8 w-8 rounded-full ring-2 ring-white'
            src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
            alt=''
            width={100}
            height={100}
          />
        </div>
      </div>
      <p className='font-sans font-semibold text-xl mt-5'>{name}</p>
      <div className='flex justify-between'>
        <p className='font-sans text-sm font-semibold mt-2 mb-6 text-[#00AC4F]'>
          <FaEthereum className='inline-block' /> {price} ETH
        </p>
        <p className='text-[#757575] text-sm font-sans'>1 of 129</p>
      </div>
      <hr />
      <div className='flex justify-between mt-3 items-center'>
        <p className='text-[#5539A8] px-5 py-2 font-sans bg-[#F5F5F5] rounded-full text-xs'>
          3h 50m 2s left
        </p>
        <p className='text-[#4F33A3] font-sans font-bold text-sm'>
          Place a bid
        </p>
      </div>
    </div>
  );
}
