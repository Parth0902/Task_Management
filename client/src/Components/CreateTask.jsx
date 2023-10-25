import React from 'react'
import { useState } from 'react'
import { X } from 'lucide-react';
const CreateTask = () => {
    const [currUser,setCurrUser]=useState(JSON.parse(sessionStorage.getItem("user") || null));
    
  return (
    <div className='px-20 py-12 bg-slate-100 border border-black flex flex-col gap-8 ' style={{ position: "absolute",
        top: "55%",
        left: "50%",
        transform: "translate(-50%, -50%)"
        }}>

            <div className='flex felx-row justify-end'><X className=' cursor-pointer relative left-16'/></div>
       
            <div className='flex flex-col gap-2'>
                 <label htmlFor="" className="font-subheading font-medium">Enter start date</label>
                 <input type="date" className='border border-gray-300 text-lg  text-gray-600 py-1 px-3' />
            </div>

            <div className='flex flex-col gap-2'>
                <label className="font-subheading font-medium">Enter Due date</label>
                <input type="date" className='border border-gray-300 text-lg  text-gray-600 py-1 px-3'/>
            </div>

            <div className='flex flex-col gap-2'>
                <label htmlFor="" className="font-subheading font-medium">Enter Task Name</label>
                <input type="text" className='border border-gray-300 text-lg  text-gray-600 py-1 px-3'/>
            </div>

            <div className='flex flex-col gap-2'>
                <label htmlFor="" className="font-subheading font-medium">Enter Discription</label>
                <textarea name="" id="" cols="30" rows="5" className='border border-gray-300 text-lg  text-gray-600 py-1 px-3'></textarea>
            </div>

            { currUser.access==='manager' &&
              
              <button className='border border-black rounded-md w-28 mx-auto p-1 hover:text-white hover:bg-black'>Assign task</button>

            }

            <button className='border border-black rounded-md w-28 mx-auto p-1 hover:text-white hover:bg-black'>Submit</button>

    </div>
  )
}

export default CreateTask





