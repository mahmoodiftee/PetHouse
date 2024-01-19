import { Dialog, Transition } from '@headlessui/react'
import { useContext } from 'react';
import { AuthContext } from '../../../../Providers/AuthProvider';
import { ImCross } from 'react-icons/im';

const Notifications = ({ isOpen, Fragment, closeModal }) => {
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
                                <button onClick={closeModal} className='btn btn-sm btn-circle p-2 z-50 text-white hover:text-black absolute right-3 top-0 bg-[#161616] hover:bg-orange transition-all duration-500 rounded-full'><ImCross className='text-sm' /></button>
                                    <div className='text-center text-xl md:text-2xl font-extrabold text-orange'>
                                        Notifications
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

export default Notifications;