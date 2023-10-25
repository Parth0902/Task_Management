import React from 'react'
import { useState } from 'react'
import { CopySlash, X } from 'lucide-react';
import axios from 'axios';

const CreateTask = ({closeOpenUpdate,Utask}) => {
    const [currUser,setCurrUser]=useState(JSON.parse(sessionStorage.getItem("user") || null));

    const [task,SetTask]=useState({
      id:Utask._id,
      startDate:Utask.StartDate,
      dueDate:Utask.DueDate,
      taskName:Utask.TaskName,
      discription:Utask.Discription,
      assignedTo:Utask.AssignedTo,
      assignedBy:Utask.AssignedBy
    });
  
    const AddTask=async()=>
    {
        try{
            const reply= await axios.post('http://localhost:5700/Task/EditTask',task,{headers: {Authorization: sessionStorage.getItem("token")}});
            alert(reply.data);
        }
        catch(err){
            console.log(err);
        }
  
    }
    
  return (
    <div className='px-20 py-4 bg-slate-100 border border-black flex flex-col gap-8 ' style={{ position: "absolute",
        top: "55%",
        left: "50%",
        transform: "translate(-50%, -50%)"
        }}>

            <div className='flex felx-row justify-end'><X className=' cursor-pointer relative left-16' onClick={closeOpenUpdate}/></div>
            
            <h4 className='font-heading text-center font-bold text-xl'>Update Task</h4>
            <div className='flex flex-col gap-2'>
                 <label htmlFor="" className="font-subheading font-medium">Enter start date</label>
                 <input type="date" className='border border-gray-300 text-lg text-gray-600 py-1 px-3'  value={task.startDate} onChange={e=>SetTask({...task,startDate:e.target.value})} />
            </div>

            <div className='flex flex-col gap-2'>
                <label className="font-subheading font-medium">Enter Due date</label>
                <input type="date" className='border border-gray-300 text-lg text-gray-600 py-1 px-3'  value={task.dueDate} onChange={e=>SetTask({...task,dueDate:e.target.value})}/>
            </div>

            <div className='flex flex-col gap-2'>
                <label htmlFor="" className="font-subheading font-medium">Enter Task Name</label>
                <input type="text" className='border border-gray-300 text-lg text-gray-600 py-1 px-3'  value={task.taskName} onChange={e=>SetTask(prevState=>({...prevState,taskName:e.target.value}))}/>
            </div>

            <div className='flex flex-col gap-2'>
                <label htmlFor="" className="font-subheading font-medium">Enter Discription</label>
                <textarea name="" id="" cols="30" rows="5" className='border border-gray-300 text-lg  text-gray-600 py-1 px-3' value={task.discription}  onChange={e=>SetTask(prevState=>({...prevState,discription:e.target.value}))}></textarea>
            </div>
            <div className='flex flex-col gap-2'>
             <label htmlFor="" className="font-subheading font-medium">Assigned to: <span className='text-lg text-gray-600'>{task.assignedTo}</span></label>

            </div>

            { currUser && currUser.access==='manager' &&
             
                
                 <button className='border border-black rounded-md w-40 mx-auto p-1 hover:text-white hover:bg-black'>Update Assign to</button>
              
             
            }

            <button className='border border-black rounded-md w-40 mx-auto p-1 hover:text-white hover:bg-black' onClick={AddTask}>Update task</button>

    </div>
  )
}

export default CreateTask





