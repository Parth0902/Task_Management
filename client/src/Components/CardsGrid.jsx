import React, { useState,useEffect } from 'react'
import { X } from 'lucide-react';
import axios from 'axios';
const CardsGrid = () => {
    const [currUser,setCurrUser]=useState(JSON.parse(sessionStorage.getItem("user") || null));
    const [tasks,SetTasks]=useState([]);

    const fetchTasks=async()=>
    { 
        if(currUser){
            try{
                 const reply= await axios.get(`http://localhost:5700/Task/AllTasks/${currUser.email}`);
                 SetTasks(reply.data);
            }
            catch(err){
                console.log(err);
            }

        }
        else{
            alert('Toekn not found login again')
        }
      
    }

    useEffect(()=>
    {
        fetchTasks();

    },[currUser]);
    
  return (
    <div className=' flex-auto gap-10 h-screen overflow-auto pt-10 pb-28'>
       <div className='flex flex-wrap gap-10 justify-center pb-10'>
            {
                tasks.map((task)=>
                (
                    <div className='flex flex-col  gap-3 p-5 w-96 rounded-xl' style={{boxShadow:"rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px"}}>
                    <div className='flex flex-row justify-between gap-5 pt-7'>
                        <div className='flex flex-col gap-3'>
                            <h4 className='font-heading text-lg font-bold '>Start date: <span className='text-base font-subheading font-normal' >{task.StartDate}</span></h4>
                            <h4 className='font-heading text-lg font-bold'>Due Date: <span className='text-base font-subheading font-normal' >{task.DueDate}</span></h4>
                        </div>
                        <X className=' cursor-pointer'/>





                    </div>

                    <h4 className='font-heading text-lg font-bold'>Task Name: <span className='text-base font-subheading font-normal'>{task.TaskName}</span></h4>
                    <h4 className='font-heading text-lg font-bold'>Assigned by: <span className='text-base font-subheading font-normal'>{task.AssignedBy}</span></h4>

                    <div>
                        <h4 className='font-heading text-lg font-bold'>Description</h4>
                        <p>{task.Discription}</p>

                    </div>

                    <div className='flex flex-row justify-center gap-20 py-5'>
                        <button className='border border-green-600 w-28 p-2 font-heading  rounded-lg hover:bg-green-600 hover:text-white'>Complete</button>
                        <button className='border border-blue-600 w-28 p-2 font-heading rounded-lg hover:bg-blue-600 hover:text-white'>Edit</button>
                    </div>

                </div>


                ))
            }

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