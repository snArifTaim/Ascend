import React from 'react'
import logo from '../assets/logo.svg'

export const HomeHeader = () => {
  return (
    <div className='bg-white mb-2 xl:mb-8'>
        <div className='flex justify-between w-full lg:w-full lg:mx-auto xl:p-0 xl:w-[1200px]'>
            <img className='w-52 invert p-3 -ml-2 xl:-ml-6' src={logo} alt="logo" />
            <button className='text-sm font-body text-primary ml-2 uppercase hover:opacity-50 mr-2'>Log out</button>
        </div>
    </div>
  )
}
