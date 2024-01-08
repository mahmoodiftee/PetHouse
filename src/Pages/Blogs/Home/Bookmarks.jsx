import React from 'react';
import { HiBookmark } from 'react-icons/hi';
import useBookmark from '../../../Hooks/useBookmarks';

const Bookmarks = () => {
    const [bookmark] = useBookmark();
    return (
        <div className='flex flex-col justify-center items-center md:px-5 px-2 py-4 gap-6 md:gap-2'>
            <h1 className='w-full text-2xl font-extrabold text-center text-gray-300 flex justify-center items-center gap-2'><span className='text-orange -mr-2'>Book</span>marks <span className='text-orange'><HiBookmark /></span></h1>
            <div className='flex flex-col gap-6 items-start w-full justify-start'>
                {
                    bookmark.map((bm) =>
                        <>
                            <div className="overflow-hidden border-4 border-lite md:min-h-56 w-full rounded-2xl bg-[#000000] p-6 mx-auto">
                                <article className="flex rounded-xl my-2 w-full flex-col items-start justify-between">
                                    <div className="group relative">
                                        <h3 className=" text-lg font-semibold leading-6 text-orange group-hover:text-orange">
                                            <p href="#">
                                                <span className="absolute inset-0"></span>
                                                {bm?.name}
                                            </p>
                                        </h3>
                                        <div className="">
                                            <p className="mt-2 text-[12px] md:text-sm md:leading-6 text-gray-400">{bm.desc}</p>
                                        </div>
                                    </div>
                                    <div className="w-full mt-4 flex justify-between items-center ">
                                        <div className="relative flex items-center gap-x-4">
                                            <img src={bm?.author_img} alt="" className="h-8 w-8 rounded-full bg-black" />
                                            <div className="text-sm leading-6">
                                                <p className="font-semibold text-[12px] text-orange">
                                                    {bm?.author}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </>
                    )
                }
            </div>

        </div>
    );
};

export default Bookmarks;