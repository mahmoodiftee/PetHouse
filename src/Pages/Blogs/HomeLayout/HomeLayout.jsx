import { Outlet } from "react-router-dom";
import Options from "./Options";

const HomeLayout = () => {
    return (
        <div className="min-h-screen grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
            <div className="hidden p-6 md:block h-full md:col-span-3 w-full md:border-2 md:border-[#292929] md:bg-[#161616] rounded-lg">
                <Options />
            </div>
            <div className="h-full py-6 md:col-span-6 w-full md:border-2 md:border-[#292929] md:bg-[#161616] rounded-lg">
                <Outlet></Outlet>
            </div>
            <div className="hidden p-6 md:block h-full md:col-span-3 w-full md:border-2 md:border-[#292929] md:bg-[#161616] rounded-lg">
                <div className="pt-16">
                    Right Side
                </div>
            </div>
        </div>
    );
};

export default HomeLayout;