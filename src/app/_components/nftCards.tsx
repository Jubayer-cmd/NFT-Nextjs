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
  const [sortBy, setSortBy] = useState<string>('');
  const [visibleNfts, setVisibleNfts] = useState<number>(12); // Number of visible NFTs

  useEffect(() => {
    setNfts(data);
    setFilteredNfts(data.slice(0, visibleNfts)); // Initially display 12 items
  }, [visibleNfts]);

  useEffect(() => {
    // Filter based on category
    if (activeButton === 'All Categories') {
      setFilteredNfts(nfts.slice(0, visibleNfts));
    } else {
      const filtered = nfts.filter((nft) => nft.category === activeButton);
      setFilteredNfts(filtered.slice(0, visibleNfts));
    }
    // Update sorting when category changes
    if (sortBy === 'Price, ASC') {
      const sortedByPrice = [...filteredNfts].sort((a, b) => a.price - b.price);
      setFilteredNfts(sortedByPrice.slice(0, visibleNfts));
    } else if (sortBy === 'Price, DESC') {
      const sortedByPrice = [...filteredNfts].sort((a, b) => b.price - a.price);
      setFilteredNfts(sortedByPrice.slice(0, visibleNfts));
    }
  }, [nfts, activeButton, sortBy, visibleNfts]);

  const handleButtonClick = (buttonText: string) => {
    setActiveButton(buttonText);
    setVisibleNfts(12); // Reset visible items to default when changing categories
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(event.target.value);
    setVisibleNfts(12); // Reset visible items to default when changing sorting
  };

  const handleMoreNFTs = () => {
    setVisibleNfts((prevVisible) => prevVisible + 12); // Load more 12 items on button click
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
            ? 'bg-[#3D00B7] mx-2 text-white'
            : 'text-black font-sans mx-2 bg-[#b6bac033] my-1 text-sm md:text-base'
        } py-2 px-3 rounded-full`}
        onClick={() => handleButtonClick(category)}
      >
        {category}
      </button>
    ));
  };

  return (
    <div className='bg-[#D9E0EC33] py-5 md:py-20 p-0 md:p-3 mt-20'>
      <h1 className=' font-mono text-3xl font-semibold mb-10 text-center md:text-left'>
        Discover more NFTs{' '}
      </h1>
      <div className='block md:flex justify-between'>
        <div className='flex-wrap gap-5 items-center bg-white bg-opacity-10 rounded-full pb-5'>
          {renderButtons()}
        </div>
        <div className='font-sans bg-[#b6bac033] h-10 p-2 rounded-md'>
          <IoFilter className='inline-block mr-2 ' />
          <select
            id='SortBy'
            className='rounded border-gray-300 text-sm bg-[#b6bac033]'
            onChange={handleSortChange}
            value={sortBy}
          >
            <option value=''>All Filters</option>
            <option value='Price, ASC'>Price, ASC</option>
            <option value='Price, DESC'>Price, DESC</option>
          </select>
        </div>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 gap-y-5 md:gap-10 mt-8'>
        {filteredNfts.map((nft, index) => (
          <Card key={index} nft={nft} />
        ))}
      </div>
      <div className='flex justify-center mt-10'>
        <button
          className='border-2 border-[#3D00B7] text-[#4F33A3] font-sans rounded-full py-3 px-5 hover:bg-[#220970] hover:text-white'
          onClick={handleMoreNFTs}
        >
          More NFTs
        </button>
      </div>
    </div>
  );
};

export default NFTCards;
