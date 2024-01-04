import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { TfiWrite } from "react-icons/tfi";
import { FaImage } from "react-icons/fa";


const Post = ({openModal}) => {
    return (
        <div className="overflow-hidden border-4 border-lite w-full rounded-2xl bg-[#000000] p-6 mx-auto">
            <div className="flex justify-evenly items-center">
                <div className="flex gap-4 items-center">
                    <button onClick={() => openModal()} className="bg-lite btn rounded-full h-14 hover:bg-orange transition-all duration-500 px-4 py-1 text-white font-extrabold text-2xl"><TfiWrite /></button>
                    <h1 className="font-extrabold text-2xl"> Write </h1>
                </div>
                <div className="flex gap-4 items-center">
                    <button onClick={() => openModal()} className="bg-lite btn rounded-full h-14 hover:bg-orange transition-all duration-500 px-4 py-1 text-white text-2xl"><FaImage /></button>
                    <h1 className="font-extrabold text-2xl"> Image </h1>
                </div>
            </div>
        </div>
    );
};

export default Post;