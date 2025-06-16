import React from 'react'
import {Link} from 'react-router-dom'

export default function Login() {
  return (
    <div className="h-[100vh] bg-gradient-to-b from-gray-900 via-gray-800 to-gray-600 text-white flex items-center justify-center px-4">
      <div className="p-10 bg-gray-800 rounded-xl">
        <h1 className="text-3xl font-bold text-center mb-8">Welcome Back Kreater</h1>
        <div>
          <p className="m-2 text-md font-semibold">Email</p>
          <input type="email" placeholder="kreater@gmail.com" className="bg-gray-600 rounded-lg p-3 text-white placeholder-gray-300 w-[20vw]" />
        </div>
        <div>
          <p className="m-2 text-md font-semibold">Password</p>
          <input type="password" placeholder="kreated password" className="bg-gray-600 rounded-lg p-3 text-white placeholder-gray-300 w-[20vw]" />
        </div>
        <button className="mx-10 mt-5 rounded-xl w-[15vw] p-4 bg-blue-600 text-center hover:bg-blue-800 cursor-pointer">Login</button>
         <p className="mt-5 mx-10 cursor-pointer">Don't have an account? <span className="text-md text-blue-400 hover:underline">Sign Up</span></p>
         <div className="text-center mt-6">
          <Link to= "/" className="text-sm text-gray-200 p-4 border border-gray-500 rounded-xl hover:bg-gray-700">← Go Back to Home</Link>
         </div>
      </div>
    </div>
  )
}
