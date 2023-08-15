import { useAppSelector } from '@/redux/hooks';

export const useSessionOld = () => {
  const authSession = useAppSelector((state) => state.auth);

  return {
    data: authSession,
  };
};
