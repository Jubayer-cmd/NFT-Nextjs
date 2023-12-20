import Image from 'next/image'
import React from 'react'
import people from './../../assets/Group 110.png';
export default function Section() {
  return (
    <div>
      <div className='grid grid-cols-5 items-center justify-between gap-10 mt-20'>
        <Image src={people} alt="people image" className='col-span-3' />
        <div className='col-span-2'>
          <h4 className='font-mono font-semibold text-2xl '>Create and <br /> sell your NFTs</h4>
          <p className='font-sans text-[#636363] text-base my-9'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ac phasellus placerat a pellentesque tellus sed egestas.
             Et tristique dictum sit tristique sed non. Lacinia lorem id consectetur pretium diam ut.
              Pellentesque eu sit blandit fringilla risus faucibus.
          </p>
          <button className='bg-[#3D00B7] border-2 border-[#3D00B7]  px-6 py-3 rounded-full font-sans font-semibold text-2xl text-white hover:text-black hover:bg-white'>Sign Up Now</button>
        </div>
      </div>
    </div>
  )
}
