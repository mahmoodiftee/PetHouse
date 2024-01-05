import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const BlogPostCard = ({ blog, openModal }) => {
    const { user } = useContext(AuthContext);
    return (
        <div className="overflow-hidden border-4 border-lite md:min-h-56 w-full rounded-2xl bg-[#000000] p-6 mx-auto">
            <article className="flex rounded-xl my-2 max-w-xl flex-col items-start justify-between">
                <div className="flex justify-between w-full mb-2 items-center gap-x-4 text-xs">
                    <p href="#" className="relative z-10 rounded-full px-1.5 py-2px text-[10px] font-medium text-white bg-orange hover:bg-orange hover:text-white">{blog?.category}</p>
                    <p className="text-orange">{blog?.date}</p>
                </div>
                <div className="group relative">
                    <h3 className=" text-lg font-semibold leading-6 text-orange group-hover:text-orange">
                        <p href="#">
                            <span className="absolute inset-0"></span>
                            {blog?.name}
                        </p>
                    </h3>
                    <div className="">
                        <p className="mt-2 text-[12px] md:text-sm md:leading-6 text-gray-400">{blog.desc.split(' ').slice(0, 25).join(' ')}..</p>
                    </div>
                </div>
                <div className="w-full mt-4 flex justify-between items-center ">
                    <div className="relative flex items-center gap-x-4">
                        <img src={user?.photoURL} alt="" className="h-8 w-8 rounded-full bg-black" />
                        <div className="text-sm leading-6">
                            <p className="font-semibold text-[12px] text-orange">
                                {user?.displayName}
                            </p>
                        </div>
                    </div>
                    <div className="">
                        <button onClick={() => openModal(blog)} className="bg-[#161616] hover:bg-orange transition-all duration-500 rounded-full h-10 w-10">🡕</button>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default BlogPostCard;