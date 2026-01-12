

const AcceptTask = ({data, onComplete, onFail}) => {
    
  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-white rounded-2xl shadow-md border-l-4 border-amber-500'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-amber-100 text-amber-800 text-xs px-3 py-1 rounded-full font-medium'>{data.category}</h3>
                <h4 className='text-xs text-gray-500'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-xl font-semibold text-gray-900'>{data.taskTitle}</h2>
            <p className='text-sm mt-2 text-gray-600'>
                {data.taskDescription}
            </p>
            <div className='flex justify-between mt-6 gap-2'>
                <button onClick={onComplete} className='bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-medium py-2 px-3 text-xs w-full transition-colors shadow-sm'>Mark as Completed</button>
                <button onClick={onFail} className='bg-rose-500 hover:bg-rose-600 text-white rounded-lg font-medium py-2 px-3 text-xs w-full transition-colors shadow-sm'>Mark as Failed</button>
            </div>
        </div>
  )
}

export default AcceptTask