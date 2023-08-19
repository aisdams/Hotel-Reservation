import TopbarData from '@/data/TopbarData';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { SiLoopback } from 'react-icons/si';
import Profile from './Profile';

export default function Topbar() {
  const router = useRouter();

  return (
    <>
      <nav
        className={`sticky top-0 z-10 transition-all ${
          router.route === '/' ? 'page-home' : 'page-other'
        }`}
      >
        <div className="bg-blue-500 py-1 px-5 flex justify-between items-center">
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
      </nav>

      <div className="text-black py-2 pl-3 grid bg-[#f6f9fc] border">
        <ul className="flex gap-5 text-[16px]">
          {TopbarData.map((topbar) => (
            <li
              className="cursor-pointer hover:transition-all"
              key={topbar.title}
            >
              <Link href={topbar.link}>
                <div
                  className={`${
                    router.pathname === topbar.link
                      ? 'border-b-[3px] border-blue-800 font-bold'
                      : ''
                  } hover:border-blue-800`}
                  style={{ paddingBottom: '0.25rem' }} // Tambahkan padding di sini
                >
                  {topbar.title}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
