import React from 'react'
import { CircleAlert } from 'lucide-react'

const Login = () => {
  return (
    <div className='flex flex-col justify-between gap-40'>
      {/* Fixed nav at the top */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white bg-opacity-80 backdrop-blur-md h-14 flex items-center justify-between px-8 ">
        <svg
          className="tds-icon tds-icon-logo-wordmark tds-site-logo-icon h-3"
          viewBox="0 0 342 35"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7m0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7m0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7M308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-globe-icon lucide-globe h-5"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
          <path d="M2 12h20" />
        </svg>
      </nav>
      {/* Add padding top to push content below fixed nav if needed */}
      <div className=" flex justify-center items-start">
        <div className='flex flex-col justify-center items-start  w-82  gap-8'>
          <h1 className='text-4xl font-bold'>Sign In</h1>
          <div className="flex items-center space-x-2 mt-4 text-gray-400">
            <label htmlFor="email" className="text-base font-medium">
              Email
            </label>
            <div className="h-5 w-5 text-gray-400 flex items-center">
              <CircleAlert />
            </div>
          </div>
          <input className='bg-gray-100 rounded border border-gray-300 p-2 mt-[-20px] w-full'  type="text" placeholder='' />
          <button className='bg-indigo-400 rounded p-2 w-full'>Next</button>
          <div className="w-full flex justify-center">
            <a className='underline text-gray-500 hover:text-gray-700' href="">Trouble Singin In ?</a>
          </div>
          <div className='flex items-center justify-center gap-3 w-full'>
            <div className='h-[2px] w-20 bg-gray-500'></div>
            <span>OR</span>
            <div className='h-[2px] w-20 bg-gray-500'></div>
          </div>
          <div className='w-full flex justify-center  '><button className='bg-gray-100 text-gray-700 p-2 rounded hover:bg-gray-200 w-full'>Create Account</button>
          </div>
        </div>
      </div>

      <div className='flex gap-10 justify-center items-end'> 
        <span>Tesala c 2025</span>
        <span>Privacy & Legal</span>
        <span>Contact</span>
      </div>
    </div>
  )
}

export default Login