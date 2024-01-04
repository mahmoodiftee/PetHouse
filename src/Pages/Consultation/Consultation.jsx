import React from 'react';
import { Link } from 'react-router-dom';

const Consultation = () => {
    return (
        <>
            <div className="isolate  pb-10 px-6">
                <form className="mx-auto mt-4 max-w-xl">
                    <div className='mb-4'>
                        <label className="block text-sm font-semibold leading-6 text-white">
                            Pet Name
                        </label>
                        <div className="mt-2.5">
                            <input
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
                                <select className="block w-full border-white bg-white bg-opacity-10 rounded-md border-0 px-3.5 py-2 text-white font-normal shadow-sm ring-1 ring-inset ring-orange/5 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-orange sm:text-sm sm:leading-6">
                                    <option className='text-[#6b7280] font-normal bg-dark' disabled selected >Choose one </option>
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
                            <textarea placeholder='Share Your Thoughts...' className="placeholder:text-white textarea border-0 border-lite bg-[#1A1A1A] focus:ring-2 focus:ring-inset focus:ring-orange rounded-2xl textarea-sm w-full mb-2"></textarea>
                        </div>
                    </div>
                    <button className="rounded-md px-10 font-extrabold mx-auto cursor-pointer flex justify-center text-orange  transition-all duration-500 hover:text-white items-center gap-2 max-w-md my-4 bg-white/5 hover:bg-orange p-2 ring-1 ring-white/10 hover:ring-orange">
                        POST
                    </button>
                </form>
            </div>
            <div className="isolate  pb-10 px-6">
                <form className="mx-auto mt-4 max-w-xl">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 mb-4">
                        <div>
                            <label className="block text-sm font-semibold leading-6 text-white">
                                Pet Name
                            </label>
                            <div className="mt-2.5">
                                <input
                                    placeholder='name'
                                    required
                                    type="text"
                                    name="name"
                                    className="placeholder:text-white input input-bordered border-0 h-[42px] border-lite bg-[#1A1A1A] focus:ring-2 focus:ring-inset focus:ring-orange rounded-lg textarea-sm w-full" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-white">
                                Category
                            </label>
                            <div className="mt-2.5">
                                <select className="block w-full border-white bg-white bg-opacity-10 rounded-md border-0 px-3.5 py-2 text-white font-normal shadow-sm ring-1 ring-inset ring-orange/5 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-orange sm:text-sm sm:leading-6">
                                    <option className='text-[#6b7280] font-normal bg-dark' disabled selected >Choose one </option>
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
                            <textarea placeholder='Share Your Thoughts...' className="placeholder:text-white textarea border-0 border-lite bg-[#1A1A1A] focus:ring-2 focus:ring-inset focus:ring-orange rounded-2xl textarea-sm w-full mb-2"></textarea>
                        </div>
                    </div>
                    <button className="rounded-md px-10 font-extrabold mx-auto cursor-pointer flex justify-center text-orange  transition-all duration-500 hover:text-white items-center gap-2 max-w-md my-4 bg-white/5 hover:bg-orange p-2 ring-1 ring-white/10 hover:ring-orange">
                        POST
                    </button>
                </form>
            </div>
        </>
    );
};

export default Consultation;