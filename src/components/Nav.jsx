import React from 'react'
import { ChevronRightIcon,ChevronLeftIcon } from '@heroicons/react/16/solid';

const Nav = ({ currentMonth, currentYear, onNextMonth, onPrevMonth }) => {

  return (
    <nav className=' bg-[#f7f7f7] border-gray-300 border-b-[1px] flex w-full min-h-11 px-4 py-2'>
      <h1 className='text-2xl text-blue-600'>
      {new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' })} {currentYear}
      </h1>

      <p className='ml-auto flex items-center'>
        <ChevronLeftIcon className='size-8 hover:fill-blue-300 transition-all duration-150 cursor-pointer fill-blue-500' onClick={onPrevMonth}/>
        <span className='text-base text-blue-600 cursor-pointer' onClick={() => { 
          const today = new Date();
          onNextMonth(today.getMonth(), today.getFullYear());
        }}>Today</span>
        <ChevronRightIcon className='size-8 hover:fill-blue-300 transition-all duration-150 cursor-pointer fill-blue-500' onClick={onNextMonth}/>
      </p>
    </nav>
  )
}

export default Nav