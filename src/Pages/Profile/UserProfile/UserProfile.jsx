import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const UserProfile = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="my-10">
            <h1 className="text-center font-extrabold">Welcome <span className="text-orange">{user.displayName}</span></h1>
        </div>
    );
};

export default UserProfile;