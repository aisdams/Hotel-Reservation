import { cn } from '@/lib/utils';

type ContainerProps = {
  children: React.ReactNode;
  id?: string;
  className?: string;
};

const Container: React.FC<ContainerProps> = ({ children, id, className }) => {
  return (
    <div
      id={id}
      className={cn('rounded-xl border bg-card p-4 shadow', className)}
    >
      {children}
    </div>
  );
};

export default Container;
