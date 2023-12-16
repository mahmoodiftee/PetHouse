import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { router } from './Routes';
import { CategoryProvider } from './Hooks/CategoryProvider';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CategoryProvider>
      <div className='max-w-screen-xl mx-auto md:px-4'>
        <RouterProvider router={router} />
      </div>
    </CategoryProvider>
  </React.StrictMode>
);