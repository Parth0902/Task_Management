import React from 'react'

const Login = () => {
  return (
    <div className='h-screen flex flex-col items-center gap-32'>
         <h1 className='text-center py-8 text-2xl font-bold font-logo shadow-md w-screen'>Task Manager</h1>

         <div className=' flex flex-col items-center gap-12'>
            <h1 className='text-center text-5xl font-heading font-bold'>Welcome</h1>
            <div className=' flex flex-col gap-3 px-20 py-10 border border-gray-600 rounded-lg'>
              {/* <label htmlFor=""> Enter Name:</label> */}
              <label htmlFor="">Enter email</label>
              <input type="text"  className='border border-gray-300 text-lg text-gray-600 py-1 px-3'/>

              <label htmlFor="">Enter Password</label>
              <input type="password" className='border border-gray-300 text-lg  text-gray-600 py-1 px-3' />
              
              <div className='flex justify-center pt-5'>
                <button className='bg-black text-white py-1 w-28 rounded-md'>Submit</button>
              </div>
              
              <h4 className='font-subheading pt-5 '>Not registered yet? <span className='text-blue-800 cursor-pointer'>Register here</span></h4>
            </div>
         </div>
       

    </div>
  )
}

export default Login