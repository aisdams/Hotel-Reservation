import { ReactElement } from 'react';
import Link from 'next/link';
import Error from '../../public/404.svg';

import { NextPageCustomLayout } from './_app';
import Image from 'next/image';

const NotFound: NextPageCustomLayout = () => {
  return (
    <div className="grid h-screen w-screen place-items-center">
      <Image src={Error} alt="" className="w-[500px]" />
      <Link
        href="/"
        className="relative -top-24 bg-blue-600 p-3 rounded-md text-white"
      >
        Go Back
      </Link>
    </div>
  );
};

NotFound.getLayout = function getLayout(page: ReactElement) {
  return page;
};

export default NotFound;
