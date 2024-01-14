import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const UserProfile = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="py-4 min-h-screen  w-full">
            <div className="rounded-xl bg-dark h-[92vh] w-full">

            </div>
        </div>
    );
};

export default UserProfile;