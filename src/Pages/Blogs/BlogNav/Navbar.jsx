import { Tab } from '@headlessui/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
    const [categories] = useState({
        Blogs: [
            {
                name: 'Blogs',
                link: '/blogs',
            },
            {
                name: 'Adoption',
                link: '/blogs/adoption-post',
            },
            {
                name: 'Help',
                link: '/blogs/help-post',
            },
        ],
    });

    return (
        <div className="h-70px flex justify-center items-center py-2 md:hidden">
            <div className="w-full max-w-md px-2 sm:px-0">
                <Tab.Group>
                    <Tab.List className="flex space-x-1 rounded-xl bg-[#111111] p-1">
                        {categories.Blogs.map((category) => (
                            <Tab
                                key={category.name}
                                className={({ selected }) =>
                                    classNames(
                                        'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                                        'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                        selected
                                            ? ' text-blue-700 shadow'
                                            : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                                    )
                                }
                            >
                                <Link to={category.link}>{category.name}</Link>
                            </Tab>
                        ))}
                    </Tab.List>
                </Tab.Group>
            </div>
        </div>
    );
};

export default Navbar;