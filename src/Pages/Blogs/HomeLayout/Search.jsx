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
            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="rounded-lg w-full bg-[#202020] border-2 border-[#2c2c2c] px-4 mb-2 py-2 text-left text-sm font-medium text-gray-300 hover:bg-[#202020] focus:outline-none focus-visible:ring focus-visible:ring-white/75"
            />
            <div className="w-full flex items-start justify-start">
                <button onClick={handleSearch} className=" bg-[#202020] hover:bg-orange transition-all duration-500 text-sm px-4 py-1 text-white rounded-lg">
                    Search
                </button>
            </div>
            <div className='w-full my-6'>
                <h1 className="text-sm">post you can search for based of category</h1>
                <div className='flex flex-wrap items-center py-4  gap-2'>
                    <div className='flex-shrink-0 border-[.5px] px-2 py-1 rounded-lg border-opacity-[15%] border-gray-200 text-gray-300 text-[12px]'>cat</div>
                    <div className='flex-shrink-0 border-[.5px] px-2 py-1 rounded-lg border-opacity-[15%] border-gray-200 text-gray-300 text-[12px]'>dog</div>
                    <div className='flex-shrink-0 border-[.5px] px-2 py-1 rounded-lg border-opacity-[15%] border-gray-200 text-gray-300 text-[12px]'>help</div>
                    <div className='flex-shrink-0 border-[.5px] px-2 py-1 rounded-lg border-opacity-[15%] border-gray-200 text-gray-300 text-[12px]'>adoption</div>
                    <div className='flex-shrink-0 border-[.5px] px-2 py-1 rounded-lg border-opacity-[15%] border-gray-200 text-gray-300 text-[12px]'>question</div>
                </div>
            </div>
        </div>
    );
};

export default Search;