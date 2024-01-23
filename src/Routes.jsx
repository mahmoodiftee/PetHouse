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
import AdoptionForm from "./Pages/HomePage/Available/AdoptionForm/AdoptionForm";
import UserProfile from "./Pages/Profile/UserProfile/UserProfile";
import AdoptionDetail from "./Pages/Profile/UserProfile/Pages/AdoptionDetail/AdoptionDetail";
import SingleBlogPost from "./Pages/Profile/UserProfile/Pages/BlogDetail/SingleBlogPost";
import AdoptedDetail from "./Pages/Profile/UserProfile/Pages/AdoptedDetail/AdoptedDetail";

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
                path: "/adoption-form",
                element: <AdoptionForm />,
            },
            {
                path: "/profile",
                element: <UserProfile />,
            },
            {
                path: "/blogs/:id",
                element: <SingleBlogPost />,
                loader: ({ params }) => fetch(`http://localhost:5000/blogs/${params.id}`)
            },
            {
                path: "/avaiable-pets/:id",
                element: <SingleAvailablePost />,
                loader: ({ params }) => fetch(`http://localhost:5000/avaiable-pets/${params.id}`)
            },
            {
                path: "/adoption-detail/:id",
                element: <AdoptionDetail />,
                loader: ({ params }) => fetch(`http://localhost:5000/avaiable-pets/${params.id}`)
            },
            //Have to work on it, it has to fetch from adopted collection
            {
                path: "/adopted/:id",
                element: <AdoptedDetail />,
                loader: ({ params }) => {
                    console.log('Post ID:', params.id);
                    return fetch(`http://localhost:5000/avaiable-pets/${params.id}`);
                }
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