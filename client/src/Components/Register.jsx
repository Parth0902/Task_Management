import React from "react";
import { useState } from "react";

import axios from 'axios';

const Register = () => {
    const [data,setData]=useState({
        name:"",
        email:"",
        password:"",
        access:'',
    });
    const [Cpass,setCpass]=useState("");
    const [err,setErr]=useState(false);

    const HandleSubmit=async ()=>{
        let errMsg="ERROR !\n";
            if(data.name===''){
                errMsg+="Name is empty !\n"
                setErr(true);
           
            }
            if(data.email===''){
                errMsg+="email is empty !\n"
                setErr(true);
            }
            if(!data.email.includes('@')){
              errMsg+="Envalid email format must include @ \n"
              setErr(true);
            }
            if(data.password===''){
                errMsg+="password is empty !\n"
                setErr(true);
            }
            if(data.password!== Cpass){
                errMsg+="Password and confirm Password dont Match \n";
                setErr(true);
            }
            if(data.access===''){
              errMsg+="Role is not selected\n";
              setErr(true);
            }

            if(err){
              alert(errMsg);
            }
            else{
              try{
                const reply= await axios.post('http://localhost:5700/Auth/Register',data);
                alert(reply.data);
              }
              catch(err){
                
                console.log(err);
              }
            }
        
    }

  return (
    <div className="h-screen flex flex-col items-center gap-32">
      <h1 className="text-center py-8 text-2xl font-bold font-logo shadow-md w-screen">
        Task Manager
      </h1>

      <div className=" flex flex-col items-center gap-12">
        <h1 className="text-center text-5xl font-heading font-bold">Welcome</h1>
        <div className=" flex flex-col gap-3 px-20 py-10 border border-gray-600 rounded-lg">
          {/* <label htmlFor=""> Enter Name:</label> */}
          <label htmlFor="" className="font-subheading font-medium">Enter Name</label>
          <input
            type="text"
            className="border border-gray-300 text-lg text-gray-600 py-1 px-3"
            onChange={e=>setData(prevState=>({...prevState,name:e.target.value}))}
          />

          <label htmlFor="" className="font-subheading font-medium">Enter email</label>
          <input
            type="text"
            className="border border-gray-300 text-lg text-gray-600 py-1 px-3"
            onChange={e=>setData(prevState=>({...prevState,email:e.target.value}))}
          />

          <label htmlFor="" className="font-subheading font-medium">Enter Password</label>
          <input
            type="password"
            className="border border-gray-300 text-lg  text-gray-600 py-1 px-3"
            onChange={e=>setData(prevState=>({...prevState,password:e.target.value}))}
          />

          <label htmlFor="" className="font-subheading font-medium">Confirm Password</label>
          <input
            type="password"
            className="border border-gray-300 text-lg  text-gray-600 py-1 px-3"
            onChange={e=>setCpass(e.target.value)}
          />

          <label htmlFor="" className="font-subheading font-medium">Select Role</label>
          <div>
            <label className="flex flex-row gap-3 ">
              <input
                type="radio"
                name="role"
                value="manager"
                onChange={e=>setData(prevState=>({...prevState,access:e.target.value}))}
              />
              Register as Manager
            </label>
        
          
            <label className="flex flex-row gap-3">
              <input
                type="radio"
                name="role"
                value="employee"
                onChange={e=>setData(prevState=>({...prevState,access:e.target.value}))}
              />
              Register as Employee
            </label>
        
          </div>

          <div className="flex justify-center pt-5">
            <button className="bg-black text-white py-1 w-28 rounded-md" onClick={HandleSubmit} >
              Submit
            </button>
          </div>
       
        </div>
      </div>
    </div>
  );
};

export default Register;
