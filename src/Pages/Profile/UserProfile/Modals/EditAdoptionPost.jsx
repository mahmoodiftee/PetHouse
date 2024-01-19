import React, { useEffect, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react'
import toast from 'react-hot-toast';
import axios from 'axios';
import useAxios from '../../../../Hooks/useAxios';
import useAvaiablePosts from '../../../../Hooks/useAvaiablePosts';
const EditAdoptionPost = ({ isOpen, Fragment, closeModal, modal }) => {
    const useAxiosPost = useAxios();
    const [, refetch] = useAvaiablePosts();

    const handleUpdate = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const type = e.target.type.value;
        const img = e.target.img.files[0];
        const age = e.target.age.value;
        const desc = e.target.desc.value;

        const formData = new FormData();
        if (img) {
            formData.append('img', img);
        }

        try {
            let imageUrl = modal.img;
            if (img) {
                const responseImg = await axios.post('https://api.imgbb.com/1/upload', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    params: {
                        key: 'b21321b69dce0a6efd75bdd3a28ee2ee',
                    },
                });
                imageUrl = responseImg.data.data.url;
            }

            const updatedPost = {
                name: name,
                type: type,
                img: imageUrl,
                age: age,
                desc: desc,
            };
            console.log(updatedPost);
            const response = await useAxiosPost.patch(`/avaiable-pets/${modal?._id}`, updatedPost);
            const data = response.data;

            if (data.modifiedCount > 0) {
                toast('Successfully Updated', {
                    icon: '🐶',
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    },
                });
                refetch()
                e.target.reset();
                closeModal();
            } else {
                toast.error('Failed to update the blog post. Please try again.');
            }
        } catch (error) {
            console.error('Error updating blog:', error);
            toast.error('Error updating. Please try again.');
        }
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
                                        <form onSubmit={handleUpdate} className="mx-auto mt-4 max-w-xl">
                                            <div className="grid grid-cols-1 md:gap-x-8 md:gap-y-6 sm:grid-cols-2 ">
                                                <div className='mb-4'>
                                                    <label className="block pl-2.5 text-sm font-semibold leading-6 text-white">
                                                        Pet Name
                                                    </label>
                                                    <div className="mt-2.5">
                                                        <input
                                                            defaultValue={modal.name}
                                                            placeholder='name'
                                                            required
                                                            type="text"
                                                            name="name"
                                                            className="placeholder:text-white inpu input-bordered border-0 h-[42px] border-lite bg-[#1A1A1A] focus:ring-2 focus:ring-inset focus:ring-orange rounded-lg textarea-sm w-full" />
                                                    </div>
                                                </div>
                                                <div className="mb-4">
                                                    <label className="block pl-2.5 text-sm font-semibold leading-6 text-white">
                                                        Type
                                                    </label>
                                                    <div className="mt-2.5">
                                                        <select defaultValue={modal.type} name="type" className="block w-full border-white bg-white bg-opacity-10 rounded-md border-0 px-3.5 py-2 text-white font-normal shadow-sm ring-1 ring-inset ring-orange/5 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-orange sm:text-sm sm:leading-6">
                                                            <option className='text-[#6b7280] font-normal bg-dark' disabled selected >Choose one </option>
                                                            <option className='text-white font-normal bg-dark'>Kitten</option>
                                                            <option className='text-white font-normal bg-dark'>Puppy</option>
                                                            <option className='text-white font-normal bg-dark'>Cat</option>
                                                            <option className='text-white font-normal bg-dark'>Dog</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-1 md:gap-x-8 md:gap-y-6 sm:grid-cols-2">
                                                <div className='mb-4'>
                                                    <label className="block pl-2.5 text-sm font-semibold leading-6 text-white">
                                                        Pet Image
                                                    </label>
                                                    <div className="mt-2.5">
                                                        <input name='img' type="file" className="placeholder:text-white file-input w-full h-[42px] border-0 border-lite bg-[#1A1A1A] focus:ring-2 focus:ring-inset focus:ring-orange rounded-lg" />
                                                    </div>
                                                </div>
                                                <div className='mb-4'>
                                                    <label className="block pl-2.5 text-sm font-semibold leading-6 text-white">
                                                        Pet Age
                                                    </label>
                                                    <div className="mt-2.5">
                                                        <input
                                                            defaultValue={modal.age}
                                                            placeholder='Pet age'
                                                            required
                                                            type="text"
                                                            name="age"
                                                            className="placeholder:text-white inpu input-bordered border-0 h-[42px] border-lite bg-[#1A1A1A] focus:ring-2 focus:ring-inset focus:ring-orange rounded-lg textarea-sm w-full" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className='mb-3 pl-2.5'>
                                                    <label className="block text-sm font-semibold leading-6 text-white">
                                                        Details
                                                    </label>
                                                </div>
                                                <textarea defaultValue={modal.desc} name="desc" placeholder='Details about the pet...' className="placeholder:text-white textarea border-0 border-lite bg-[#1A1A1A] focus:ring-2 focus:ring-inset focus:ring-orange rounded-2xl textarea-sm w-full md:mb-2"></textarea>
                                            </div>
                                            <button type="submit" className="rounded-md px-10 font-extrabold mx-auto cursor-pointer flex justify-center text-orange  transition-all duration-500 hover:text-white items-center gap-2 max-w-md my-4 bg-white/5 hover:bg-orange p-2 ring-1 ring-white/10 hover:ring-orange">
                                                UPDATE
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

export default EditAdoptionPost;