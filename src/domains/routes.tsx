import { lazy } from 'react';
const Root = lazy(() => import('./root'));
const RegisterPage = lazy(() => import('./users/register'));
const LoginPage = lazy(() => import('./users/login'));
const Users = lazy(() => import('./users/users.tsx'));
const Flights = lazy(() => import('./flights/index.tsx'));
const CreateFlightPage = lazy(() => import('./flights/create-flight.tsx'));
const UpdateFlightPage = lazy(() => import('./flights/update-flight.tsx'));
const DuplicateFlightPage = lazy(
  () => import('./flights/duplicate-flight.tsx'),
);
const Tickets = lazy(() => import('./tickets/index.tsx'));
const Checkin = lazy(() => import('./checkin/Checkin.tsx'));
const Settings = lazy(() => import('./settings/Settings.tsx'));
const Dashboard = lazy(() => import('./dashboard.tsx'));
const ErrorPage = lazy(() => import('./error-page.tsx'));

export const list = [
  {
    path: '/',
    element: <Root />,
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
    path: 'flights/',
    element: <Flights />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'flights/create/',
    element: <CreateFlightPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'flights/update/',
    element: <UpdateFlightPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'flights/duplicate/',
    element: <DuplicateFlightPage />,
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
    path: 'settings/',
    element: <Settings />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'dashboard/',
    element: <Dashboard />,
    errorElement: <ErrorPage />,
  },
];
