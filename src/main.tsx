import loadable from '@loadable/component';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const App = loadable(() => import('./App'));
const Home = loadable(() => import('./routes'));
const Projects = loadable(() => import('./routes/projects'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/projects',
    element: <Projects />,
  },
  {
    path: '*',
    element: <Home />,
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App>
      <RouterProvider router={router} />
    </App>
  </React.StrictMode>,
);
