import { useState } from "react";
import { useCategory } from "../../../Hooks/CategoryProvider";


const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const { setSearchedItem } = useCategory();
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
            <div className="w-full flex items-center justify-center">
                <button onClick={handleSearch} className=" bg-[#202020] hover:bg-orange transition-all duration-500 text-sm px-4 py-1 text-white rounded-lg">
                    Search
                </button>
            </div>
        </div>
    );
};

export default Search;