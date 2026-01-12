import  { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {
    const [userData, setUserData] = useContext(AuthContext);

    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [asignTo, setAsignTo] = useState('');
    const [category, setCategory] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();

        const task = {
            taskTitle,
            taskDescription,
            taskDate,
            category,
            active: false,
            newTask: true,
            failed: false,
            completed: false
        };

        const updatedData = userData.map((elem) => {
            if (elem.firstName === asignTo) {
                return {
                    ...elem,
                    tasks: [...elem.tasks, task],
                    taskCounts: {
                        ...elem.taskCounts,
                        newTask: elem.taskCounts.newTask + 1
                    }
                };
            }
            return elem;
        });

        setUserData(updatedData);
        localStorage.setItem('employees', JSON.stringify(updatedData));

        setTaskTitle('');
        setCategory('');
        setAsignTo('');
        setTaskDate('');
        setTaskDescription('');
    };

    return (
        <div className='p-5 bg-white mt-5 rounded-2xl shadow-md border border-gray-200'>
            <form onSubmit={submitHandler} className='flex flex-wrap w-full items-start justify-between'>
                <div className='w-1/2'>
                    <div>
                        <h3 className='text-sm text-gray-600 mb-0.5'>Task Title</h3>
                        <input
                            value={taskTitle}
                            onChange={(e) => setTaskTitle(e.target.value)}
                            className='text-sm py-2 px-3 w-4/5 rounded-lg outline-none bg-gray-50 border border-gray-300 focus:border-emerald-500 mb-4 transition-all text-gray-900'
                            type="text"
                            placeholder='Make a UI design'
                        />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-600 mb-0.5'>Date</h3>
                        <input
                            value={taskDate}
                            onChange={(e) => setTaskDate(e.target.value)}
                            className='text-sm py-2 px-3 w-4/5 rounded-lg outline-none bg-gray-50 border border-gray-300 focus:border-emerald-500 mb-4 transition-all text-gray-900'
                            type="date"
                        />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-600 mb-0.5'>Assign to</h3>
                        <input
                            value={asignTo}
                            onChange={(e) => setAsignTo(e.target.value)}
                            className='text-sm py-2 px-3 w-4/5 rounded-lg outline-none bg-gray-50 border border-gray-300 focus:border-emerald-500 mb-4 transition-all text-gray-900'
                            type="text"
                            placeholder='employee name'
                        />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-600 mb-0.5'>Category</h3>
                        <input
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className='text-sm py-2 px-3 w-4/5 rounded-lg outline-none bg-gray-50 border border-gray-300 focus:border-emerald-500 mb-4 transition-all text-gray-900'
                            type="text"
                            placeholder='design, dev, etc'
                        />
                    </div>
                </div>
                <div className='w-2/5 flex flex-col items-start'>
                    <h3 className='text-sm text-gray-600 mb-0.5'>Description</h3>
                    <textarea
                        value={taskDescription}
                        onChange={(e) => setTaskDescription(e.target.value)}
                        className='w-full h-44 text-sm py-2 px-4 rounded-lg outline-none bg-gray-50 border border-gray-300 focus:border-emerald-500 transition-all text-gray-900'
                    ></textarea>
                    <button className='bg-emerald-600 py-3 hover:bg-emerald-700 px-5 rounded-lg text-sm mt-4 w-full font-medium transition-colors text-white'>
                        Create Task
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateTask;
