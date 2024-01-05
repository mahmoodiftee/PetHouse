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
import usePost from "../../../Hooks/usePost";

const Blogs = () => {
    const { Selected, searchedItem } = useCustomHook();
    const [isOpen, setIsOpen] = useState(false)
    const [modal, setModal] = useState([]);
    const [posts, setposts] = useState([]);
    const [blogs, setBlogs] = useState([]);
    const [post, isLoading] = usePost();
    //fetching data
    useEffect(() => {
        const fetchedData = post.reverse();
        setposts(fetchedData);
    }, [post]);

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

    return (
        <div>
            <Navbar></Navbar>
            <div className="flex flex-col justify-center items-center p-4 gap-6 md:gap-2">
                {/* Post Section */}
                <Post />

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
                {isLoading &&
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

        </div>
    );
};

export default Blogs;

