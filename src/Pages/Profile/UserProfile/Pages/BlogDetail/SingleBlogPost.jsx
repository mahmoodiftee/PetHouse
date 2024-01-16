import { useLoaderData, useNavigate } from "react-router-dom";
import './style.css';
import toast from "react-hot-toast";
import useAxios from "../../../../../Hooks/useAxios";
import usePost from "../../../../../Hooks/usePost";
import useBlogs from "../../../../../Hooks/ProfileHooks/useBlogs";
import { LuFileEdit } from "react-icons/lu";
import { FaRegTrashAlt } from "react-icons/fa";

const SingleBlogPost = () => {
    const axiosInstance = useAxios();
    const [, refetch] = usePost();
    const [, blogsRefetch] = useBlogs();
    const post = useLoaderData();
    console.log(post);
    const navigate = useNavigate();

    const handleDelete = async (id) => {
        try {
            const response = await axiosInstance.delete(`/blogs/${id}`);
            const data = response.data;

            if (data.deletedCount > 0) {
                toast('Deleted Successfully', {
                    icon: '✅',
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    },
                });
                refetch();
                blogsRefetch();
                navigate('/profile')
            }
        } catch (error) {
            console.error('Error deleting post:', error);
            toast.error('Error deleting post', {
                icon: '❌',
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                },
            });
        }
    }




    return (
        <div className="w-full min-h-screen flex justify-center items-center mx-auto p-4 -my-8">

            <div className="w-full min-h-[450px] flex flex-col md:flex-row justify-center -gap-2 items-center">
                {post && post.image ? (
                    <>
                        <div className="min-h-96 md:min-h-[450px] bg-dark w-full flex-1 flex justify-center items-center rounded-xl">
                            <img className="h-72 md:h-96 w-full object-contain" src={post.image} alt="" />
                        </div>
                        <div className="min-h-96 md:min-h-[450px] w-full flex-1 flex justify-center md:items-center p-6">
                            <div className="relative">
                                <div className="flex items-center absolute right-5 top-0 gap-x-4">
                                    {
                                        post && post?.author ? (
                                            <>
                                                <div className="text-sm leading-6">
                                                    <p className="font-semibold text-[12px] text-orange">
                                                        {post?.author}
                                                    </p>
                                                </div>
                                                <img src={post?.author_img} alt="" className="h-8 w-8 rounded-full bg-black" />
                                            </>
                                        ) : (
                                            <>
                                                <div className="text-sm leading-6">
                                                    <p className="font-semibold text-[12px] text-orange">
                                                        John Doe
                                                    </p>
                                                </div>
                                                <img src="https://tailwindcss.com/_next/static/media/guillermo-rauch.8a24ab88.jpg" alt="" className="h-8 w-8 rounded-full bg-black" />
                                            </>
                                        )
                                    }
                                </div>
                                <div>
                                    < h3 className="text-2xl md:text-4xl mb-4 font-semibold leading-6 text-orange group-hover:text-orange">
                                        {post.name}
                                    </h3>
                                    <p className="text-sm md:text-xl mb-2 font-light">
                                        <span className="text-[16px] md:text-xl font-bold">Category :</span> {post?.category}
                                    </p>
                                    <p className="text-[12px] md:text-[16px] mb-2 font-light">
                                        <span className="text-[16px] md:text-xl font-bold">Description: </span> {post?.desc}
                                    </p>
                                    <div className="flex gap-4 justify-start mt-3 items-center">
                                        <button className="bg-[#161616] hover:bg-orange transition-all duration-500 flex btn text-lg text-orange hover:text-white justify-between items-center rounded-full">
                                            <LuFileEdit />
                                        </button>
                                        <button onClick={() => handleDelete(post?._id)} className="bg-[#161616] hover:bg-orange transition-all duration-500 flex btn text-lg text-orange hover:text-white justify-between items-center rounded-full">
                                            <FaRegTrashAlt />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="min-h-96 md:min-h-[450px] w-full flex-1 flex justify-center md:items-center p-6">
                        <div className="relative">
                            <div className="flex items-center absolute right-5 top-0 gap-x-4">
                                {
                                    post && post?.author ? (
                                        <>
                                            <div className="text-sm leading-6">
                                                <p className="font-semibold text-[12px] text-orange">
                                                    {post?.author}
                                                </p>
                                            </div>
                                            <img src={post?.author_img} alt="" className="h-8 w-8 rounded-full bg-black" />
                                        </>
                                    ) : (
                                        <>
                                            <div className="text-sm leading-6">
                                                <p className="font-semibold text-[12px] text-orange">
                                                    John Doe
                                                </p>
                                            </div>
                                            <img src="https://tailwindcss.com/_next/static/media/guillermo-rauch.8a24ab88.jpg" alt="" className="h-8 w-8 rounded-full bg-black" />
                                        </>
                                    )
                                }
                            </div>
                            <div>
                                < h3 className="text-2xl md:text-4xl mb-4 font-semibold leading-6 text-orange group-hover:text-orange">
                                    {post.name}
                                </h3>
                                <p className="text-sm md:text-xl mb-2 font-light">
                                    <span className="text-[16px] md:text-xl font-bold">Category :</span> {post?.category}
                                </p>
                                <p className="text-[12px] md:text-[16px] mb-2 font-light">
                                    <span className="text-[16px] md:text-xl font-bold">Description: </span> {post?.desc}
                                </p>
                                <div className="flex gap-4 justify-start mt-3 items-center">
                                    <button className="bg-[#161616] hover:bg-orange transition-all duration-500 flex btn text-lg text-orange hover:text-white justify-between items-center rounded-full">
                                        <LuFileEdit />
                                    </button>
                                    <button onClick={() => handleDelete(post?._id)} className="bg-[#161616] hover:bg-orange transition-all duration-500 flex btn text-lg text-orange hover:text-white justify-between items-center rounded-full">
                                        <FaRegTrashAlt />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
                }
            </div>
        </div >
    );
};
export default SingleBlogPost;
