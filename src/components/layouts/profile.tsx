import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';

// Komponen DropdownItem untuk item dalam dropdown
const DropdownItem: React.FC<{ onClick: () => void; children: React.ReactNode }> = ({ onClick, children }) => (
  <li className='px-4 py-2 hover:bg-blue-500 hover:text-white cursor-pointer' onClick={onClick}>
    {children}
  </li>
);

const Profile: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className='relative'>
      <FaUserCircle className='text-2xl cursor-pointer' onClick={toggleDropdown} />

      {isDropdownOpen && (
        <div className='absolute right-6 w-[9rem] mt-2 text-gray-700 bg-black/10 border rounded-lg shadow-md' style={{ backdropFilter: 'blur(20px)' }}>
          <ul className='py-2'>
            <DropdownItem onClick={closeDropdown}>My Account</DropdownItem>
            <DropdownItem onClick={closeDropdown}>Settings</DropdownItem>
            <DropdownItem onClick={closeDropdown}>Logout</DropdownItem>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Profile;
