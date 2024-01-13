import { Outlet, useLocation } from "react-router-dom";
import Nav from "../Components/Nav/Nav";

const MainLayout = () => {
    const location = useLocation();
    return (
        <div className="bg-black text-white">
            <div className={`${location.pathname === '/profile' ? 'hidden' : ''}`}>
                <Nav />
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;