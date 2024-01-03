import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { TfiWrite } from "react-icons/tfi";
import { FaImage } from "react-icons/fa";


const Post = () => {
    return (
        <div className="overflow-hidden border-4 border-lite w-full rounded-2xl bg-[#000000] p-6 mx-auto">
            <div className="flex justify-evenly items-center">
                <div className="flex gap-4 items-center">
                    <button className="bg-lite btn rounded-full"><TfiWrite /></button>
                    <h1 className="font-extrabold text-2xl"> Write </h1>
                </div>
                <div className="flex gap-4 items-center">
                    <button className="bg-lite btn rounded-full"><FaImage /></button>
                    <h1 className="font-extrabold text-2xl"> Image </h1>
                </div>
            </div>
        </div>
    );
};

export default Post;
{/* <textarea placeholder={`${lastName}, Share Your Thoughts...`} className="textarea border-4 border-lite rounded-2xl textarea-sm w-full mb-2"></textarea> */ }

// const { user } = useContext(AuthContext);
// const lastName = user.displayName.split(' ').pop();