import React from 'react'
import {Link,useNavigate} from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';


const Login = () => {
  const [data,setData]=useState({
    email:"",
    password:''
  });

  
  const [err,setErr]=useState(false);
  let navigate= useNavigate();
  const HandleSubmit=async()=>
  {
    
    let errMsg="ERROR !\n";
 
    if(data.email===''){
        errMsg+="email is empty !\n"
        setErr(true);
    }
    if(data.password===''){
        errMsg+="password is empty !\n"
        setErr(true);
    }

    if(err){
      alert(errMsg);
    }
    else{
      try{
        const reply= await axios.post('http://localhost:5700/Auth/Login',data);
        if(reply.data.msg==='Login Successfull'){
          console.log(reply.data.token);
           sessionStorage.setItem("token",reply.data.token);
           sessionStorage.setItem("user",JSON.stringify(reply.data.user));
           alert("Login Successfull");
           navigate('/Home')
           
        }
        else{
           alert(reply.data.msg);
        }
      }
      catch(err){
        
        console.log(err);
      }
    }
  }
  return (
    <div className='h-screen flex flex-col items-center gap-32'>
         <h1 className='text-center py-8 text-2xl font-bold font-logo shadow-md w-screen'>Task Manager</h1>

         <div className=' flex flex-col items-center gap-12'>
            <h1 className='text-center text-5xl font-heading font-bold'>Welcome</h1>
            <div className=' flex flex-col gap-3 px-20 py-10 border border-gray-600 rounded-lg'>
              {/* <label htmlFor=""> Enter Name:</label> */}
              <label htmlFor="" className="font-subheading font-medium">Enter email</label>
              <input type="text"  className='border border-gray-300 text-lg text-gray-600 py-1 px-3' onChange={e=>setData(prevState=>({...prevState,email:e.target.value}))}/>

              <label htmlFor="" className="font-subheading font-medium">Enter Password</label>
              <input type="password" className='border border-gray-300 text-lg  text-gray-600 py-1 px-3'  onChange={e=>setData(prevState=>({...prevState,password:e.target.value}))}/>
              
              <div className='flex justify-center pt-5'>
                <button className='bg-black text-white py-1 w-28 rounded-md' onClick={HandleSubmit}>Submit</button>
              </div>
              
              <h4 className='font-subheading pt-5 '>Not registered yet? <span className='text-blue-800 cursor-pointer'><Link to='/Register'>Register here</Link></span></h4>
            </div>
         </div>
       

    </div>
  )
}

export default Login