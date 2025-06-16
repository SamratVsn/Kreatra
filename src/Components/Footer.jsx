import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Logo from '../assets/image.png'
import Rohit from '../assets/Rohit.jpg'
import Kasam from '../assets/kasam.jpg'
import Aman from '../assets/aman.jpg'

export default function Footer() {
  return (
    <div className="px-8 py-10 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white h-[60vh] flex justify-center items-center gap-10 px-4 font-mono">
      <div className="flex flex-col justify-center items-center">
        <img src={Logo} alt="Edusphere Logo" className="h-28 w-28 rounded-full shadow-lg transition-transform duration-300 hover:scale-105"/>
        <h1 className="text-4xl font-bold tracking-wide">Edusphere</h1>
        <ul className="grid grid-cols-2 gap-10 items-center text-white rounded-xl bg-gradient-to-br from-gray-700 via-gray-600 to-gray-500 p-10">
          <li>
            <a href="https://www.facebook.com/profile.php?id=61574987500076" target="_blank" className="flex items-center gap-2 hover:underline">
              Facebook
              <svg viewBox="0 0 24 24" fill="#1877F2" className="w-5 h-5">
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.406.593 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.31h3.59l-.467 3.622h-3.123V24h6.116C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0z" />
              </svg>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/learnatedusphere/" target="_blank" className="flex items-center gap-2 hover:underline">
              LinkedIn
              <svg viewBox="0 0 24 24" fill="#0A66C2" className="w-5 h-5">
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7.5 0H13v2.3h.1c.8-1.5 2.8-3 5.4-3 5.7 0 6.5 3.7 6.5 8.5V24h-5v-7c0-1.7 0-4-2.5-4s-2.9 2-2.9 4v7H7.5V8z" />
              </svg>
            </a>
          </li>
          <li>
            <a href="https://www.edusphere.pro/" target="_blank" className="flex items-center gap-2 hover:underline">
              Edusphere
              <img src="https://www.edusphere.pro/logo2.png" alt="Edusphere Logo" className="h-5 w-5 rounded-full" />
            </a>
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Meet our Founder & Co-Founders</h1>
        <ul className="grid grid-cols-2 gap-10 mt-6 text-white">
          <li className="bg-gray-800 p-4 rounded-xl flex items-center gap-4 shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer">
            <img src={Kasam} alt="Founder" className="h-16 w-16 rounded-full object-cover" />
            <div>
              <span className="text-sm text-gray-400">Founder</span>
              <h3 className="text-lg font-bold text-white">Kasam Bhusal</h3>
            </div>
          </li>
          <li className="bg-gray-800 p-4 rounded-xl flex items-center gap-4 shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer">
            <img src={Rohit} alt="Co-Founder" className="h-16 w-16 rounded-full object-cover" />
            <div>
              <span className="text-sm text-gray-400">Co-Founder</span>
              <h3 className="text-lg font-bold text-white">Rohit Bhusal</h3>
            </div>
          </li>
          <li className="bg-gray-800 p-4 rounded-xl flex items-center gap-4 shadow-md col-span-2 hover:scale-105 transition-transform duration-300 cursor-pointer">
            <img src={Aman} alt="Co-Founder" className="h-16 w-16 rounded-full object-cover" />
            <div>
              <span className="text-sm text-gray-400">Co-Founder</span>
              <h3 className="text-lg font-bold text-white">Aman Bhandari</h3>
            </div>
          </li>
        </ul>
      </div>
    </div>

  )
}