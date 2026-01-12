

const NewTask = ({data, onAccept}) => {
    return (
        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-white rounded-2xl shadow-md border-l-4 border-blue-500'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-medium'>{data.category}</h3>
                <h4 className='text-xs text-gray-500'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-xl font-semibold text-gray-900'>{data.taskTitle}</h2>
            <p className='text-sm mt-2 text-gray-600'>
                {data.taskDescription}
            </p>
            <div className='mt-6'>
                <button onClick={onAccept} className='bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium py-2 px-4 text-xs w-full transition-colors shadow-sm'>Accept Task</button>
            </div>
        </div>
    )
}

export default NewTask


