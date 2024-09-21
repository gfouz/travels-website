import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { list } from './domains/routes.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { NextUIProvider } from '@nextui-org/react';

const Loader = () => {
  return (
    <div className='min-h-screen grid place-items-center'>
      <div className='inline-flex justify-center items-center text-[6vw] font-bold '>
        <span className='mr-[2px] text-green-700'>Loading</span>
        <div className='loader mt-2'></div>
      </div>
    </div>
  );
};

const queryClient = new QueryClient();

const router = createBrowserRouter(list.map((item) => item));

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<Loader />}>
        <RouterProvider router={router} />
      </Suspense>
    </QueryClientProvider>
  </React.StrictMode>,
);
