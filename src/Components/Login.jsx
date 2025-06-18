import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);

    console.log(data);
  };

  return (
    <div className="h-[100vh] bg-gradient-to-b from-gray-900 via-gray-800 to-gray-600 text-white flex items-center justify-center px-4">
      <form onSubmit={handleSubmit} className="p-10 bg-gray-800 rounded-xl">
        <h1 className="text-3xl font-bold text-center mb-8">Welcome Back Kreater</h1>

        <div>
          <p className="m-2 text-md font-semibold">Email</p>
          <input type="email" name="email" placeholder="kreater@gmail.com" required className="bg-gray-600 rounded-lg p-3 text-white placeholder-gray-300 w-[20vw]" />
        </div>

        <div className="mb-4">
          <p className="m-2 text-md font-semibold">Password</p>
          <div className="relative w-[20vw]">
            <input type={showPassword ? "text" : "password"} name="password" placeholder="kreated password" required className="bg-gray-600 rounded-lg p-3 pr-20 text-white placeholder-gray-300 w-full" />
            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-blue-400 hover:underline focus:outline-none">{showPassword ? "Hide" : "Show"}</button>
          </div>
        </div>

        <button type="submit" className="mx-10 mt-5 rounded-xl w-[15vw] p-4 bg-blue-600 text-center hover:bg-blue-800 cursor-pointer">Login</button>

        <p className="mt-5 mx-10 cursor-pointer"> Don't have an account?{' '} <span className="text-md text-blue-400 hover:underline">Sign Up</span></p>

        <div className="text-center mt-6">
          <Link to="/" className="text-sm text-gray-200 p-4 border border-gray-500 rounded-xl hover:bg-gray-700" >← Go Back to Home</Link>
        </div>
      </form>
    </div>
  );
}
