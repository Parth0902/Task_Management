import React, { useState } from 'react'
import { X } from 'lucide-react';
import CreateTask from './CreateTask';
const CardsGrid = () => {
    const [openTask,setOpentask]=useState(false);

  return (
    <div className=' flex-auto gap-10 h-screen overflow-auto pt-10 pb-28'>
       
        <CreateTask />
         <div className='flex flex-wrap gap-10 justify-center pb-10'>
                <div className='flex flex-col  gap-3 p-5 w-96 rounded-xl' style={{boxShadow:"rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px"}}>
                    <div className='flex flex-row justify-between gap-5 pt-7'>
                        <div className='flex flex-col gap-3'>
                            <h4 className='font-heading text-lg font-bold '>Start date: <span className='text-base font-subheading font-normal' >--/--/----</span></h4>
                            <h4 className='font-heading text-lg font-bold'>Due Date: <span className='text-base font-subheading font-normal' >--/--/----</span></h4>
                        </div>
                        <X className=' cursor-pointer'/>
                    </div>

                    <h4 className='font-heading text-lg font-bold'>Task Name: <span className='text-base font-subheading font-normal'>Complete Task manager within time</span></h4>
                    <h4 className='font-heading text-lg font-bold'>Assigned by: <span className='text-base font-subheading font-normal'>Parth Godase</span></h4>

                    <div>
                        <h4 className='font-heading text-lg font-bold'>Description</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit dolorem officiis quod maiores aliquam alias commodi aspernatur libero, quae nisi.</p>

                    </div>

                    <div className='flex flex-row justify-center gap-20 py-5'>
                        <button className='border border-green-600 w-28 p-2 font-heading  rounded-lg hover:bg-green-600 hover:text-white'>Complete</button>
                        <button className='border border-blue-600 w-28 p-2 font-heading rounded-lg hover:bg-blue-600 hover:text-white'>Edit</button>
                    </div>
                    
                </div>

              

        </div>
    </div>
  )
}

export default CardsGrid

/*
due date how may hours
name:
descriptions: 
border Assined by wise
edit button 
completed button
delete button

*/