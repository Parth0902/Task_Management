import React, { useState,useEffect } from 'react'
import { X } from 'lucide-react';
import UpdateTask from './UpdateTask.jsx';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Task from './Task';
const CardsGrid = () => {
    const [currUser,setCurrUser]=useState(JSON.parse(sessionStorage.getItem("user") || null));
    const [tasks,SetTasks]=useState([]);
    const [openUpdate,setOpenUpdate]=useState(false);
    const [Utask,setUtask]=useState({});
    let navigate= useNavigate();

    const StartOpenUpdate=(data)=>{
        setUtask(data)
        setOpenUpdate(true);
    }
 
    const closeOpenUpdate=()=>{
        setOpenUpdate(false);
    }

    const fetchTasks=async()=>
    { 
        if(currUser){
            try{
                 const reply= await axios.get(`http://localhost:5700/Task/AllTasks/${currUser.email}`,{headers: {Authorization: sessionStorage.getItem("token")}});
                 SetTasks(reply.data);
                 console.log(tasks);
            }
            catch(err){
                console.log(err);
            }
        }
        else{
           
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
                   <Task task={task} StartOpenUpdate={StartOpenUpdate} />
                ))
            }
        </div>
         {
             openUpdate &&
             <UpdateTask closeOpenUpdate={closeOpenUpdate} Utask={Utask}/>
         }
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