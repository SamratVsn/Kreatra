import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <div className="flex justify-center items-center gap-5 p-5 font-bold text-xl text-white h-[10vh] bg-gradient-to-r from-gray-400 via-gray-600 to-gray-800">
            <div className="mx-15 w-[30vw] font-extrabold">
                <Link to = "/" className="p-3 hover:text-sky-500 hover:brightness-200">KR<span className="text-yellow-300">EA</span><span className="text-orange-400">TRA</span></Link>
            </div>
            <div className="flex gap-20 w-[70vw]">
                <Link to="/" className="hover:text-yellow-400">Home</Link>
                <Link to="/About" className="hover:text-yellow-400">About</Link>
                <Link to="/Contact" className="hover:text-yellow-400">Contact</Link>
                <Link to="/Login" className="hover:text-yellow-400">Login</Link>
            </div>
        </div>
    )
}
