import { Dialog, Transition } from '@headlessui/react'
import { useContext } from 'react';
import { AuthContext } from '../../../../Providers/AuthProvider';

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
                                <div className="w-full">
                                    <div className="flex justify-between items-center">
                                        <p href="#" className="relative z-10 rounded-full px-1.5 py-2px font-medium text-white bg-orange hover:bg-orange hover:text-white">dfasdf</p>
                                        <p className="text-orange md:pr-10">dsAFSDF</p>
                                    </div>
                                    <h3 className="text-2xl my-2 md:text-4xl mb-4 font-semibold leading-6 text-orange group-hover:text-orange">
                                        DSFAsd
                                    </h3>
                                    <p className="text-sm md:text-sm mb-2 font-light">
                                        asdff
                                    </p>
                                    <div className="relative md:mt-3 flex items-center gap-x-4">
                                        <img src={user?.photoURL} alt="" className="h-8 w-8 rounded-full bg-black" />
                                        <div className="text-sm leading-6">
                                            <p className="font-semibold text-[12px] text-orange">
                                                adsfadsf
                                            </p>
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

export default Notifications;