import React from 'react';
import Link from 'next/link';
import TopbarData from '@/data/TopbarData';

export default function Sidebar() {
  return (
    <div className="block w-[20%] text-center h-screen mt-10">
      <h2>
        Hotel <span className="text-red-500 text-2xl">Wes</span>tore
      </h2>

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
