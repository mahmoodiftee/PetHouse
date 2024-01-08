import { useState } from "react";
import { useCustomHook } from "../../../Providers/CategoryProvider";


const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const { setSearchedItem } = useCustomHook();
    const handleSearch = () => {
        setSearchedItem(searchTerm);
    };

    return (
        <div className="w-full ">
            <div className="relative w-full">
                <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="block p-2.5 w-full z-20 text-sm text-white bg-[#202020] rounded-xl border-2 border-[#2c2c2c] focus:ring-[#424242] focus:border-[#424242]" placeholder="Search..." required />
                <button onClick={handleSearch} type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-[#2c2c2c] rounded-r-xl  border border-[#2c2c2c] hover:bg-orange transition-all duration-300 hover:text-white focus:ring-[#161616]">
                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                    <span className="sr-only">Search</span>
                </button>
            </div>
            <div className='w-full my-6'>
                <h1 className="text-sm">post you can search based of category</h1>
                <div className='flex flex-wrap items-center py-4  gap-2'>
                    <div className='flex-shrink-0 border-[.5px] px-2 py-1 rounded-lg border-opacity-[15%] border-gray-200 text-white text-[12px]'>cat</div>
                    <div className='flex-shrink-0 border-[.5px] px-2 py-1 rounded-lg border-opacity-[15%] border-gray-200 text-white text-[12px]'>dog</div>
                    <div className='flex-shrink-0 border-[.5px] px-2 py-1 rounded-lg border-opacity-[15%] border-gray-200 text-white text-[12px]'>help</div>
                    <div className='flex-shrink-0 border-[.5px] px-2 py-1 rounded-lg border-opacity-[15%] border-gray-200 text-white text-[12px]'>adoption</div>
                    <div className='flex-shrink-0 border-[.5px] px-2 py-1 rounded-lg border-opacity-[15%] border-gray-200 text-white text-[12px]'>question</div>
                </div>
            </div>
        </div>
    );
};

export default Search;