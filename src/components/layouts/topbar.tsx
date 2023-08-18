import React from 'react';
import { SiLoopback } from 'react-icons/si';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { IoMdNotificationsOutline } from 'react-icons/io';
import Profile from './Profile';
import TopbarData from '@/data/TopbarData';
import Link from 'next/link';

export default function Topbar() {
  return (
    <nav className="w-[80%]">
      <div className="bg-blue-500 py-1 px-5 flex justify-between items-center sticky top-0">
        <div className="leftTop flex gap-4 items-center">
          <div
            className="bg-black/10 p-2 rounded-full"
            style={{ backdropFilter: 'blur(3rem)' }}
          >
            <SiLoopback className="text-4xl text-white" />
          </div>
          <h1 className="text-white">
            Dep <span className="text-red-500 font-extrabold">Wes</span>tore
          </h1>
        </div>
        <div className="rightTop text-white flex gap-5">
          My Hotel
          <AiOutlineQuestionCircle className="text-2xl" />
          <IoMdNotificationsOutline className="text-2xl" />
          <Profile />
        </div>
      </div>

      <div className="text-black justify-center items-center text-center grid mt-3">
        <ul className="flex gap-5 text-[16px]">
          {TopbarData.map((topbar) => (
            <Link href={topbar.link}>
              <li
                className="hover:border-b-[3px] hover:border-blue-800 cursor-pointer hover:transition-all"
                key={topbar.title}
              >
                {topbar.title}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
}
