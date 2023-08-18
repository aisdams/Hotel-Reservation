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
    <div className="relative min-h-screen font-sans text-sm dark:text-[#FAFAFA]">
      <div className="flex">
        <Sidebar />
        {children}
        <Topbar />
      </div>

      {/* <Footer /> */}
      {/* <div className="min-h-[calc(100vh-65px-33px)] bg-background p-4"></div> */}

      {/* <SettingsModal /> */}
    </div>
  );
};

export default Layout;
