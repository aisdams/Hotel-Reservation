import React from 'react';
import Link from 'next/link';
import TopbarData from '@/data/TopbarData';
import { IoIosArrowForward } from 'react-icons/io';

export default function Sidebar() {
  return (
    <div
      className="block text-center h-screen w-[25%]"
      style={{
        boxShadow: '10px 14px 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div className="flex justify-between relative">
        <h2 className="text-xl font-semibold mx-auto text-center">
          Hotel <span className="text-red-500 text-2xl">Wes</span>tore
        </h2>
        <div className="rounded-full p-2 absolute top-3 -right-4 bg-blue-100">
          <IoIosArrowForward className="text-xl text-gray-500" />
        </div>
      </div>

      <ul className="mt-5">
        {TopbarData.map((sidebar) => (
          <Link href={sidebar.link}>
            <li className="cursor-pointer mt-7" key={sidebar.title}>
              <span className="hover:bg-blue-300 hover:rounded-full px-2 py-1">
                {sidebar.title}
              </span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
