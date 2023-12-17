import { useEffect, useState } from "react";
import Navbar from "../BlogNav/Navbar";
import { useCategory } from "../../../Hooks/CategoryProvider";
import json from '../../../assets/jsons/posts.json'
const Blogs = () => {
    const { Selected } = useCategory();
    const [posts, setposts] = useState([]);
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        setposts(json);
    }, [])

    useEffect(() => {
        const filteredData = posts?.filter(post => post.category.toLowerCase() === Selected.toLowerCase());
        setBlogs(filteredData || []);
    }, [posts, selectedCategory]);

    return (
        <div>
            <Navbar></Navbar>
            <div>
                {
                    blogs.map((blog) => (
                        <div key={blog.id} className="overflow-hidden cursor-pointer h-[340px] md:h-96 w-full rounded-lg bg-[#171717] mx-auto p-2 lg:p-6">
                            <div className="h-[45%] overflow-hidden w-full">
                                <img src={blog?.img} alt="" className="h-full cursor-pointer mx-auto object-contain transition-transform transform-gpu hover:scale-150" />
                            </div>
                            <article className="flex my-2 max-w-xl flex-col items-start justify-between">
                                <div className="flex justify-between w-full mb-2 items-center gap-x-4 text-xs">
                                    <p href="#" className="relative z-10 rounded-full px-1.5 py-2px text-[10px] font-medium text-white bg-orange hover:bg-orange hover:text-white">{blog?.author}</p>
                                    <p className="text-orange">{blog?.date}</p>
                                </div>
                                <div className="group relative">
                                    <h3 className=" text-lg font-semibold leading-6 text-orange group-hover:text-orange">
                                        <p href="#">
                                            <span className="absolute inset-0"></span>
                                            {blog?.desc.split(' ')[0]}
                                        </p>
                                    </h3>
                                </div>
                            </article>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Blogs;

