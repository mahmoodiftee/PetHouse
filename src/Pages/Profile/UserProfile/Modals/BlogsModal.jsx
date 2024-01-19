import { Dialog, Transition } from '@headlessui/react'
import { ImCross } from 'react-icons/im';
import useBlogs from '../../../../Hooks/ProfileHooks/useBlogs';
import Loader from '../../../../Components/Loader/Loader';
import { Link } from 'react-router-dom';
const BlogsModal = ({ isOpen, Fragment, closeModal }) => {
    const [blog, , isLoading] = useBlogs();
    return (
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
                            <Dialog.Panel className="w-full max-w-5xl transform overflow-y-hidden rounded-2xl bg-[#000000] border-4 border-[#161616] p-6 text-left flex justify-center items-center align-middle shadow-xl transition-all">
                                <div className="w-full h-[450px] overflow-x-hidden overflow-y-auto relative">
                                    <button onClick={closeModal} className='btn btn-sm btn-circle p-2 z-50 text-white hover:text-black absolute right-3 top-0 bg-[#161616] hover:bg-orange transition-all duration-500 rounded-full'><ImCross className='text-sm' /></button>
                                    <div className='text-center text-xl md:text-2xl font-extrabold text-orange'>
                                        Blogs
                                    </div>
                                    <div className='flex justify-center items-center'>
                                        {isLoading && <Loader />}
                                    </div>
                                    {blog && blog.length < 1 ? (
                                        <div className='w-[80%] mx-auto h-[80%] my-auto text-center flex justify-center items-center'>You dont have any blogs yet.</div>
                                    ) : (
                                        <div className='p-4 md:p-4 grid grid-cols-1 items-center gap-4'>
                                            {
                                                blog.map((post) => (
                                                    <Link to={`/blogs/${post._id}`} key={post._id} className="overflow-hidden border-4 border-lite md:min-h-56 w-full rounded-2xl bg-[#000000] p-6 mx-auto">
                                                        <article className="flex rounded-xl my-2 w-full flex-col items-start justify-between">
                                                            <div className="group relative">
                                                                <h3 className=" text-lg font-semibold leading-6 text-orange group-hover:text-orange">
                                                                    <p href="#">
                                                                        <span className="absolute inset-0"></span>
                                                                        {post?.name}
                                                                    </p>
                                                                </h3>
                                                                <div className="hidden md:block">
                                                                    <p className="mt-2 text-[12px] md:text-sm md:leading-6 text-gray-400">{post.desc}</p>
                                                                </div>
                                                                <div className="block md:hidden">
                                                                    <p className="mt-2 text-[12px] md:text-sm md:leading-6 text-gray-400">{post.desc.split(' ').slice(0, 25).join(' ')}.</p>
                                                                </div>
                                                            </div>
                                                            <div className="w-full mt-4 flex justify-between items-center ">
                                                                <div className="relative flex items-center gap-x-4">
                                                                    <img src={post?.author_img} alt="" className="h-8 w-8 rounded-full bg-black" />
                                                                    <div className="text-sm leading-6">
                                                                        <p className="font-semibold text-[12px] text-orange">
                                                                            {post?.author}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </article>
                                                    </Link>
                                                ))
                                            }
                                        </div>
                                    )
                                    }
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

export default BlogsModal;
{/* <div className="relative my-1 flex items-center gap-x-4">
{
    post && post?.author ? (
        <>
            <img src={post?.authorImg} alt="" className="h-8 w-8 rounded-full bg-black" />
            <div className="text-sm leading-6">
                <p className="font-semibold text-[12px] text-orange">
                    {post?.author}
                </p>
            </div>
        </>
    ) : (
        <>
            <img src="https://tailwindcss.com/_next/static/media/guillermo-rauch.8a24ab88.jpg" alt="" className="h-8 w-8 rounded-full bg-black" />
            <div className="text-sm leading-6">
                <p className="font-semibold text-[12px] text-orange">
                    John Doe
                </p>
            </div>
        </>
    )
}
</div> */}