import './App.css';
import { LandingPage } from './components/pages/Landing';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { GraphsPage } from './components/pages/DataVisualizations/GraphsPage.jsx';
import { NotFoundPage } from './components/pages/NotFound/index.jsx';
import * as React from 'react';
import Profile from './components/pages/Profile/index.jsx';
import { PageWrapper } from './components/layout/PageWrapper.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: PageWrapper(<LandingPage />),
    errorElement: <NotFoundPage />,
  },
  {
    path: '/graphs',
    element: PageWrapper(<GraphsPage />),
    errorElement: <NotFoundPage />,
  },
  {
    path: '/profile',
    element: PageWrapper(<Profile />),
    errorElement: <NotFoundPage />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
