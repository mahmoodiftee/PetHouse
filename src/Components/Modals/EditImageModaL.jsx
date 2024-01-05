import React, { useEffect, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react'

const EditImageModaL = ({ isOpen, Fragment, closeModal, modal }) => {
    const [currentDate, setCurrentDate] = useState('');
    useEffect(() => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');

        const formattedDate = `${year}-${month}-${day}`;
        setCurrentDate(formattedDate);
    }, []);

    const handlePost = async (e) => {
        e.preventDefault();
        const type = "post";
        const category = e.target.category.value;
        const name = e.target.name.value;
        const author = modal?.author;
        const author_email = modal?.author_email;
        const author_img = modal?.author_img;
        const date = currentDate;
        const desc = e.target.desc.value;;

        const newPost = {
            type,
            category,
            name,
            author,
            author_email,
            author_img,
            date,
            desc,
        };
        console.log(newPost);
    };

    return (
        <div>
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
                                <Dialog.Panel className="w-full max-w-4xl mt-24 transform overflow-y-auto rounded-2xl bg-[#000000] border-4 border-[#161616] p-6 text-left flex justify-center items-center align-middle shadow-xl transition-all">
                                    <div className="isolate pb-10 px-6">
                                        <form onSubmit={handlePost} className="mx-auto mt-4 max-w-xl">
                                            <div className='mb-4'>
                                                <label className="block text-sm font-semibold leading-6 text-white">
                                                    Pet Name
                                                </label>
                                                <div className="mt-2.5">
                                                    <input
                                                        defaultValue={modal?.name}
                                                        placeholder='name'
                                                        required
                                                        type="text"
                                                        name="name"
                                                        className="placeholder:text-white inpu input-bordered border-0 h-[42px] border-lite bg-[#1A1A1A] focus:ring-2 focus:ring-inset focus:ring-orange rounded-lg textarea-sm w-full" />
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 mb-4">
                                                <div className='mb-4'>
                                                    <label className="block text-sm font-semibold leading-6 text-white">
                                                        Image
                                                    </label>
                                                    <div className="mt-2.5">
                                                        <input name='img' type="file" className="placeholder:text-white file-input w-full h-[42px] border-0 border-lite bg-[#1A1A1A] focus:ring-2 focus:ring-inset focus:ring-orange rounded-lg" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-white">
                                                        Category
                                                    </label>
                                                    <div className="mt-2.5">
                                                        <select defaultValue={modal?.category} className="block w-full border-white bg-white bg-opacity-10 rounded-md border-0 px-3.5 py-2 text-white font-normal shadow-sm ring-1 ring-inset ring-orange/5 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-orange sm:text-sm sm:leading-6">
                                                            <option className='text-[#6b7280] font-normal bg-dark' disabled defaultValue >Choose one </option>
                                                            <option className='text-white font-normal bg-dark'>Cat/Kitten</option>
                                                            <option className='text-white font-normal bg-dark'>Dog/Puppy</option>
                                                            <option className='text-white font-normal bg-dark'>Help</option>
                                                            <option className='text-white font-normal bg-dark'>Adoption</option>
                                                            <option className='text-white font-normal bg-dark'>Question</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="">
                                                <div>
                                                    <textarea defaultValue={modal?.desc} placeholder='Share Your Thoughts...' className="placeholder:text-white textarea border-0 border-lite bg-[#1A1A1A] focus:ring-2 focus:ring-inset focus:ring-orange rounded-2xl textarea-sm w-full mb-2"></textarea>
                                                </div>
                                            </div>
                                            <button type='submit' className="rounded-md px-10 font-extrabold mx-auto cursor-pointer flex justify-center text-orange  transition-all duration-500 hover:text-white items-center gap-2 max-w-md my-4 bg-white/5 hover:bg-orange p-2 ring-1 ring-white/10 hover:ring-orange">
                                                POST
                                            </button>
                                        </form>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
    );
};

export default EditImageModaL;