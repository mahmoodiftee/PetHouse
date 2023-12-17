import { Outlet } from "react-router-dom";
import Options from "./Options";
import Search from "./Search";

const HomeLayout = () => {
    return (
        <div className="min-h-screen grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
            <div className="hidden p-6 md:block h-full md:col-span-3 w-full md:border-2 md:border-[#292929] md:bg-[#161616] rounded-lg">
                <Options />
            </div>
            <div className="h-full md:col-span-6 w-full md:border-2 md:border-[#292929] md:bg-[#161616] rounded-lg overflow-y-auto">
                <Outlet></Outlet>
            </div>
            <div className="hidden p-6 md:block h-full md:col-span-3 w-full md:border-2 md:border-[#292929] md:bg-[#161616] rounded-lg">
                <div className="pt-6">
                    <Search/>
                </div>
            </div>
        </div>
    );
};

export default HomeLayout;