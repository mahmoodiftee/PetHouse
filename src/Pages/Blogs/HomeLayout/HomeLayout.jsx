import { Outlet } from "react-router-dom";
import Navbar from "../BlogNav/Navbar";
import Options from "./Options";

const HomeLayout = () => {
    return (
        <div className="min-h-screen grid grid-cols-1 md:border md:grid-cols-12 gap-6 items-center">
            <div className="hidden p-6 md:block h-full md:col-span-3 w-full md:border md:bg-[#161616] rounded-lg">
                <Options />
            </div>
            <div className="h-full md:col-span-6 w-full md:border md:bg-[#161616] rounded-lg">
                <Outlet></Outlet>
            </div>
            <div className="hidden md:block h-full md:col-span-3 w-full md:border md:bg-[#161616] rounded-lg">
                Right Side
            </div>
        </div>
    );
};

export default HomeLayout;