import React, { useEffect, useState, Fragment } from "react";
import Navbar from "../BlogNav/Navbar";
import { useCustomHook } from "../../../Providers/CategoryProvider";
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
    const [post, refetch, isLoading] = usePost();
    //fetching data
    useEffect(() => {
        const fetchData = async () => {
            await refetch();
            const fetchedData = [...post].reverse();
            setposts(fetchedData);
        };
        fetchData();
    }, [post, refetch]);

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
            <Navbar />
            <div className="flex flex-col justify-center items-center p-4 gap-6 md:gap-2">
                {/* Post Section */}
                <Post />

                {/* Cards */}
                {isLoading && <Loader />}
                {blogs.map((blog) => (
                    <Fragment key={blog._id}>
                        {blog.type === 'image' ? (
                            <BlogImageCard blog={blog} openModal={openModal} isOpen={isOpen} Fragment={Fragment} closeModal={closeModal} />
                        ) : (
                            <BlogPostCard blog={blog} openModal={openModal} isOpen={isOpen} Fragment={Fragment} closeModal={closeModal} />
                        )}
                    </Fragment>
                ))}
            </div>

            {/* Modal */}
            <Modal isOpen={isOpen} Fragment={Fragment} modal={modal} closeModal={closeModal} />
        </div>
    );
};

export default Blogs;

