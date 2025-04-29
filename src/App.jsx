import React, { useState } from "react";


const App = ()=>{

const [fullName, setFullName] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [confirmPassword, setConfirmPassword] = useState('')
const [error, setError] = useState('')





const submitHandler = (e) =>{
  e.preventDefault()

  if(password.length<8){
    setError('password must be 8 characters long')
    return;
  }

  if(password != confirmPassword){
    setError("password and setpassword must be same")
    return;
    }

    if(!/[!@#$%^&*()<>,."]/.test(password)){
      setError("password must contain special characters")
      return;
    }

    if(!/[A-Z]/.test(password)){
      setError("password must contain a uppercase character")
      return;
    }

  setError('')
  setFullName('')
  setEmail('')
  setPassword('')
  setConfirmPassword('')
  alert('form submitted')

}


  return (
    <>
    <div className='h-screen flex items-center justify-center'>
      <div className='bg-white rounded-lg p-6 w-96'>
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">Create an Account</h2>
          <form onSubmit={(e)=>{
            submitHandler(e)
          }} className="flex flex-col gap-4">
            <input
              className="w-full border border-gray-300 px-4 py-2 text-sm rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              type="text"
              required
              name='fullName'
              placeholder="Enter Name here"
              value={fullName}
              onChange={(e)=>{
                setFullName(e.target.value)
              }}
            />
            <input
              className="w-full border border-gray-300 px-4 py-2 text-sm rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              type="email"
              required
              placeholder="Enter Your Email"
              name='email'
              value={email}
              onChange={(e)=>{
                setEmail(e.target.value)
              }}
            />
            <input
              className="w-full border border-gray-300 px-4 py-2 text-sm rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              type="password"
              required
              name='password'
              placeholder="Enter Password"
              value={password}
              onChange={(e)=>{
                setPassword(e.target.value)
              }}
            />
            <input
            required
              className="w-full border border-gray-300 px-4 py-2 text-sm rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              type="password"
              name='confirmPassword'
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e)=>{
                setConfirmPassword(e.target.value)
              }}
            />

          {
            error && (
              <p className="text-red-500 font-medium text-base text-center">{error}</p>
            )
          }
            
            <button
              className="text-sm px-4 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full mt-3"
            >
              Submit
            </button>
          </form>

          <p className="text-xs text-gray-600 mt-4 text-center">
            By registering, you agree to our <span className="text-indigo-600">Terms & Conditions</span> and <span className="text-indigo-600">Privacy Policy</span>.
          </p>
        </div>
        
      </div>

      
    </div>
    
    </>
  )
}

export default App