import { useEffect, useState, Fragment } from "react";
import Navbar from "../BlogNav/Navbar";
import { useCustomHook } from "../../../Hooks/CategoryProvider";
import json from '../../../assets/jsons/posts.json'
import Button from "../../../Components/Button/Button";
import { Dialog, Transition } from '@headlessui/react'

const Blogs = () => {
    const { Selected, searchedItem } = useCustomHook();
    const [isOpen, setIsOpen] = useState(false)
    const [modal, setModal] = useState([]);
    const [posts, setposts] = useState([]);
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        setposts(json);
    }, [])

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
            <div className="flex flex-col md:m-10 justify-center items-center gap-6">
                {
                    blogs.map((blog) => (
                        <div key={blog.id} className="overflow-hidden h-[450px] w-full rounded-lg bg-[#000000] p-6 mx-auto">
                            <div className="h-[60%] bg-[#0e0d0d] rounded-xl overflow-hidden w-full">
                                <img src={blog?.image} alt="" className="h-full w-full mx-auto object-contain" />
                            </div>
                            <article className="flex my-2 max-w-xl flex-col items-start justify-between">
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
                                <div className="w-full  flex pr-10 mb-2 justify-end items-end">
                                    <button onClick={() => openModal(blog)} className="bg-[#161616] hover:bg-orange transition-all duration-500 rounded-full h-10 w-10">🡕</button>
                                </div>
                            </article>
                        </div>
                    ))
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
                        <div className="fixed inset-0 bg-black/25" />
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

