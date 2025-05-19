import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

function Header() {
  return (
    <div>
      <div className='fixed top-0 left-0 w-full  z-50 px-10 lg:px-32 xl:px-48 2xl:px-56 p-4 flex justify-between items-center'>
        <div className='flex items-center space-x-3'> 
          <Image src="/logo.png" alt="logo" width={45} height={30} />
           <a href="https://dexscreener.com/" target='_blank'><p className="ml-10 text-3xl font-semibold text-white hidden md:block">TWITTER</p></a>
            <a href="https://dexscreener.com/" target='_blank'><p className="ml-2 text-3xl font-semibold text-white hidden md:block">DEX</p> </a>
        </div>
          <a href="https://dexscreener.com/" target='_blank'><h2 className='text-3xl text-white font-bold '>BUY $BITNUT</h2></a>
      </div>
      <div className='h-20'></div> {/* Spacer to prevent content from being hidden behind the fixed header */}
    </div>
  )
}

export default Header