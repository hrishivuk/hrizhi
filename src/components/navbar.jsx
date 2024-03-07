import React from 'react'

const Navbar = () => {
  return (
    <div className='text-secondary h-[100px] px-12 py-4 flex justify-between items-center' >
        <a href='#123' className='text-primary text-2xl bg-border/60 p-3 rounded-3xl font-bold'>Hrizhi</a>
        <div className='flex gap-14'>
            <a href='#123' className='text-lg font-semibold'>HOME</a>
            <a href='#123' className='text-lg font-semibold'>PROJECTS</a>
            <a href='#123' className='text-lg font-semibold'>ABOUT</a>
        </div>
    </div>
  )
}

export default Navbar