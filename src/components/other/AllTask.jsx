import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

   const [userData,setUserData] =  useContext(AuthContext)

   
  return (
    <div className='bg-white p-5 rounded-2xl mt-5 shadow-md border border-gray-200'>
        <div className='bg-gray-100 mb-2 py-2 px-4 flex justify-between rounded-lg'>
            <h2 className='text-lg font-medium w-1/5 text-gray-600'>Employee Name</h2>
            <h3 className='text-lg font-medium w-1/5 text-gray-600'>New Task</h3>
            <h5 className='text-lg font-medium w-1/5 text-gray-600'>Active Task</h5>
            <h5 className='text-lg font-medium w-1/5 text-gray-600'>Completed</h5>
            <h5 className='text-lg font-medium w-1/5 text-gray-600'>Failed</h5>
        </div>
        <div className=''>
        {userData.map(function(elem,idx){
            return <div key={idx} className='bg-white border border-gray-200 mb-2 py-2 px-4 flex justify-between rounded-lg hover:bg-gray-50 transition-colors'>
            <h2 className='text-lg font-medium  w-1/5 text-gray-900'>{elem.firstName}</h2>
            <h3 className='text-lg font-medium w-1/5 text-blue-600'>{elem.taskCounts.newTask}</h3>
            <h5 className='text-lg font-medium w-1/5 text-amber-600'>{elem.taskCounts.active}</h5>
            <h5 className='text-lg font-medium w-1/5 text-emerald-600'>{elem.taskCounts.completed}</h5>
            <h5 className='text-lg font-medium w-1/5 text-rose-600'>{elem.taskCounts.failed}</h5>
        </div>
        })}
        </div>
        
        
    </div>
  )
}

export default AllTask