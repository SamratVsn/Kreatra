import React from 'react'

export default function Contact() {
  return (
    <>
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white py-16 px-6 font-mono">
  <div className="max-w-4xl mx-auto flex flex-col gap-8 text-center items-center">
    <h2 className="text-3xl font-bold tracking-wide border-b-4 border-cyan-400 pb-2">
      Contact Me
    </h2>

    <div className="space-y-1">
      <h3 className="text-xl font-semibold">Samrat Parajuli</h3>
      <p className="text-sm text-gray-300">📍 Based in Anamnagar, Kathmandu</p>
      <p className="text-sm text-gray-300">🧠 8+ Months of Coding Experience</p>
      <p className="text-sm text-gray-300">🎂 Age: 16</p>
    </div>

    <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
      <div className="bg-white bg-opacity-10 p-4 rounded-lg shadow-md hover:shadow-lg transition">
        <p className="text-sky-900 font-medium">Phone:</p>
        <p className="text-lg text-black">+977 9847313479</p>
      </div>
      <div className="bg-white bg-opacity-10 p-4 rounded-lg shadow-md hover:shadow-lg transition">
        <p className="text-sky-900 font-medium">Email:</p>
        <p className="text-lg text-black">std.samrat068@gmail.com</p>
      </div>
    </div>

    <div className="mt-4">
      <p className="mb-1 text-gray-300">👀 Check out my portfolio:</p>
      <a href="https://samratvsn.github.io/Portfolio-Project/" target="_blank" className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-5 py-2 rounded-full transition">
        View Portfolio
      </a>
    </div>

    <div className="mt-10 text-gray-400 text-sm border-t border-gray-600 pt-4 w-full text-center">
      &copy; Samrat_vsn. All rights reserved.
    </div>
  </div>
</div>

    </>
  )
}
