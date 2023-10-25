import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios';
import EmpCard from './EmpCard';
import { X } from 'lucide-react';

const AssignTask = () => {
   const [employee,setEmployee]=useState([]);
   const [selected,SetSelected]=useState([]);

   const selectEmp=(data)=>
   {
    
     SetSelected(prev => [...prev, data])
     console.log(selected);
   }

    const fetchEmployee=async ()=>
    {
        try{
           const reply= await axios.get(`http://localhost:5700/Task/allEmployees`,{headers: {Authorization: sessionStorage.getItem("token")}});
           setEmployee(reply.data);
        }
        catch(err){
            console.log(err);
        }
    }

    useEffect(()=>
    {
      fetchEmployee();

    },[]);
  return (
    <div className='bg-white border border-black' style={{ position: "absolute", top: "55%",left: "50%",transform: "translate(-50%, -50%)"}}>
      <div className='flex felx-row justify-end'><X className=' cursor-pointer '/></div>
      
          <div className='flex flex-col gap-5 flex-1  ustify-center items-center p-10 overflow-auto'>
            <h1 className='font-logo font-bold text-lg text-center'>All employees</h1>
            {
              employee.map((emp)=>(
                  <EmpCard emp={emp} selectEmp={selectEmp}/>
                  
              ))
               
            }
          </div>
    </div>
   
  )
}

export default AssignTask