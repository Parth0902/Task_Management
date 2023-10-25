import React from 'react'
// import { X } from 'lucide-react';
const SideNav = ({OpenCreateTask}) => {

   

  return (
    <div className='flex flex-col items-center gap-16  border pt-16 px-16 border-r-gray-300 '>
        {/* <X className=' cursor-pointer relative left-16'/> */}
        <button className='border border-black  rounded-md p-2 w-44 text-black font-subheading bg-white' onClick={OpenCreateTask}>Create new Task</button>
        <button className='border border-black  rounded-md p-2 w-44 text-black font-subheading bg-white'>All Tasks</button>
        <button className='border border-black  rounded-md p-2 w-44 text-black font-subheading bg-white'>Assigned tasks</button>
        <button className='border border-black  rounded-md p-2 w-44 text-black font-subheading bg-white'>created by me</button>
        <button className='border border-black  rounded-md p-2 w-44 text-black font-subheading bg-white'>All Tasks</button>

    </div>
  )
}

export default SideNav