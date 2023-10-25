import React, { useState } from 'react'
import SideBar from './SideNav.jsx'
import CardsGrid from './CardsGrid';
import { UserCircle2 } from 'lucide-react';
const Home = () => {

  const [currUser,setCurrUser]=useState(JSON.parse(sessionStorage.getItem("user") || null));
  
  return (
    <div className='h-screen overflow-hidden'>
      <div className=' py-8 shadow-md  flex flex-row items-center'>
        <div className='flex-1 '> <h1 className='text-2xl font-bold font-logo text-center'>Task Manager</h1></div>
         
         <div className='flex flex-col flex-5 items-center mr-16 '>
              <UserCircle2 className=''/>
              {
                currUser &&
                <h2 className='font-subheading font-medium text-lg'>{currUser.name}</h2>
              }
          </div>
         

      </div>

      <div className='flex flex-row'>
        <SideBar/>
        <CardsGrid/>
      </div>
        


    </div>
  )
}

export default Home