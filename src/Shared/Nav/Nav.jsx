import { Fragment, useContext, useState } from 'react'
import { Dialog, Popover, Transition } from '@headlessui/react'
import { HiOutlineLogout } from "react-icons/hi";
import { IoMdArrowDropright } from "react-icons/io";

import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../../Hooks/AuthProvider'
import toast from 'react-hot-toast';

const links = <>
  <NavLink to={'/'}><p className="text-sm  font-semibold">Home </p></NavLink>
  <NavLink to={'/blogs'}><p className="text-sm  font-semibold">Blogs</p></NavLink>
  <NavLink to={'/Consultation'}><p className="text-sm  font-semibold">Consultation</p></NavLink>
</>


const Nav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { user, LogOut, loading } = useContext(AuthContext);
  const handleSignOut = () => {
    LogOut()
    toast.success('user signed out successfully');
    navigate('/login')
  }
  return (
    <header className="text-white md:px-4 relative md:z-20">
      <nav className="w-full flex items-center justify-between px-2 py-2" aria-label="Global">
        <div className="flex gap-3 items-center lg:flex-1">
          {/* <a href="#" className="-m-1.5 p-1.5">
            <img className="h-12 w-auto" src={logo} alt="" />
          </a> */}
          <p className="text-xl font-semibold">Pet<span className='text-orange'>House</span></p>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 text-white w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                {links}
              </Popover.Panel>
            </Transition>
          </Popover>
          {links}

        </Popover.Group>
        {
          user && user?.email ? (
            <div className="hidden lg:flex gap-3 lg:flex-1 lg:justify-end">
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img alt="" src={user?.photoURL} />
                  </div>
                </div>
                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-dark rounded-xl w-52">
                  <li className='mx-auto'>{user?.displayName}</li>
                  <li className='mx-auto my-1'><a>Profile</a></li>
                </ul>
              </div>
              <Link
                onClick={handleSignOut}
                to={'/login'} className="text-sm font-semibold flex justify-center items-center gap-2 leading-6 ">
                Logout <span aria-hidden="true"> <HiOutlineLogout /> </span>
              </Link>
            </div>
          ) : (
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <Link
                to={'/login'} className="text-sm font-semibold flex justify-center items-center gap-2 leading-6 ">
                Log in <span aria-hidden="true"> <IoMdArrowDropright /> </span>
              </Link>
            </div>
          )
        }

      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white">
          <div className="flex items-center justify-between">
            {/* <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a> */}
            <p className="text-xl font-bold">PetHouse</p>

            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {links}
              </div>
              <div className="py-6">
                <Link
                  to={'/login'}
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
export default Nav;