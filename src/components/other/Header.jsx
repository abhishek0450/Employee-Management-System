

import  { useEffect, useState } from 'react';

const Header = (props) => {
  const [username, setUsername] = useState('Admin'); // Default username

  useEffect(() => {
    // Retrieve logged-in user data from props or local storage
    const loggedInUser = props.loggedInUser || localStorage.getItem('loggedInUser');
    

    if (loggedInUser) {
      try {
        const user = typeof loggedInUser === 'string' ? JSON.parse(loggedInUser) : loggedInUser;
        if (user && user.data && user.data.firstName) {
          setUsername(user.data.firstName); // Access nested firstName
        } else {
          console.error('User data is missing or improperly structured:', user); // Debugging
          setUsername('Admin'); // Fallback
        }
      } catch (error) {
        console.error('Error parsing loggedInUser:', error); // Debugging
        setUsername('Admin'); // Fallback
      }
    }
  }, [props.loggedInUser]); // Update when props.loggedInUser changes

  const logOutUser = () => {
    localStorage.setItem('loggedInUser', ''); // Clear user data from local storage
    props.changeUser(''); // Reset parent component's state
    setUsername('Admin'); // Reset username to Admin
  };

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>
        Hello <br />
        <span className='text-3xl font-semibold'>{username} 👋</span>
      </h1>
      <button
        onClick={logOutUser}
        className='bg-red-600 text-base font-medium text-white px-5 py-2 rounded-sm'
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
