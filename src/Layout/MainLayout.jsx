import { Outlet } from "react-router-dom";
import Nav from "../Components/Nav/Nav";

const MainLayout = () => {
    return (
        <div className="bg-black text-white">
            <Nav/>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;