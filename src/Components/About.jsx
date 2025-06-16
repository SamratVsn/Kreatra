import React from 'react'

export default function About() {
  return (
    <div className="h-[150vh] flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-600 text-white">
      <h1 className="font-extrabold text-4xl p-5 m-2">About Kreatra</h1>
      <p className="w-[60vw] text-center">Kreatra is a learning platform designed for anyone looking to grow their knowledge and skills through accessible and well-organized study materials</p>
      <p className="shadow-lg shadow-gray-500 p-3 w-[60vw] border border-l-10 border-yellow-300 m-4 text-center hover:brightness-200 cursor-pointer text-light rounded-[25px] font-semibold italic mt-10 mb-10">"Our mission at Kreatra is to provide accessible, high-quality educational resources that empower students and learners to succeed in technology and achieve their full potential" <a href="https://samratvsn.github.io/Portfolio-Project/" target='_blank' className="text-sky-200"> --Coder</a></p>
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg mt-6 w-full max-w-2xl shadow-sky-300">
        <h1 className="text-2xl font-bold text-center text-orange-400 mb-4 cursor-pointer">
          🔸 What We Offer
        </h1>
        <ul className="list-disc list-inside space-y-3 text-gray-200 text-base bg-gray-700 p-5 rounded-lg shadow-lg shadow-orange-300 cursor-pointer">
          <li>📘 Curated Study Notes & Guides</li>
          <li>🎥 Subject-wise Video Resources</li>
          <li>💡 Motivational & Devotional Quotes</li>
          <li>🧑‍💻 Beginner-Friendly Tech Content</li>
          <li>🧭 Clean UI & Smooth Navigation</li>
        </ul>
      </div>
      <div className="border mt-8 p-10 rounded-xl bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700">
        <h2 className="text-xl font-semibold text-yellow-400 mb-5">🏆 Our Core Values</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>♿️ Accessibility for all learners</li>
          <li>🚀 Innovative, up-to-date content</li>
          <li>🤝 Community-driven support and feedback</li>
          <li>🎓 Empowering lifelong learning</li>
        </ul>
      </div>
    </div>
  )
}
