import { Fragment, useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaRegTrashAlt } from "react-icons/fa";
import { LuArrowUpRightFromCircle, LuFileEdit } from "react-icons/lu";
import useAxios from "../../Hooks/useAxios";
import toast from "react-hot-toast";
import usePost from "../../Hooks/usePost";
import EditImageModaL from "../Modals/EditImageModaL.JSX";
const BlogImageCard = ({ blog, openModal }) => {
    const { user } = useContext(AuthContext);
    const useInstance = useAxios();
    const [, refetch] = usePost();
    const [isOpen, setIsOpen] = useState(false)
    const [modal, setModal] = useState([]);
    function openEditModal(blog) {
        setModal(blog);
        setIsOpen(true)
    }
    function closeModal() {
        setIsOpen(false)
    }
    const handleDelete = async (id) => {
        try {
            const response = await useInstance.delete(`/blogs/${id}`);
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
        <div className="overflow-hidden border-4 border-lite md:min-h-[470px] w-full rounded-2xl bg-[#000000] p-6 mx-auto">
            <div className="h-64 md:h-[282px] bg-[#0e0d0d] rounded-xl overflow-hidden w-full">
                <img src={blog?.image} alt="" className="h-full w-full mx-auto object-contain" />
            </div>
            <article className="flex rounded-xl my-2 max-w-xl flex-col items-start justify-between">
                <div className="flex justify-between w-full mb-2 items-center gap-x-4 text-xs">
                    <p href="#" className="relative z-10 rounded-full px-1.5 py-2px text-[10px] font-medium text-white bg-orange hover:bg-orange hover:text-white">{blog?.category}</p>
                    {
                         user?.email === blog?.author_email ? (
                            <div className="flex gap-4 justify-center items-center">
                                <button onClick={() => openEditModal(blog)} className="bg-[#161616] hover:bg-orange transition-all duration-500 flex btn text-lg text-orange hover:text-white justify-between items-center rounded-full">
                                    <LuFileEdit />
                                </button>
                                <button onClick={() => handleDelete(blog?._id)} className="bg-[#161616] hover:bg-orange transition-all duration-500 flex btn text-lg text-orange hover:text-white justify-between items-center rounded-full">
                                    <FaRegTrashAlt />
                                </button>
                            </div>
                        ) : (
                            <p className="text-orange md:pr-10">{blog?.date}</p>
                        )
                    }


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
                        <img src={blog?.author_img} alt="" className="h-10 w-10 object-contain rounded-full bg-black" />
                        <div className="text-sm leading-6">
                            <p className="font-semibold text-[12px] text-orange">
                                {blog?.author}
                            </p>
                        </div>
                    </div>
                    <div className="">
                        <button onClick={() => openModal(blog)} className="bg-[#161616] hover:bg-orange transition-all duration-500 rounded-full h-10 w-10 pl-1.5"><span className="text-2xl font-extrabold"><LuArrowUpRightFromCircle /></span></button>
                    </div>
                </div>
            </article>
            <EditImageModaL isOpen={isOpen} Fragment={Fragment} modal={modal} closeModal={closeModal} />
        </div>

    );
};

export default BlogImageCard;