import { Tab } from '@headlessui/react'
import { useState } from 'react'
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const Navbar = () => {

    let [categories] = useState({
        Recent: [

        ],
        Popular: [

        ],
        Trending: [

        ],
    })

    return (
        <div className="h-70px flex justify-center items-center py-2 md:hidden">
            <div className="w-full max-w-md px-2 sm:px-0">
                <Tab.Group>
                    <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
                        {Object.keys(categories).map((category) => (
                            <Tab
                                key={category}
                                className={({ selected }) =>
                                    classNames(
                                        'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                                        'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                        selected
                                            ? 'bg-white text-blue-700 shadow'
                                            : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                                    )
                                }
                            >
                                {category}
                            </Tab>
                        ))}
                    </Tab.List>
                </Tab.Group>
            </div>
        </div>
    );
};

export default Navbar;