import React, { useEffect, useState, Fragment } from "react";
import Navbar from "../BlogNav/Navbar";
import { useCustomHook } from "../../../Providers/CategoryProvider";
import { Dialog, Transition } from '@headlessui/react'
import useAxios from "../../../Hooks/useAxios";
import { useLoadingContext } from "../../../Hooks/useLoading";
import Loader from "../../../Components/Loader/Loader";
import BlogImageCard from "../../../Components/Cards/BlogImageCard";
import BlogPostCard from "../../../Components/Cards/BlogPostCard";

const Blogs = () => {
    const { Selected, searchedItem } = useCustomHook();
    const { loading, showLoading, hideLoading } = useLoadingContext();
    const [isOpen, setIsOpen] = useState(false)
    const [modal, setModal] = useState([]);
    const [posts, setposts] = useState([]);
    const [blogs, setBlogs] = useState([]);
    const useAxiosHook = useAxios();
    useEffect(() => {
        showLoading();
        useAxiosHook.get('/blogs')
            .then((res) => {
                const data = res.data;
                setposts(data);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                hideLoading();
            });
    }, []);

    useEffect(() => {
        const filteredData = Selected === 'all' ? posts : posts?.filter((post) => post.category.toLowerCase() === Selected.toLowerCase());
        setBlogs(filteredData || []);
    }, [posts, Selected]);

    useEffect(() => {
        const searchedData = searchedItem === 'all' ? posts : posts?.filter((post) => post.category.toLowerCase() === searchedItem.toLowerCase());
        setBlogs(searchedData || []);
    }, [posts, searchedItem]);


    function closeModal() {
        setIsOpen(false)
    }

    function openModal(blog) {
        setModal(blog);
        setIsOpen(true)
    }



    return (
        <div>
            <Navbar></Navbar>
            <div className="flex flex-col md:m-10 justify-center items-center px-4 gap-6">
                {
                    blogs.map((blog) => (
                        <React.Fragment key={blog._id}>
                            {blog.type === 'image' ? (
                                <BlogImageCard blog={blog} openModal={openModal} />
                            ) : (
                                <BlogPostCard blog={blog} openModal={openModal} />
                            )}
                        </React.Fragment>
                    ))
                }
                {loading &&
                    <Loader />
                }
            </div>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/90" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-4xl h-[500px] transform overflow-y-auto rounded-2xl bg-[#000000] border-4 border-[#161616] p-6 text-left flex justify-center items-center align-middle shadow-xl transition-all">

                                    <div className="flex flex-col md:flex-row w-full h-full gap-10">
                                        <div className="flex-1 h-full w-full flex-shrink-0">
                                            <img src={modal.image} className="h-full mx-auto object-contain" />
                                        </div>
                                        <div className="flex-1 w-full text-white flex justify-center py-16">
                                            <div className="w-full">
                                                <div className="flex justify-between items-center">
                                                    <p href="#" className="relative z-10 rounded-full px-1.5 py-2px font-medium text-white bg-orange hover:bg-orange hover:text-white">{modal?.category}</p>
                                                    <p className="text-orange md:pr-10">{modal?.date}</p>
                                                </div>
                                                <h3 className="text-2xl my-2 md:text-4xl mb-4 font-semibold leading-6 text-orange group-hover:text-orange">
                                                    {modal.name}
                                                </h3>
                                                <p className="text-sm md:text-sm mb-2 font-light">
                                                    {modal.desc}
                                                </p>
                                                <div className="relative md:mt-3 flex items-center gap-x-4">
                                                    <img src="https://tailwindcss.com/_next/static/media/guillermo-rauch.8a24ab88.jpg" alt="" className="h-8 w-8 rounded-full bg-black" />
                                                    <div className="text-sm leading-6">
                                                        <p className="font-semibold text-[12px] text-orange">
                                                            {modal.author}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
    );
};

export default Blogs;

