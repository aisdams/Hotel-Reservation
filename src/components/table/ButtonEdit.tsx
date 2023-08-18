import React from 'react';
import Link from 'next/link';
import { Edit } from 'lucide-react';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

type ButtonEditProps = {
  url: string;
};

const ButtonEdit: React.FC<ButtonEditProps> = ({ url }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className='mx-auto block'>
          <Link
            href={url}
            className='cursor-pointer text-blue-400 transition hover:text-blue-600'
          >
            <Edit className='mx-auto h-4 w-4' />
          </Link>
        </TooltipTrigger>
        <TooltipContent>
          <p>Edit</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ButtonEdit;
