import { Dialog, Transition } from '@headlessui/react'
import { useContext } from 'react';
import { AuthContext } from '../../../../Providers/AuthProvider';
import bg from '../../../../assets/bg-3.jpg'
const EditProfile = ({ isOpen, Fragment, closeModal }) => {
    const { user } = useContext(AuthContext);
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
                            <Dialog.Panel className="w-full max-w-4xl transform overflow-y-auto rounded-2xl bg-[#000000] border-4 border-[#161616] p-6 text-left flex justify-center items-center align-middle shadow-xl transition-all">
                                <div className="w-full h-96 relative">
                                    <button onClick={closeModal} className='btn z-50 btn-circle p-2 absolute right-1 top-1'>X</button>
                                    <div className="h-[40%] flex items-center justify-center md:h-[60%] relative w-full rounded-xl" style={{ background: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                        <div className="avatar flex flex-col items-center justify-center">
                                            <div className=" w-16 md:w-28 rounded-full ring ring-blue-700 ring-offset-base-100 ring-offset-2">
                                                <img src={user?.photoURL} />
                                            </div>
                                            <h1 className="text-[12px] md:text-sm mt-1 md:mt-4 uppercase font-medium">{user?.displayName}</h1>
                                        </div>
                                    </div>
                                    <div className='flex flex-col md:flex-row md:mt-0 mt-6 justify-evenly'>
                                        <div className='my-4'>
                                            <label className="block pl-3.5  text-sm font-semibold leading-6 text-white">
                                                Change Cover
                                            </label>
                                            <div className="mt-2.5">
                                                <input name='img' type="file" className="placeholder:text-white file-input w-full h-[42px] border-0 border-lite bg-[#1A1A1A] focus:ring-2 focus:ring-inset focus:ring-orange rounded-lg" />
                                            </div>
                                        </div>
                                        <div className='my-4'>
                                            <label className="block pl-3.5 text-sm font-semibold leading-6 text-white">
                                                Change Profile
                                            </label>
                                            <div className="mt-2.5">
                                                <input name='img' type="file" className="placeholder:text-white file-input w-full h-[42px] border-0 border-lite bg-[#1A1A1A] focus:ring-2 focus:ring-inset focus:ring-orange rounded-lg" />
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
    );
};

export default EditProfile;