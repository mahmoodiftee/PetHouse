
const BlogImageCard = ({ blog, openModal }) => {
    return (
        <div className="overflow-hidden md:h-[470px] w-full rounded-lg bg-[#000000] p-6 mx-auto">
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
        
    );
};

export default BlogImageCard;