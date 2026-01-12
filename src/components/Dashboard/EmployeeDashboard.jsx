
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {

  return (
    <div className='p-10 bg-[#F8F9FA] h-screen'>
        
        <Header changeUser={props.changeUser} data={props.data}/>
        <TaskListNumbers data={props.data} />
        <TaskList data={props.data} setLoggedInUserData={props.setLoggedInUserData} />
    </div>
  )
}

export default EmployeeDashboard