import { useContext } from 'react'
import { Popover } from '@headlessui/react'
import { HiBookmark, HiOutlineLogout } from "react-icons/hi";
import { IoMdArrowDropright } from "react-icons/io";
import { TiThMenu } from "react-icons/ti";
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AuthContext } from '../../Providers/AuthProvider'
import toast from 'react-hot-toast';
import { CgProfile } from "react-icons/cg";
import useBookmark from '../../Hooks/useBookmarks';
import { Player } from '@lottiefiles/react-lottie-player';
import loader from '../../assets/jsons/logo1.json'

const Nav = () => {
  const location = useLocation();
  const links = <>
    <NavLink to={'/'}>
      <li className={`text-sm font-semibold ${location.pathname === '/' ? 'text-orange' : ''}`}><a className='rounded-full'>Home</a></li>
    </NavLink>
    <NavLink to={'/blogs'}>
      <li className={`text-sm font-semibold ${location.pathname === '/blogs' ? 'text-orange' : ''}`}><a className='rounded-full'>Blogs</a></li>
    </NavLink>
    <NavLink to={'/consultation'}>
      <li className={`text-sm font-semibold ${location.pathname === '/consultation' ? 'text-orange' : ''}`}><a className='rounded-full'>Chat</a></li>
    </NavLink>
  </>
  const { user, LogOut } = useContext(AuthContext);
  const [bookmark] = useBookmark();
  const handleSignOut = () => {
    LogOut()
    toast.success('user signed out successfully');
    navigate('/login')
  }
  return (
    <header className="text-white md:px-4 relative md:z-20">
      <nav className="w-full flex items-center h-[68px] justify-between px-2 py-4 md:py-2" aria-label="Global">
        <div className="flex relative gap-3 items-center lg:flex-1">
          <div className="flex absolute -left-10 justify-center items-center">
            <Player
              autoplay
              loop
              src={loader}
              className='w-[130px]'
            >
            </Player>
          </div>
          <Link to={'/'} className="text-xl font-semibold absolute left-14 pt-3">Pet<span className='text-orange'>House</span></Link>
        </div>
        <div className="flex pt-3 lg:hidden">
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
                    <p className='flex justify-end font-medium items-end text-orange rounded-xl my-1 pr-[14px]'>{user?.displayName}</p>
                    <li className='flex rounded-full justify-end font-medium text-orange items-end my-1'><Link to={'/profile'} className='rounded-full pl-[79px] py-2.5'>Profile <span className='text-xl'><CgProfile /></span></Link></li>
                    <li className='flex text-orange font-medium justify-end items-end rounded-xl my-1'><Link to={'/bookmarks'}><span className='-mr-3 p-4 h-6 w-6 flex justify-center items-center font-medium text-white rounded-full'>{bookmark?.length}</span>Bookmarks <span className='text-xl'><HiBookmark /></span></Link></li>
                  </ul>
                </div>
                <div className="dropdown dropdown-end">
                  <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="flex text-2xl text-orange justify-between items-center rounded-full">
                      <TiThMenu />
                    </div>
                  </div>
                  <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-dark rounded-xl w-52">
                    {links}
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
                  {links}
                  <Link to={'/login'} className='mx-auto ml-3 w-full'><span className='flex items-center justify-start'>Login <IoMdArrowDropright /></span></Link>
                </ul>
              </div>
            )

          }
        </div>
        <Popover.Group className="hidden lg:flex pt-3 lg:gap-x-12">
          <ul className="menu rounded-full menu-horizontal bg-base-200">
            {links}
          </ul>
        </Popover.Group>
        {
          user && user?.email ? (
            <div className="hidden pt-2 lg:flex gap-3 lg:flex-1 lg:justify-end">
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img alt="" src={user?.photoURL} />
                  </div>
                </div>
                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-dark rounded-xl w-52">
                  <p className='flex rounded-full justify-end font-medium items-end text-orange my-1 pr-[14px]'>{user?.displayName}</p>
                  <li className='flex rounded-full justify-end font-medium text-orange items-end my-1'><Link to={'/profile'} className='rounded-full pl-[79px] py-2.5'>Profile <span className='text-xl'><CgProfile /></span></Link></li>
                  <li className='flex rounded-full text-orange font-medium justify-end items-end my-1'><Link className='rounded-full' to={'/bookmarks'}><span className='-mr-3 p-4 h-6 w-6 flex justify-center items-center font-medium text-white rounded-full'>{bookmark?.length}</span>Bookmarks <span className='text-xl'><HiBookmark /></span></Link></li>
                </ul>
              </div>
              <Link
                onClick={handleSignOut}
                to={'/login'} className="text-sm font-semibold flex justify-center items-center gap-2 leading-6 ">
                Logout <span aria-hidden="true"> <HiOutlineLogout /> </span>
              </Link>
            </div>
          ) : (
            <div className="hidden pt-3 lg:flex lg:flex-1 lg:justify-end">
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