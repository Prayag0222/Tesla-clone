import { MessageSquareMore } from 'lucide-react'
import { CarFront } from "lucide-react"
import React from 'react'

const Footer = () => {
  return (
    <div className='fixed bottom-0 left-0 w-full  bg-white flex gap-10 p-3 z-50 shadow-md'>

      <div className="relative input-wrapper pl-100">
        <span className=" absolute pl-10 mt-2.5 text-gray-700 font-medium pointer-events-none flex items-center gap-3 ">
          <MessageSquareMore/>  Ask a Question:
        </span>
        <input
          className="border-2 border-gray-500 bg-gray-100 rounded p-2 pl-48 w-100"
          type="text"
          name=""
          id=""
          placeholder="a question..."
        />
      </div>
      <div>
        <button className='flex p-2 border-2 border-gray-500 bg-gray-100 gap-5 rounded'> <CarFront/> Schedule a Drive Today</button>
      </div>

    </div>
  )
}

export default Footer