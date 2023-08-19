import 'react-toastify/dist/ReactToastify.css';
import Progress from '@/components/progress/Progress';
import { useAppSelector } from '@/redux/hooks';
import { setIsAnimating } from '@/redux/slices/appSlice';
import { MantineProvider } from '@mantine/core';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';

type AppProviderProps = {
  children: React.ReactNode;
};

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { isAnimating } = useAppSelector((state) => state.app);

  useEffect(() => {
    if (window.innerWidth < 576) {
      dispatch(setIsAnimating(false));
    }
  }, [dispatch]);

  //! Loading Bar Logic
  useEffect(() => {
    const handleStart = () => dispatch(setIsAnimating(true));
    const handleStop = () => dispatch(setIsAnimating(false));

    router.events.on('routeChangeStart', () => handleStart());
    router.events.on('routeChangeComplete', () => handleStop());
    router.events.on('routeChangeError', () => handleStop());

    return () => {
      router.events.off('routeChangeStart', () => handleStart());
      router.events.off('routeChangeComplete', () => handleStop());
      router.events.off('routeChangeError', () => handleStop());
    };
  }, [dispatch, router]);

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        fontFamily: 'var(--font-sans)',
        primaryColor: 'violet',
      }}
    >
      <Progress isAnimating={isAnimating} />

      {children}

      <ReactToastify />
    </MantineProvider>
  );
};

function ReactToastify() {
  return (
    <ToastContainer
      position="top-right"
      autoClose={4000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  );
}

export default AppProvider;
