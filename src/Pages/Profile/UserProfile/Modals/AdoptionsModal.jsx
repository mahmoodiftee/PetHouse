import { Dialog, Transition } from '@headlessui/react'
import Loader from '../../../../Components/Loader/Loader';
import { ImCross } from "react-icons/im";
import useAdoptions from '../../../../Hooks/ProfileHooks/useAdoptions';
import { Link } from 'react-router-dom';
const AdoptionsModal = ({ isOpen, Fragment, closeModal }) => {
    const [adoption, , isLoading] = useAdoptions();
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
                            <Dialog.Panel className="w-full max-w-5xl transform overflow-y-auto rounded-2xl bg-[#000000] border-4 border-[#161616] p-6 text-left flex justify-center items-center align-middle shadow-xl transition-all">
                                <div className="w-full h-[450px] overflow-x-hidden overflow-y-auto relative">
                                <button onClick={closeModal} className='btn btn-sm btn-circle p-2 z-50 text-white hover:text-black absolute right-3 top-0 bg-[#161616] hover:bg-orange transition-all duration-500 rounded-full'><ImCross className='text-sm' /></button>
                                    <div className='text-center text-xl md:text-2xl font-extrabold text-orange'>
                                        Adoptions
                                    </div>
                                    <div className='flex justify-center items-center'>
                                        {isLoading && <Loader />}
                                    </div>
                                    {adoption && adoption.length < 1 ? (
                                        <div className='w-[70%] md:w-[80%] mx-auto h-[80%] my-auto text-center flex justify-center items-center'>You dont have any adoption post yet.</div>

                                    ) : (
                                        <div className='p-4 md:p-4 grid grid-cols-1 md:grid-cols-3 items-center gap-4'>
                                            {
                                                adoption.map((post) => (
                                                    <Link to={`/adoption-detail/${post._id}`} key={post._id} className="overflow-hidden cursor-pointer h-[340px] md:h-[360px] w-full rounded-lg bg-[#171717] mx-auto p-2 lg:p-4">
                                                        <div className="h-[45%] overflow-hidden w-full">
                                                            <img
                                                                src={post.img}
                                                                alt=""
                                                                className="h-full cursor-pointer mx-auto object-contain transition-transform transform-gpu hover:scale-150"
                                                                style={{ transition: "transform 0.3s ease-in-out" }}
                                                            />
                                                        </div>
                                                        <article className="flex my-2 max-w-xl flex-col items-start justify-between">
                                                            <div className="flex justify-between w-full mb-2 items-center gap-x-4 text-xs">
                                                                <p href="#" className="relative z-10 rounded-full px-1.5 py-2px text-[10px] font-medium text-white bg-orange hover:bg-orange hover:text-white">{post.type}</p>
                                                                <p className="text-orange">{post.date}</p>
                                                            </div>
                                                            <div className="group relative">
                                                                <h3 className=" text-lg font-semibold leading-6 text-orange group-hover:text-orange">
                                                                    <p href="#">
                                                                        <span className="absolute inset-0"></span>
                                                                        {post.desc?.split(' ')[0].replace(/[,]/g, '')}
                                                                    </p>
                                                                </h3>
                                                                <div className="h-[75px]">
                                                                    <p className="text-[12px] md:text-sm md:leading-6 text-gray-400">{post.desc.split(' ').slice(0, 30).join(' ')}..</p>
                                                                </div>
                                                            </div>
                                                            <div className="relative my-1 flex items-center gap-x-4">
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

export default AdoptionsModal;