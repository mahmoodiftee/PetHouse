import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { router } from './Routes';
import { Toaster } from 'react-hot-toast';
import CategoryProvider from './Providers/CategoryProvider';
import AuthProvider from './Providers/AuthProvider';
import { LoadingProvider } from './Hooks/useLoading';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Toaster />
    <LoadingProvider>
      <AuthProvider>
        <CategoryProvider>
          <div className='max-w-screen-xl mx-auto md:px-4'>
            <RouterProvider router={router} />
          </div>
        </CategoryProvider>
      </AuthProvider>
    </LoadingProvider>
  </React.StrictMode>
);