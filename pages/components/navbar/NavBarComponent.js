import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { useState } from 'react';
import Logo from 'public/assets/images/Chambermade_Logo_Long.png'
   
  

const Navbar = () => {
    const [active, setActive] = useState(false);
    const handleClick = () => {
        setActive(!active);
      };
  
    return (
        <>
        <nav className='flex items-center flex-wrap bg-gradient-to-r from-[#73c3f5] via-[#62b8d8] to-[#0153d5] p-3 '>
          <Link legacyBehavior href='/'>
            <a className='inline-flex items-center p-2 mr-4 '>
            <div className="h-8 w-36 relative">
            <Image
      src={Logo}
      alt="Alt text for the picture"
      layout="fill" 
    objectFit="full" 
    className="rounded-full"
    />
    </div>
            </a>
          </Link>
          <button
            className=' inline-flex p-3 hover:bg-green-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none'
            onClick={handleClick}
          >
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          </button>
          {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
          <div
            className={`${
              active ? '' : 'hidden'
            }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
          >
            <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
              <Link legacyBehavior href='/'>
                <a className='font-sans lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-yellow-600 hover:text-black '>
                  Home
                </a>
              </Link>
              <Link legacyBehavior href='/about'>
                <a className='font-sans lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-yellow-600 hover:text-black'>
                  About
                </a>
              </Link>
              <Link legacyBehavior href='/membership'>
                <a className='font-sans lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-yellow-600 hover:text-black'>
                  Membership
                </a>
              </Link>
              <Link legacyBehavior href='/events'>
                <a className='font-sans lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-yellow-600 hover:text-black'>
                  Events
                </a>
              </Link>
              <Link legacyBehavior href='/directory'>
                <a className='font-sans lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-yellow-600 hover:text-black'>
                  Directory
                </a>
              </Link>
              <Link legacyBehavior href='/advocacy'>
                <a className='font-sans lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-yellow-600 hover:text-black'>
                  Advocacy
                </a>
              </Link>
              <Link legacyBehavior href='/cdap'>
                <a className='font-sans lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-yellow-600 hover:text-black'>
                  CDAP
                </a>
              </Link>
              <Link legacyBehavior href='/contact'>
                <a className='font-sans lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-yellow-600 hover:text-black'>
                  Contact
                </a>
              </Link>
              <Link legacyBehavior href='/login'>
                <a className='font-sans lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-yellow-600 hover:text-black'>
                  Login
                </a>
              </Link>
              
            </div>
          </div>
        </nav>
      </>
    )
}



export default Navbar;