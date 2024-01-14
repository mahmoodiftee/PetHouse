import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import bg from '../../../assets/bg-3.jpg'
import { BiSolidEdit } from "react-icons/bi";
import { RiHome3Line } from "react-icons/ri";
const UserProfile = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="py-4 px-2 md:px-0 min-h-screen w-full">
            <div className="rounded-xl p-2 bg-dark h-[92vh] w-full">
                <div className="h-[20%]  flex items-center justify-center md:h-[35%] relative w-full rounded-xl" style={{ background: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className="avatar">
                        <div className=" w-20 md:w-28 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={bg} />
                        </div>
                    </div>
                    <button className="btn bg-white bg-opacity-30 border-none text-white text-2xl font-extrabold btn-circle absolute top-5 right-5"><BiSolidEdit /></button>
                    <button className="btn bg-white bg-opacity-30 border-none text-white text-2xl font-extrabold btn-circle absolute top-5 left-5"><RiHome3Line /></button>
                </div>
                <div className="grid grid-cols-1 gap-2 p-2 md:grid-cols-11 items-center w-full h-[78%] md:h-[63%] rounded-xl mt-2 bg-[#0f0e0e]">
                    <div className="col-span-4 md:col-span-3 bg-dark rounded-xl w-full h-full">
                    </div>
                    <div className="flex flex-col justify-center gap-2 col-span-4 w-full h-full">
                        <div className=" bg-dark rounded-xl h-full">
                        </div>
                        <div className=" bg-dark rounded-xl h-full">
                        </div>
                    </div>
                    <div className="flex flex-col justify-center gap-2 col-span-4 w-full h-full">
                        <div className="bg-dark rounded-xl h-full">
                        </div>
                        <div className="bg-dark rounded-xl h-full">
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default UserProfile;