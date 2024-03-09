import React from 'react'
import logo from '../assets/logo/logo4.svg'
const Navbar = () => {
  return (
    <div className='text-secondary h-[100px] px-12 py-4 flex justify-between items-center' >
        <a href='#123' className=''>
          <img src={logo} alt="" className='' />
        </a>
        <div className='flex gap-14'>
            <a href='#123' className='text-lg font-semibold'>HOME</a>
            <a href='#123' className='text-lg font-semibold'>PROJECTS</a>
            <a href='#123' className='text-lg font-semibold'>ABOUT</a>
        </div>
    </div>
  )
}

export default Navbar