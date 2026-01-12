

const FailedTask = ({ data }) => {  
    return (
      <div className='flex-shrink-0 h-full w-[300px] p-5 bg-white rounded-2xl shadow-md border-l-4 border-rose-500'>
          <div className='flex justify-between items-center'>
              <h3 className='bg-rose-100 text-rose-800 text-xs px-3 py-1 rounded-full font-medium'>{data.category}</h3>
              <h4 className='text-xs text-gray-500'>{data.taskDate}</h4>
          </div>
          <h2 className='mt-5 text-xl font-semibold text-gray-900'>{data.taskTitle}</h2>
          <p className='text-sm mt-2 text-gray-600'>
              {data.taskDescription}
          </p>
          <div className='mt-6'>
              <button className='w-full bg-rose-500 text-white rounded-lg font-medium py-2 px-4 text-xs cursor-default shadow-sm'>Failed</button>
          </div>
      </div>
    )
  }
  
  export default FailedTask;
  