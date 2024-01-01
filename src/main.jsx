import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { router } from './Routes';
import CategoryProvider from './Hooks/CategoryProvider';
import { Toaster } from 'react-hot-toast';
import AuthProvider from './Hooks/AuthProvider';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Toaster />
    <CategoryProvider>
      <AuthProvider>
        <div className='max-w-screen-xl mx-auto md:px-4'>
          <RouterProvider router={router} />
        </div>
      </AuthProvider>
    </CategoryProvider>
  </React.StrictMode>
);