import Link from 'next/link';
import { Edit2 } from 'lucide-react';

import { DropdownMenuItem } from '../ui/dropdown-menu';

type ActionEditProps = {
  href: string;
  onClick?: () => void;
};

const ActionEdit: React.FC<ActionEditProps> = ({ href, onClick }) => {
  return (
    <DropdownMenuItem className='p-0'>
      <Link
        href={href}
        className='flex w-full select-none items-center px-2 py-1.5 hover:cursor-default'
        onClick={() => {
          onClick instanceof Function && onClick();
        }}
      >
        <Edit2 className='mr-2 h-3.5 w-3.5 text-muted-foreground/70' />
        Edit
      </Link>
    </DropdownMenuItem>
  );
};
export default ActionEdit;
