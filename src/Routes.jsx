import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Home from "./Pages/HomePage/Home";
import HomeLayout from "./Pages/Blogs/HomeLayout/HomeLayout";
import Blogs from "./Pages/Blogs/Home/Blogs";
import Login from "./Pages/Authentication/Login";
import Register from "./Pages/Authentication/Register";
import Consultation from "./Pages/Consultation/Consultation";
import Bookmarks from "./Pages/Blogs/Home/Bookmarks";
import SingleAvailablePost from "./Pages/HomePage/Available/SinglePosts/SingleAvailablePost";

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
                path: "/avaiable-pets/:id",
                element: <SingleAvailablePost />,
                loader: ({ params }) => fetch(`http://localhost:5000/avaiable-pets/${params.id}`)
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/blogs",
                element: <HomeLayout />,
                children: [
                    {
                        path: "/blogs",
                        element: <Blogs />,
                    },
                    {
                        path: "/blogs/bookmarks",
                        element: <Bookmarks />,
                    }
                ]
            },
            {
                path: "/consultation",
                element: <Consultation />
            },
            {
                path: "/bookmarks",
                element: <Bookmarks />,
            }
        ]
    },
]);