import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { SheetTrigger, SheetContent, Sheet } from '@/components/ui/sheet';

export default function Navbar() {
  return (
    <header className='flex items-center justify-between h-20 bg-white dark:bg-black  border-b-2 border-slate-200 mb-20'>
      <div className='flex items-center space-x-4'>
        <Link
          className='font-bold text-2xl mr-0 md:mr-12 text-[#3D00B7] font-mono dark:text-white '
          href='#'
        >
          NFters
        </Link>
        <div className='hidden sm:flex space-x-5  sm:space-x-12'>
          <Link
            className='text-lg font-sans font-medium text-black dark:text-white hover:underline'
            href='#'
          >
            Marketplace
          </Link>
          <Link
            className='text-lg font-sans font-medium text-black dark:text-white hover:underline'
            href='#'
          >
            Resource
          </Link>
          <Link
            className='text-lg font-sans font-medium text-black dark:text-white hover:underline'
            href='#'
          >
            About
          </Link>
        </div>
      </div>
      <div className='flex items-center  space-x-5'>
        <div className='relative mr-0 md:mr-10 px-1'>
          <Input
            className='rounded-full font-sans pl-4 pr-10 md:pr-20 py-3'
            id='search'
            placeholder='Search'
            type='search'
          />
          <SearchIcon className='absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500' />
        </div>
        <Button className='hidden sm:inline-flex text-lg rounded-full font-sans px-8 border-[#3D00B7] border bg-[#3D00B7] hover:bg-violet-800'>
          Upload
        </Button>
        <Button
          className='hidden sm:inline-flex font-sans text-lg hover:text-white hover:bg-[#3D00B7] text-[#3D00B7] rounded-full border-2 border-[#3D00B7]'
          variant='outline'
        >
          Connect Wallet
        </Button>
      </div>
      <div className='sm:hidden'>
        <Sheet>
          <SheetTrigger asChild>
            <Button size='icon' variant='outline'>
              <MenuIcon className='h-6 w-6' />
              <span className='sr-only'>Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side='right'>
            <div className='grid gap-4 p-4'>
              <Link
                className='flex w-full items-center py-2 text-lg font-semibold'
                href='#'
              >
                Marketplace
              </Link>
              <Link
                className='flex w-full items-center py-2 text-lg font-semibold'
                href='#'
              >
                Resource
              </Link>
              <Link
                className='flex w-full items-center py-2 text-lg font-semibold'
                href='#'
              >
                About
              </Link>
              <Button className='w-full rounded-full font-sans px-8 bg-[#3D00B7] hover:bg-[#3D00B1]'>
                Upload
              </Button>
              <Button
                variant='outline'
                className='w-full font-sans hover:text-white hover:bg-[#3D00B7] text-[#3D00B7] rounded-full border-2 border-[#3D00B7]'
              >
                Connect Wallet
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <line x1='4' x2='20' y1='12' y2='12' />
      <line x1='4' x2='20' y1='6' y2='6' />
      <line x1='4' x2='20' y1='18' y2='18' />
    </svg>
  );
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <circle cx='11' cy='11' r='8' />
      <path d='m21 21-4.3-4.3' />
    </svg>
  );
}
