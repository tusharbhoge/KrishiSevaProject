import React from 'react';
import ReactDOM from 'react-dom';
import { RouterProvider } from 'react-router-dom';
import router from './components/Routes'; // Import the router configuration

ReactDOM.render(
  <RouterProvider router={router} />,
  document.getElementById('root')
);
