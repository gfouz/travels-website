import { lazy } from 'react';
const Root = lazy(() => import('./root'));
const CreateUserPage = lazy(() => import('./users/create-user.tsx'));
const SignInPage = lazy(() => import('./users/signin-user'));
const Users = lazy(() => import('./users/index.tsx'));
const Flights = lazy(() => import('./flights/index.tsx'));
const CreateFlightPage = lazy(() => import('./flights/create-flight.tsx'));
const UpdateFlightPage = lazy(() => import('./flights/update-flight.tsx'));
const DuplicateFlightPage = lazy(
  () => import('./flights/duplicate-flight.tsx'),
);
const FlightTickets  = lazy(() => import('./flights/flight-tickets.tsx'));
const Tickets = lazy(() => import('./tickets/index.tsx'));
const CreateTicketPage = lazy(() => import('./tickets/create-ticket.tsx'));
const UpdateTicketPage = lazy(() => import('./tickets/update-ticket.tsx'));
const Checkins = lazy(() => import('./checkins/index.tsx'));
const CreateCheckinPage = lazy(() => import('./checkins/create-checkin.tsx'));

const Settings = lazy(() => import('./settings/Settings.tsx'));
const ErrorPage = lazy(() => import('./error-page.tsx'));

export const list = [
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'users/create',
    element: <CreateUserPage />,
  },
  {
    path: '/signin',
    element: <SignInPage />,
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
    path: 'flight-tickets/',
    element: <FlightTickets />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'tickets/',
    element: <Tickets />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'tickets/create',
    element: <CreateTicketPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'tickets/update',
    element: <UpdateTicketPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'checkins/',
    element: <Checkins />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'checkins/create',
    element: <CreateCheckinPage />,
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
];

//const UpdateTicketPage = lazy(() => import('./tickets/update-ticket.tsx'));

