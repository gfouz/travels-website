import { lazy } from 'react';
const Root = lazy(() => import('./root'));
const RegisterPage = lazy(() => import('./users/register'));
const LoginPage = lazy(() => import('./users/login'));
const Users = lazy(() => import('./users/users.tsx'));
const Tickets = lazy(() => import('./tickets/Tickets.tsx'));
const Checkin = lazy(() => import('./checkin/Checkin.tsx'));
const Settings = lazy(() => import('./settings/Settings.tsx'));
const Dashboard= lazy(() => import('./dashboard.tsx'));
const ErrorPage = lazy(() => import('./error-page.tsx'));

const About = lazy(() => import('./about.tsx'));

export const list = [
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/about',
    element: <About />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'register/',
    element: <RegisterPage />,
  },
  {
    path: 'login/',
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'tickets/',
    element: <Tickets />,
    errorElement: <ErrorPage />,
  
  },
  {
    path: 'checkin/',
    element: <Checkin />,
    errorElement: <ErrorPage />,
  
  },
  {
    path: 'users/',
    element: <Users />,
    errorElement: <ErrorPage />,
  
  },
  {
    path: 'Settings/',
    element: <Settings />,
    errorElement: <ErrorPage />,
  
  },
  {
    path: 'dashboard/',
    element: <Dashboard />,
    errorElement: <ErrorPage />,
  
  },
];
