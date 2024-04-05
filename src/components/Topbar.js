import React from 'react';


export default function Topbar() {
  return (
    <div className=" navbar w-auto bg-gray-400 grid grid-col-5 justify-end text-xl  " >
        <div className=" ">
    <a  href="/" className=" hover:bg-purple-700  text-black font-bold py-2 px-1 rounded mx-2"> Home</a>
    <a href='/projects' className=" hover:bg-purple-700  text-black font-bold py-2 px-1 rounded mx-2">Projects</a>
    <a href="/skills" className=" hover:bg-purple-700  text-black font-bold py-2 px-1 rounded mx-2">Skills</a>
    <a href='/contacts' className=" hover:bg-purple-700  text-black font-bold py-2 px-1 rounded mx-2">Contact</a>
    <a href="/about" className=" hover:bg-purple-700  text-black font-bold py-2 px-1 rounded mx-2">About</a>
    

  </div>
    </div>
  )
}

