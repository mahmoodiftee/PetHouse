import { Dialog, Transition } from '@headlessui/react'
import { ImCross } from 'react-icons/im';
import useNotification from '../../../../Hooks/ProfileHooks/useNotification';
import Loader from '../../../../Components/Loader/Loader';
import { FaCheck } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import toast from 'react-hot-toast';
import useAxios from '../../../../Hooks/useAxios';
import useAdopted from '../../../../Hooks/ProfileHooks/useAdopted';

const Notifications = ({ isOpen, Fragment, closeModal }) => {
    const [notification, , Loading] = useNotification();
    const [, adoptedRefetch] = useAdopted();
    const axiosInstance = useAxios();

    const hnadleReject = async (id) => {
        try {
            const response = await axiosInstance.delete(`/adopted/${id}`);
            const data = response.data;
            if (data.deletedCount > 0) {
                toast('Rejected', {
                    icon: '✅',
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    },
                });
                adoptedRefetch();
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('Error', {
                icon: '❌',
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                },
            });
        }
    }

    const handleApprove = async (id) => {
        const statusChange = await axiosInstance.patch(`/avaiable-pets/${id}`, { status: 'adopted' });
        const AdoptedstatusChange = await axiosInstance.patch(`/adopted/${id}`, { status: 'adopted' });

        if (statusChange.status && AdoptedstatusChange.status === 200) {
            toast('Approved', {
                icon: '✅',
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                },
            });


        }
    }

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
                            <Dialog.Panel className="w-full max-w-5xl transform overflow-y-hidden rounded-2xl bg-[#000000] border-4 border-[#161616] md:p-6 text-left flex justify-center items-center align-middle shadow-xl transition-all">
                                <div className="w-full h-[450px] overflow-x-hidden overflow-y-auto relative">
                                    <button onClick={closeModal} className='btn btn-sm btn-circle p-2 z-50 text-white hover:text-black absolute md:right-3 md:top-0 top-3 right-4 bg-[#161616] hover:bg-orange transition-all duration-500 rounded-full'><ImCross className='text-sm' /></button>
                                    <div className='text-center text-xl md:text-2xl mt-3 md:mt-0 font-extrabold text-orange'>
                                        Notifications
                                    </div>
                                    <div className='flex justify-center items-center'>
                                        {Loading && <Loader />}
                                    </div>
                                    {notification && notification.length < 1 ? (
                                        <div className='w-[80%] mx-auto h-[80%] my-auto text-center flex justify-center items-center'>You dont have any blogs yet.</div>
                                    ) : (
                                        <div className='p-4 md:p-4 grid grid-cols-1 items-center gap-4'>
                                            {
                                                notification.map((post) => (
                                                    <div to={`/blogs/${post._id}`} key={post._id} className="border-4 border-lite md:min-h-56 w-full rounded-2xl bg-[#000000] px-3 mx-auto">
                                                        <article className="flex rounded-xl my-2 w-full flex-col items-start justify-between">
                                                            <h3 className=" text-sm font-semibold leading-6 text-orange group-hover:text-orange">
                                                                <p href="#">Pet Name: &nbsp;
                                                                    <span className='text-gray-300'>{post.name}</span>
                                                                </p>
                                                            </h3>
                                                            <div className="relative w-full flex gap-4 justify-between items-center">
                                                                <h3 className="text-justify text-[12px] md:text-sm font-semibold leading-6 text-orange group-hover:text-orange">
                                                                    <p href="#">Adopter Message: &nbsp;
                                                                        <span className='text-gray-300'>{post.message}</span>
                                                                    </p>
                                                                </h3>
                                                            </div>
                                                            <div className='w-full flex justify-between items-center'>
                                                                <div className="dropdown">
                                                                    <h3 tabIndex={0} role="button" className="text-[11px] -ml-[2px] md:ml-[1px] flex justify-center items-center gap-[5px] font-semibold  leading-5 cursor-pointer hover:text-orange">
                                                                        <CgProfile className='-mt-[2px] text-sm' /><p>Adopter's Profile</p>
                                                                    </h3>
                                                                    <ul tabIndex={0} className="mt-3 -ml-4 z-[1] px-4 shadow menu menu-sm dropdown-content bg-dark rounded-xl">
                                                                        <img className='w-14 mx-auto rounded-full' src={post.adopterDP} />
                                                                        <li className='flex text-gray-300 font-medium items-center rounded-xl my-1'>{post.adopterName}</li>
                                                                        <li className='flex text-gray-300 font-medium rounded-xl my-1'>{post.adopterEmail}</li>
                                                                    </ul>
                                                                </div>
                                                                <div className="mt-1 hidden md:flex justify-center gap-2 items-center">
                                                                    <button onClick={() => hnadleReject(post?._id)} data-tip="Reject" className='tooltip p-1 btn btn-sm btn-circle text-red-600 hover:text-white bg-[#161616] hover:bg-red-600 transition-all duration-500 rounded-full flex justify-center items-center'><ImCross className='md:text-[12px] text-[10px]' /></button>
                                                                    <button onClick={() => handleApprove(post?._id)} data-tip="Approve" className='tooltip p-1 btn btn-sm btn-circle text-green-600 hover:text-white bg-[#161616] hover:bg-green-600 transition-all duration-500 rounded-full flex justify-center items-center'><FaCheck className='md:text-lg text-[10px]' /></button>
                                                                </div>
                                                                <div className="mt-1 flex md:hidden justify-center gap-2 items-center">
                                                                    <button onClick={() => hnadleReject(post?._id)} data-tip="Reject" className='tooltip p-1 btn btn-smm btn-circle text-red-600 hover:text-white bg-[#161616] hover:bg-red-600 transition-all duration-500 rounded-full flex justify-center items-center'><ImCross className='md:text-[12px] text-[10px]' /></button>
                                                                    <button onClick={() => handleApprove(post?._id)} data-tip="Approve" className='tooltip p-1 btn btn-smm btn-circle text-green-600 hover:text-white bg-[#161616] hover:bg-green-600 transition-all duration-500 rounded-full flex justify-center items-center'><FaCheck className='md:text-lg text-[10px]' /></button>
                                                                </div>
                                                            </div>
                                                        </article>
                                                    </div>
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

export default Notifications;