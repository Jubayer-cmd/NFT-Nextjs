'use client';
import React, { useEffect, useState } from 'react';
import Card from './card';
import data from './../db.json';
import { IoFilter } from 'react-icons/io5';
type NFT = {
  category: string;
  name: string;
  image: string;
  price: number;
};

const NFTCards: React.FC = () => {
  const [nfts, setNfts] = useState<NFT[]>([]);
  const [filteredNfts, setFilteredNfts] = useState<NFT[]>([]);
  const [activeButton, setActiveButton] = useState<string>('Art');

  useEffect(() => {
    setNfts(data);
    setFilteredNfts(data);
  }, []);

  useEffect(() => {
    if (activeButton === 'All Categories') {
      setFilteredNfts(nfts);
    } else {
      const filtered = nfts.filter((nft) => nft.category === activeButton);
      setFilteredNfts(filtered);
    }
  }, [nfts, activeButton]);

  console.log(filteredNfts);

  const handleButtonClick = (buttonText: string) => {
    setActiveButton(buttonText);
  };

  const renderButtons = () => {
    const categories: string[] = [
      'All Categories',
      'Art',
      'Celebrities',
      'Gaming',
      'Sport',
      'Music',
      'Crypto',
    ];
    return categories.map((category) => (
      <button
        key={category}
        className={`${
          activeButton === category
            ? 'bg-[#3D00B7] mx-2'
            : 'text-black font-sans mx-2 bg-[#b6bac033]'
        } py-2 px-3 rounded-full`}
        onClick={() => handleButtonClick(category)}
      >
        {category}
      </button>
    ));
  };

  return (
    <div className='bg-[#D9E0EC33] py-10 p-3 mt-20'>
      <h1 className=' font-mono text-3xl font-semibold mb-10'>
        Discover more NFTs{' '}
      </h1>
      <div className='block md:flex justify-between'>
        <div className='flex-wrap gap-5 items-center text-white text-center font-inter bg-white bg-opacity-10 rounded-full py-2 px-5 '>
          {renderButtons()}
        </div>
        <button>
          <IoFilter className="inline-block"/> All Filters
        </button>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
        {filteredNfts.map((nft, index) => (
          <Card key={index} nft={nft} />
        ))}
      </div>
      <div className='flex justify-center mt-20'>
        <button className='border-2 border-[#3D00B7] text-[#4F33A3] font-sans rounded-full py-3 px-5 mt-5 hover:bg-[#220970] hover:text-white'>
          More NFTs
        </button>
      </div>
    </div>
  );
};

export default NFTCards;
