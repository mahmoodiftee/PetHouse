import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import bg from '../../../assets/bg-3.jpg'
import { BiSolidEdit } from "react-icons/bi";

const UserProfile = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="p-4 min-h-screen w-full">
            <div className="rounded-xl p-2 bg-dark h-[92vh] w-full">
                <div className="h-[20%] md:h-[35%] relative w-full rounded-xl" style={{ background: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className="avatar">
                        <div className="absolute w-24 top-10 left-28 md:top-16 md:left-10 md:w-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={user?.photoURL} />
                        </div>
                    </div>
                    <button className="btn bg-white bg-opacity-30 border-none text-white text-2xl font-extrabold btn-circle absolute top-5 right-5"><BiSolidEdit /></button>
                </div>
            </div>
        </div>

    );
};

export default UserProfile;