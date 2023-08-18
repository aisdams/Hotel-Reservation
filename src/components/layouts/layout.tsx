import React, { useEffect } from 'react';
import { useIsMediumScreen } from '@/hooks';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
// import { cn } from '@/lib/utils';
import Footer from './Footer';
// import SettingsModal from './SettingsModal';
import Topbar from './Topbar';
import Sidebar from './Sidebar';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const dispatch = useAppDispatch();
  return (
    <div className="relative font-sans text-sm dark:text-[#FAFAFA]">
      <Topbar />
      <div className="flex">
        <Sidebar />
        {children}
      </div>
      {/* <Footer /> */}
      <div className="bg-blue-500 text-white p-2">
        <Footer />
      </div>

      {/* <SettingsModal /> */}
    </div>
  );
};

export default Layout;
