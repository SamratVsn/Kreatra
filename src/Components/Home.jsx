import React from 'react'
import { Link } from 'react-router-dom'
import { FaEnvelope, FaSignInAlt } from 'react-icons/fa'

export default function Home() {
  return (
    <div className="h-[100vh] flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-600 text-white">
      <h1 className="text-4xl font-bold text-center p-4">Welcome to Kreatra</h1>
      <p className="text-gray-250 text-lg font-light text-center">Your personalized learning place</p>
      <div className="flex justify-center flex-wrap gap-4 my-8">
        <Link to="/Contact" className="flex items-center gap-2 px-5 py-3 bg-sky-500 text-white rounded-xl border border-transparent hover:bg-transparent hover:border-white shadow-md">
          <FaEnvelope className="h-5 w-5" />
          <span className="font-medium">Contact Us</span>
        </Link>

        <Link to="/Login" className="flex items-center gap-2 px-5 py-3 bg-sky-500 text-white rounded-xl border border-transparent hover:bg-transparent hover:border-white shadow-md ">
          <FaSignInAlt className="h-5 w-5" />
          <span className="font-medium">Login</span>
        </Link>
      </div>

    </div>
  )
}