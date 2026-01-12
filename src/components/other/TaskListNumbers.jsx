import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
        
        <div className='rounded-2xl w-[45%] py-6 px-9 bg-blue-50 shadow-md border border-blue-100'>
            <h2 className='text-4xl font-bold text-blue-600'>{data.taskCounts.newTask}</h2>
            <h3 className='text-xl mt-0.5 font-medium text-blue-800'>New Task</h3>
        </div>
        <div className='rounded-2xl w-[45%] py-6 px-9 bg-emerald-50 shadow-md border border-emerald-100'>
            <h2 className='text-4xl font-bold text-emerald-600'>{data.taskCounts.completed}</h2>
            <h3 className='text-xl mt-0.5 font-medium text-emerald-800'>Completed Task</h3>
        </div>
        <div className='rounded-2xl w-[45%] py-6 px-9 bg-amber-50 shadow-md border border-amber-100'>
            <h2 className='text-4xl font-bold text-amber-600'>{data.taskCounts.active}</h2>
            <h3 className='text-xl mt-0.5 font-medium text-amber-800'>Accepted Task</h3>
        </div>
        <div className='rounded-2xl w-[45%] py-6 px-9 bg-rose-50 shadow-md border border-rose-100'>
            <h2 className='text-4xl font-bold text-rose-600'>{data.taskCounts.failed}</h2>
            <h3 className='text-xl mt-0.5 font-medium text-rose-800'>Failed Task</h3>
        </div>
    </div>
  )
}

export default TaskListNumbers