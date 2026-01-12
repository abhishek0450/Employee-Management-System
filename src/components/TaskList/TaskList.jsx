
// import AcceptTask from './AcceptTask'
// import NewTask from './NewTask'
// import CompleteTask from './CompleteTask'
// import FailedTask from './FailedTask'

// const TaskList = ({ data }) => {
//     return (
//         <div id='tasklist' className='h-[50%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-1 mt-16'>
//             {data.tasks.map((elem, idx) => {
//                 if (elem.active) {
//                     return <AcceptTask key={idx} data={elem} />
//                 }
//                 if (elem.newTask) {
//                     return <NewTask key={idx} data={elem} />
//                 }
//                 if (elem.completed) {
//                     return <CompleteTask key={idx} data={elem} />
//                 }
//                 if (elem.failed) {
//                     return <FailedTask key={idx} data={elem} />
//                 }

//             })}
//         </div>
//     )
// }

// export default TaskList

import React, { useContext } from 'react';
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'
import { AuthContext } from '../../context/AuthProvider'

const TaskList = ({ data, setLoggedInUserData }) => {
    const [userData, setUserData] = useContext(AuthContext);

    const calculateCounts = (tasks) => {
        return tasks.reduce((acc, task) => {
           if (task.active) acc.active++;
           if (task.newTask) acc.newTask++;
           if (task.completed) acc.completed++;
           if (task.failed) acc.failed++;
           return acc;
       }, { active: 0, newTask: 0, completed: 0, failed: 0 });
   }

    const handleAccept = (idx) => {
        const updatedUserData = userData.map(emp => {
           if (emp.id === data.id) {
               const updatedTasks = emp.tasks.map((task, index) => {
                   if (index === idx) {
                       return { ...task, active: true, newTask: false, completed: false, failed: false };
                   }
                   return task;
               });
               
               const taskCounts = calculateCounts(updatedTasks);
               const updatedEmployee = { ...emp, tasks: updatedTasks, taskCounts };
               
               setLoggedInUserData(updatedEmployee);
               localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: updatedEmployee }));
               return updatedEmployee;
           }
           return emp;
       });
       setUserData(updatedUserData);
       localStorage.setItem('employees', JSON.stringify(updatedUserData));
   }

   const handleComplete = (idx) => {
        const updatedUserData = userData.map(emp => {
           if (emp.id === data.id) {
               const updatedTasks = emp.tasks.map((task, index) => {
                   if (index === idx) {
                       return { ...task, active: false, newTask: false, completed: true, failed: false };
                   }
                   return task;
               });
               
               const taskCounts = calculateCounts(updatedTasks);
               const updatedEmployee = { ...emp, tasks: updatedTasks, taskCounts };
               
               setLoggedInUserData(updatedEmployee);
               localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: updatedEmployee }));
               return updatedEmployee;
           }
           return emp;
       });
       setUserData(updatedUserData);
       localStorage.setItem('employees', JSON.stringify(updatedUserData));
   }

   const handleFail = (idx) => {
        const updatedUserData = userData.map(emp => {
           if (emp.id === data.id) {
               const updatedTasks = emp.tasks.map((task, index) => {
                   if (index === idx) {
                       return { ...task, active: false, newTask: false, completed: false, failed: true };
                   }
                   return task;
               });
               
               const taskCounts = calculateCounts(updatedTasks);
               const updatedEmployee = { ...emp, tasks: updatedTasks, taskCounts };
               
               setLoggedInUserData(updatedEmployee);
               localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: updatedEmployee }));
               return updatedEmployee;
           }
           return emp;
       });
       setUserData(updatedUserData);
       localStorage.setItem('employees', JSON.stringify(updatedUserData));
   }

    return (
        <div id='tasklist' className='h-[50%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5 mt-10'>
            {data.tasks.map((elem, idx) => {
                if (elem.active) {
                    return <AcceptTask key={idx} data={elem} onComplete={() => handleComplete(idx)} onFail={() => handleFail(idx)} />
                }
                if (elem.newTask) {
                    return <NewTask key={idx} data={elem} onAccept={() => handleAccept(idx)} />
                }
                if (elem.completed) {
                    return <CompleteTask key={idx} data={elem} />
                }
                if (elem.failed) {
                    return <FailedTask key={idx} data={elem} />
                }
            })}
        </div>
    );
}

export default TaskList;
