import React from 'react'

const EmpCard =({emp,selectEmp}) => {

    const HandleClick=(data)=>
    {
        // console.log(data);
        selectEmp(data);
    }
  return (
        <div>
            <button className='flex flex-row gap-10 h-full border border-black px-3 py-1 cursor-pointer' onClick={e=>HandleClick(emp)}>
                <span>{emp.Name}</span>
                <span>{emp.Email}</span> 
            </button>
        </div>
  )
}

export default EmpCard