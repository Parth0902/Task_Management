import React from 'react'
import { useState } from 'react'
import { X } from 'lucide-react';
import axios from 'axios';

const CreateTask = ({CloseCreateTask}) => {
    const [currUser,setCurrUser]=useState(JSON.parse(sessionStorage.getItem("user") || null));

    const [task,SetTask]=useState({
      startDate:"",
      dueDate:"",
      taskName:"",
      discription:"",
      assignedTo:currUser.email,
      assignedBy:currUser.email
    });
    const [err,setErr]=useState(false);
  
    const AddTask=async()=>
    {
      let errMsg="ERROR !\n";

      console.log(task.taskName,task.startDate,task.dueDate,task.discription);
      if(task.name===''){
          errMsg+="Name is empty !\n"
          setErr(true);
     
      }
      if(task.startDate===''){
          errMsg+="StartDate is empty !\n"
          setErr(true);
      }
      if(task.dueDate===''){
          errMsg+="dueDate is empty !\n"
          setErr(true);
      }
      if(task.discription===''){
        errMsg+="discription is empty\n";
        setErr(true);
      }

      if(err){
        alert(errMsg);
      }
      else{
        try{
          const reply= await axios.post('http://localhost:5700/Task/CreateTask',task);
          alert(reply.data);
        }
        catch(err){
          
          console.log(err);
        }
      }
  
    }
    
  return (
    <div className='px-20 py-12 bg-slate-100 border border-black flex flex-col gap-8 ' style={{ position: "absolute",
        top: "55%",
        left: "50%",
        transform: "translate(-50%, -50%)"
        }}>

            <div className='flex felx-row justify-end'><X className=' cursor-pointer relative left-16' onClick={CloseCreateTask}/></div>
       
            <div className='flex flex-col gap-2'>
                 <label htmlFor="" className="font-subheading font-medium">Enter start date</label>
                 <input type="date" className='border border-gray-300 text-lg  text-gray-600 py-1 px-3' onChange={e=>SetTask(prevState=>({...prevState,startDate:e.target.value}))} />
            </div>

            <div className='flex flex-col gap-2'>
                <label className="font-subheading font-medium">Enter Due date</label>
                <input type="date" className='border border-gray-300 text-lg  text-gray-600 py-1 px-3' onChange={e=>SetTask(prevState=>({...prevState,dueDate:e.target.value}))}/>
            </div>

            <div className='flex flex-col gap-2'>
                <label htmlFor="" className="font-subheading font-medium">Enter Task Name</label>
                <input type="text" className='border border-gray-300 text-lg  text-gray-600 py-1 px-3' onChange={e=>SetTask(prevState=>({...prevState,taskName:e.target.value}))}/>
            </div>

            <div className='flex flex-col gap-2'>
                <label htmlFor="" className="font-subheading font-medium">Enter Discription</label>
                <textarea name="" id="" cols="30" rows="5" className='border border-gray-300 text-lg  text-gray-600 py-1 px-3' onChange={e=>SetTask(prevState=>({...prevState,discription:e.target.value}))}></textarea>
            </div>

            { currUser && currUser.access==='manager' &&
              
              <button className='border border-black rounded-md w-28 mx-auto p-1 hover:text-white hover:bg-black'>Assign to</button>

            }

            <button className='border border-black rounded-md w-28 mx-auto p-1 hover:text-white hover:bg-black' onClick={AddTask}>Add task</button>

    </div>
  )
}

export default CreateTask





