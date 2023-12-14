import { Tab } from '@headlessui/react'
import { NavLink } from 'react-router-dom';
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const Navbar = () => {

    const links = [
        <NavLink to={'/blogs'}><p className="text-sm font-semibold">Blogs</p></NavLink>,
        <NavLink to={'adoption-post'}><p className="text-sm font-semibold">Adoption Post</p></NavLink>,
        <NavLink to={'help-post'}><p className="text-sm font-semibold">Help Post</p></NavLink>,
    ]
    return (
        <div className="h-70px flex justify-center items-center py-2 md:hidden">
            <div className="w-full max-w-md px-2 sm:px-0">
                <Tab.Group>
                    <Tab.List className="flex space-x-1 rounded-xl bg-[#111111] p-1">

                        {links.map((link) => (
                            <Tab
                                key={link.props.to}
                                className={({ selected }) =>
                                    classNames(
                                        'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                                        '',
                                        selected
                                            ? 'bg-orange text-white shadow'
                                            : 'text-white hover:bg-white/[0.12] hover:text-white'
                                    )
                                }
                            >
                                {link}
                            </Tab>
                        ))}
                    </Tab.List>
                </Tab.Group>
            </div>
        </div>
    );
};

export default Navbar;