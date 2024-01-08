import { Fragment, useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaBookmark, FaHeart, FaRegBookmark, FaRegHeart, FaRegTrashAlt } from "react-icons/fa";
import { LuArrowUpRightFromCircle, LuFileEdit } from "react-icons/lu";
import toast from "react-hot-toast";
import useAxios from "../../Hooks/useAxios";
import usePost from "../../Hooks/usePost";
import EditModal from "../Modals/EditModal";

const BlogPostCard = ({ blog, openModal }) => {
    const { user } = useContext(AuthContext);
    const useInstance = useAxios();
    const [, refetch] = usePost();
    const [loveClicked, setLoveClicked] = useState(true)
    const [saveClicked, setSaveClicked] = useState(true)
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
    useEffect(() => {
        const savedState = localStorage.getItem(`saveClicked_${blog?._id}`);
        if (savedState !== null) {
            setSaveClicked(savedState === 'true');
        }
    }, [blog?._id]);
    useEffect(() => {
        const savedLoveState = localStorage.getItem(`loveClicked_${blog?._id}`);
        if (savedLoveState !== null) {
            setLoveClicked(savedLoveState === 'true');
        }
    }, [blog?._id]);
    //LOVE REACT
    const handleLoveClick = async () => {
        if (loveClicked) {
            const reactResponse = await useInstance.patch(`/blogs/incReactCount/${blog?._id}`,)
            const updatedReactCount = reactResponse.data?.reactCount;
            if (updatedReactCount > 0) {
                toast('🧡', {
                    style: {
                        borderRadius: '100%',
                        height: '60px',
                        background: '#333',
                        color: '#fff',
                        fontSize: '30px',
                        padding: '0px'
                    },
                });
                setLoveClicked(!loveClicked);
                refetch();
                localStorage.setItem(`loveClicked_${blog?._id}`, 'false');
            }
        } else {
            // FOR REMOVING REACT
            const reactResponse = await useInstance.patch(`/blogs/decReactCount/${blog?._id}`,)
            const result = reactResponse.data;
            if (result?.success) {
                setLoveClicked(!loveClicked);
                refetch();
                localStorage.setItem(`loveClicked_${blog?._id}`, 'true');
            }
        }
    };

    //BOOKMARK
    const handleSaveClick = async () => {
        try {
            const { _id, ...blogData } = blog;
            const postId = _id;

            if (saveClicked) {
                // FOR POST
                const BookmarkResponse = await useInstance.post('/bookmarks', { ...blogData, postId, BookmarkerEmail: user?.email });
                const data = BookmarkResponse.data;
                if (data?.insertedId) {
                    toast('Successfully BookMarked', {
                        icon: '✅',
                        style: {
                            borderRadius: '10px',
                            background: '#333',
                            color: '#fff',
                        },
                    });

                    // Save the most updated state in localStorage
                    localStorage.setItem(`saveClicked_${postId}`, 'false');
                } else {
                    toast.error('Error bookmarking post', {
                        style: {
                            icon: '❌',
                            borderRadius: '10px',
                            background: '#333',
                            color: '#fff',
                        },
                    });
                }
            } else {
                // FOR DELETE
                const DeleteBookmarkResponse = await useInstance.delete(`/bookmarks/${postId}/${user?.email}`);
                const deleteData = DeleteBookmarkResponse.data;
                if (deleteData?.success) {
                    toast('Bookmark Removed', {
                        icon: '✅',
                        style: {
                            borderRadius: '10px',
                            background: '#333',
                            color: '#fff',
                        },
                    });

                    // Save the most updated state in localStorage
                    localStorage.setItem(`saveClicked_${postId}`, 'true');
                }
            }
        } catch (error) {
            console.error('Error updating bookmark:', error);
        } finally {
            setSaveClicked(!saveClicked);
        }
    };

    return (
        <div className="overflow-hidden border-4 border-lite md:min-h-56 w-full rounded-2xl bg-[#000000] p-6 mx-auto">
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
                            <p className="text-orange">{blog?.date}</p>
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
                        <img src={blog?.author_img} alt="" className="h-8 w-8 rounded-full bg-black" />
                        <div className="text-sm leading-6">
                            <p className="font-semibold text-[12px] text-orange">
                                {blog?.author}
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-1 md:gap-4">
                        <div className="flex justify-center items-center">
                            <div className="flex gap-4 justify-center items-center">
                                {
                                    blog?.reactCount !== 0 && <h1 className="text-gray-400">{blog?.reactCount}</h1>
                                }
                                <button onClick={handleLoveClick} className="text-orange w-7 h-7 md:h-10 md:w-10">
                                    <span className={'text-lg md:text-2xl font-extrabold'}>
                                        {loveClicked ? <FaRegHeart /> : <FaHeart />}
                                    </span>
                                </button>
                            </div>

                            <button onClick={handleSaveClick} className="text-orange w-7 h-7 md:h-10 md:w-10">
                                <span className={'text-lg md:text-[22px] font-extrabold'}>
                                    {saveClicked ? <FaRegBookmark /> : <FaBookmark />}
                                </span>
                            </button>
                        </div>
                        <button onClick={() => openModal(blog)} className="bg-[#161616] hover:bg-orange transition-all duration-500 rounded-full h-10 w-10 pl-1.5"><span className="text-2xl font-extrabold"><LuArrowUpRightFromCircle /></span></button>
                    </div>
                </div>
            </article>
            <EditModal isOpen={isOpen} Fragment={Fragment} modal={modal} closeModal={closeModal} />
        </div>
    );
};

export default BlogPostCard;