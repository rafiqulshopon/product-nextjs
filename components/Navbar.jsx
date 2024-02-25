'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const pathname = usePathname();

  return (
    <nav className='bg-gray-700 border-b border-gray-500'>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <div className='relative flex h-20 items-center justify-between'>
          <div className='absolute inset-y-0 left-0 flex items-center md:hidden'>
            {/* <!-- Mobile menu button--> */}
            <button
              type='button'
              id='mobile-dropdown-button'
              className='relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
              aria-controls='mobile-menu'
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            >
              <span className='absolute -inset-0.5'></span>
              <span className='sr-only'>Open main menu</span>
              <svg
                className='block h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                />
              </svg>
            </button>
          </div>

          <div className='flex flex-1 items-center justify-center md:items-stretch md:justify-start'>
            <div className='flex flex-shrink-0 items-center' href='/'>
              <span className='hidden md:block text-white text-2xl font-bold ml-2'>
                NextProduct
              </span>
            </div>
            {/* <!-- Desktop Menu Hidden below md screens --> */}
            <div className='hidden md:ml-6 md:block'>
              <div className='flex space-x-2'>
                <Link
                  href='/'
                  className={`${
                    pathname === '/' ? 'bg-black' : ''
                  } text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2`}
                >
                  Home
                </Link>
                <Link
                  href='/product'
                  className={`${
                    pathname === '/product' ? 'bg-black' : ''
                  } text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2`}
                >
                  Product
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      {isMobileMenuOpen && (
        <div id='mobile-menu'>
          <div className='space-y-1 px-2 pb-3 pt-2'>
            <Link
              href='/'
              className={`${
                pathname === '/' ? 'bg-black' : ''
              } text-white block rounded-md px-3 py-2 text-base font-medium`}
            >
              Home
            </Link>
            <Link
              href='/product'
              className={`${
                pathname === '/product' ? 'bg-black' : ''
              } text-white block rounded-md px-3 py-2 text-base font-medium`}
            >
              Product
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
