import { useIsMediumScreen } from '@/hooks';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import React, { useEffect } from 'react';
// import { cn } from '@/lib/utils';
import Footer from './Footer';
// import SettingsModal from './SettingsModal';
import Topbar from './Topbar';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const dispatch = useAppDispatch();
  return (
    <div className="relative font-sans text-sm dark:text-[#FAFAFA]">
      <Topbar />
      {children}
      {/* <Footer /> */}
      <div className="bg-blue-500 text-white p-2">
        <Footer />
      </div>

      {/* <SettingsModal /> */}
    </div>
  );
};

export default Layout;
