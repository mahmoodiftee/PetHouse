import React, { useEffect, useState, Fragment } from "react";
import Navbar from "../BlogNav/Navbar";
import { useCustomHook } from "../../../Providers/CategoryProvider";
import useAxios from "../../../Hooks/useAxios";
import { useLoadingContext } from "../../../Hooks/useLoading";
import Loader from "../../../Components/Loader/Loader";
import BlogImageCard from "../../../Components/Cards/BlogImageCard";
import BlogPostCard from "../../../Components/Cards/BlogPostCard";
import Modal from "../../../Components/Modals/Modal";
import Post from "./Post";
import PostForm from "../../../Components/Modals/PostForm";

const Blogs = () => {
    const { Selected, searchedItem } = useCustomHook();
    const { loading, showLoading, hideLoading } = useLoadingContext();
    const [isOpen, setIsOpen] = useState(false)
    const [modal, setModal] = useState([]);
    const [posts, setposts] = useState([]);
    const [blogs, setBlogs] = useState([]);
    const useAxiosHook = useAxios();

    //fetching data
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

    //Filtering the Filtered post
    useEffect(() => {
        const filteredData = Selected === 'all' ? posts : posts?.filter((post) => post.category.toLowerCase() === Selected.toLowerCase());
        setBlogs(filteredData || []);
    }, [posts, Selected]);

    //Filtering the Searched post
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
    function openFormModal() {
        setIsOpen(true)
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="flex flex-col justify-center items-center p-4 gap-6 md:gap-2">
                {/* Post Section */}
                <Post  openModal={openFormModal}/>

                {/* Cards */}

                {
                    blogs.map((blog) => (
                        <React.Fragment key={blog._id}>
                            {blog.type === 'image' ? (
                                <BlogImageCard
                                    blog={blog}
                                    openModal={openModal}
                                />
                            ) : (
                                <BlogPostCard
                                    blog={blog}
                                    openModal={openModal}
                                />
                            )}
                        </React.Fragment>
                    ))
                }
                {loading &&
                    <Loader />
                }

            </div>

            {/* //Modal// */}
            <Modal
                isOpen={isOpen}
                Fragment={Fragment}
                modal={modal}
                closeModal={closeModal}
            />
            {/* Form Modal */}
            {/* <PostForm
                isOpen={isOpen}
                Fragment={Fragment}
                closeModal={closeModal}
            /> */}
        </div>
    );
};

export default Blogs;

