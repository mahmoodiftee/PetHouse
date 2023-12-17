import { Menu, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useCategory } from '../../../Hooks/CategoryProvider'

const Navbar = () => {
    const { setSelected, setSearchedItem } = useCategory();
    const [searchTerm, setSearchTerm] = useState('');
    const handleSelectedOption = (value) => {
        setSelected(value);
    }
    const handleSearch = () => {
        setSearchedItem(searchTerm);
    };


    return (
        <div className="h-70px flex justify-center items-center py-2 md:hidden">
            <div className="w-full flex items-center justify-between gap-2 max-w-md px-2 sm:px-0">
                <div className="relative w-full">
                    <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="block p-2.5 w-full z-20 text-sm text-gray-300 bg-[#202020] rounded-xl border-2 border-[#2c2c2c] focus:ring-[#424242] focus:border-[#424242]" placeholder="Search..." required />
                    <button onClick={handleSearch} type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-gray-300 bg-[#2c2c2c] rounded-r-xl  border border-[#2c2c2c] hover:bg-orange transition-all duration-300 hover:text-white focus:ring-[#161616]">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                        <span className="sr-only">Search</span>
                    </button>
                </div>
                <div className="w-56 text-right">
                    <Menu as="div" className="relative inline-block text-left">
                        <div>
                            <Menu.Button className="inline-flex w-full justify-center rounded-md bg-[#202020] px-4 py-2 text-sm font-medium text-gray-300 hover:bg-[#202020] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2c2c2c]">
                                Categories
                                <ChevronDownIcon
                                    className="-mr-1 ml-2 h-5 w-5 text-gray-300 hover:text-white"
                                    aria-hidden="true"
                                />
                            </Menu.Button>
                        </div>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-[#202020] shadow-lg ring-1 ring-black/5 focus:outline-none">
                                <div className="px-1 py-1 ">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <button
                                                onClick={() => handleSelectedOption('all')}
                                                className={`${active ? 'bg-gray-300 text-white' : 'text-gray-300'
                                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                            >
                                                All Post
                                            </button>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <button
                                                onClick={() => handleSelectedOption('cat')}
                                                className={`${active ? 'bg-gray-300 text-white' : 'text-gray-300'
                                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                            >
                                                Cat & Kitten
                                            </button>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <button
                                                onClick={() => handleSelectedOption('dog')}
                                                className={`${active ? 'bg-gray-300 text-white' : 'text-gray-300'
                                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                            >
                                                Dog & Puppy
                                            </button>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <button
                                                onClick={() => handleSelectedOption('questions')}
                                                className={`${active ? 'bg-gray-300 text-white' : 'text-gray-300'
                                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                            >
                                                Questions
                                            </button>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <button
                                                onClick={() => handleSelectedOption('adoption')}
                                                className={`${active ? 'bg-gray-300 text-white' : 'text-gray-300'
                                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                            >
                                                Adoption Post
                                            </button>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <button
                                                onClick={() => handleSelectedOption('help')}
                                                className={`${active ? 'bg-gray-300 text-white' : 'text-gray-300'
                                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                            >
                                                Help Post
                                            </button>
                                        )}
                                    </Menu.Item>
                                </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </div>
            </div>
        </div>
    );
};

export default Navbar;