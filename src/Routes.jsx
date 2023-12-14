import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Home from "./Pages/HomePage/Home";
import HomeLayout from "./Pages/Blogs/HomeLayout/HomeLayout";
import Blogs from "./Pages/Blogs/Home/Blogs";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <div className="w-full border-white text h-screen flex justify-center items-center center text-white text-4xl">404 not found</div>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/blogs",
                element: <HomeLayout />,
                children: [
                    {
                        path: "/blogs",
                        element: <Blogs />,
                    }
                ]
            }
        ]
    },
]);