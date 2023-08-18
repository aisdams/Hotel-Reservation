import '@/styles/globals.css';
import Layout from '@/components/layouts/Layout';
import AppProvider from '@/components/providers/AppProvider';
import reduxStore from '@/redux/store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import type { ReactElement, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

const { persistor, store } = reduxStore();

const qc = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

export type NextPageCustomLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
  theme?: string;
};

export default function App({
  Component,
  pageProps,
}: AppProps & {
  Component: NextPageCustomLayout;
}) {
  const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={qc}>
          <Head>
            <title>Hotel Reservation</title>
            <link
              rel="icon"
              href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZKahhMZhtVqzIf-c4orrA6xMtQGhzxQFK2w&usqp=CAU"
            />
          </Head>
          <AppProvider>{getLayout(<Component {...pageProps} />)}</AppProvider>
          <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
}
