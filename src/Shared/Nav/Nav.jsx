import {  useContext } from 'react'
import { Popover } from '@headlessui/react'
import { HiOutlineLogout } from "react-icons/hi";
import { IoMdArrowDropright } from "react-icons/io";
import { TiThMenu } from "react-icons/ti";
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../../Hooks/AuthProvider'
import toast from 'react-hot-toast';

const links = <>
  <NavLink to={'/'}><p className="text-sm  font-semibold">Home </p></NavLink>
  <NavLink to={'/blogs'}><p className="text-sm  font-semibold">Blogs</p></NavLink>
  <NavLink to={'/Consultation'}><p className="text-sm  font-semibold">Consultation</p></NavLink>
</>

const Nav = () => {
  const { user, LogOut, loading } = useContext(AuthContext);
  const handleSignOut = () => {
    LogOut()
    toast.success('user signed out successfully');
    navigate('/login')
  }
  return (
    <header className="text-white md:px-4 relative md:z-20">
      <nav className="w-full flex items-center justify-between px-2 py-4 md:py-2" aria-label="Global">
        <div className="flex gap-3 items-center lg:flex-1">
          <p className="text-xl font-semibold">Pet<span className='text-orange'>House</span></p>
        </div>
        <div className="flex lg:hidden">
          {
            user && user?.email ? (
              <div className="flex gap-3">
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
                <div className="dropdown dropdown-end">
                  <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="flex text-2xl text-orange justify-between items-center rounded-full">
                      <TiThMenu />
                    </div>
                  </div>
                  <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-dark rounded-xl w-52">
                    <Link to={'/'} className='mx-auto ml-3 w-full'><span className='flex items-center justify-start'>Home</span></Link>
                    <Link to={'/blogs'} className='mx-auto ml-3 w-full'><span className='flex items-center justify-start'>Blogs</span></Link>
                    <Link to={'/Consultation'} className='mx-auto ml-3 w-full'><span className='flex items-center justify-start'>Consultation</span></Link>
                    <Link
                      onClick={handleSignOut}
                      to={'/login'} className='mx-auto ml-3 w-full'><span className='flex  gap-1 items-center justify-start'>Logout <HiOutlineLogout /></span></Link>

                  </ul>
                </div>
              </div>
            ) : (
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                  <div className="flex text-2xl text-orange justify-between items-center rounded-full">
                    <TiThMenu />
                  </div>
                </div>
                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-dark rounded-xl w-52">
                  <Link to={'/'} className='mx-auto ml-3 w-full'><span className='flex items-center justify-start'>Home</span></Link>
                  <Link to={'/blogs'} className='mx-auto ml-3 w-full'><span className='flex items-center justify-start'>Blogs</span></Link>
                  <Link to={'/Consultation'} className='mx-auto ml-3 w-full'><span className='flex items-center justify-start'>Consultation</span></Link>
                  <Link to={'/login'} className='mx-auto ml-3 w-full'><span className='flex items-center justify-start'>Login <IoMdArrowDropright /></span></Link>
                </ul>
              </div>
            )
          }
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
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
    </header>
  )
}
export default Nav;