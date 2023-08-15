import React, { useState } from 'react'
import {FaUserCircle} from 'react-icons/fa'

export default function profile() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  }

  return (
    <div>
    <FaUserCircle className='text-2xl cursor-pointer' onClick={toggleDown} />

    {isDropdownOpen && (
       <div className='absolute right-6 w-[9rem] mt-2 text-gray-700 bg-black/10 border rounded-lg shadow-md' style={{backdropFilter: 'blur(20px)'}}>
          <ul className='py-2'>
            <li className='px-4 py-2 hover:bg-blue-500 hover:text-white'>My Account</li>
            <li className='px-4 py-2 hover:bg-blue-500 hover:text-white'>Settings</li>
            <li className='px-4 py-2 hover:bg-blue-500 hover:text-white'>Logout</li>
          </ul>
        </div>
    )}
  </div>
  )
}
