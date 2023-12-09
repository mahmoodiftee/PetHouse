import { Outlet } from "react-router-dom";
import Nav from "../Shared/Nav/Nav";

const MainLayout = () => {
    return (
        <div className="bg-black">
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;