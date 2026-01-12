import { useState } from 'react'

const Login = ({handleLogin}) => {

    

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

   


    const submitHandler = (e)=>{
        e.preventDefault()
        handleLogin(email,password)
        setEmail("")
        setPassword("")
    }


  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='rounded-2xl bg-white p-10 shadow-xl w-96 border border-gray-200'>
            <h2 className='text-3xl font-bold text-center mb-8 text-emerald-600'>Login</h2>
            <form 
            onSubmit={(e)=>{
                submitHandler(e)
            }}
            className='flex flex-col items-center justify-center'
            >
                <input 
                value={email}
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}
                required 
                className='w-full outline-none bg-gray-50 border border-gray-300 focus:border-emerald-500 text-gray-900 font-normal text-base py-3 px-4 rounded-lg placeholder:text-gray-400 transition-all' type="email" placeholder='Enter your email' 
                />
                <input
                value={password}
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                required 
                className='w-full outline-none bg-gray-50 border border-gray-300 focus:border-emerald-500 text-gray-900 font-normal text-base py-3 px-4 rounded-lg mt-4 placeholder:text-gray-400 transition-all' type="password" placeholder='Enter password' />
                <button className='mt-8 w-full text-white font-semibold bg-emerald-600 hover:bg-emerald-700 transition-colors py-3 px-4 rounded-lg shadow-md'>Log in</button>
            </form>
        </div>
    </div>
  )
}

export default Login