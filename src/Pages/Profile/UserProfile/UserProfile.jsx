import { useContext, useState, Fragment } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { BiSolidEdit } from "react-icons/bi";
import { RiHome3Line } from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from 'swiper/modules';
import { Link } from "react-router-dom";
import Notifications from "./Modals/Notifications";
import BlogsModal from "./Modals/BlogsModal";
import AdoptionsModal from "./Modals/AdoptionsModal";
import AdoptedModal from "./Modals/AdoptedModal";
import EditProfile from "./Modals/EditProfile";
const UserProfile = () => {
    const [isNotificationOpen, setIsNotificationOpen] = useState(false)
    const [isEditOpen, setIsEditOpen] = useState(false)
    const [isBlogsOpen, setIsBlogsOpen] = useState(false)
    const [isAdoptionOpen, setIsAdoptionOpen] = useState(false)
    const [isAdoptedOpen, setIsAdoptedOpen] = useState(false)
    
    function closeEditModal() {
        setIsEditOpen(false)
    }
    function closeNotificationModal() {
        setIsNotificationOpen(false)
    }
    function closeBlogsModal() {
        setIsBlogsOpen(false)
    }
    function closeAdoptionModal() {
        setIsAdoptionOpen(false)
    }
    function closeAdoptedModal() {
        setIsAdoptedOpen(false)
    }
    //Open
    function openEditModal() {
        setIsEditOpen(true)
    }
    function openNotificationModal() {
        setIsNotificationOpen(true)
    }
    function openBlogsModal() {
        setIsBlogsOpen(true)
    }
    function openAdoptionModal() {
        setIsAdoptionOpen(true)
    }
    function openAdoptedModal() {
        setIsAdoptedOpen(true)
    }

    const { user } = useContext(AuthContext);
    return (
        <div className="py-4 px-2 md:px-0 min-h-screen w-full">
            <div className="rounded-xl p-2 bg-dark h-[92vh] w-full">
                <div className="h-[20%]  flex items-center justify-center md:h-[35%] relative w-full rounded-xl" style={{ background: "url('https://i.ibb.co/WzLFn0N/bg-3-2.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    {user && user.email ? (
                        <div className="avatar flex flex-col items-center justify-center">
                            <div className=" w-16 md:w-28 rounded-full ring ring-blue-700 ring-offset-base-100 ring-offset-2">
                                <img src={user?.photoURL} />
                            </div>
                            <h1 className="text-[12px] md:text-sm mt-1 md:mt-4 uppercase font-medium">{user?.displayName}</h1>
                        </div>
                    ) : (
                        <div className="avatar flex flex-col items-center justify-center">
                            <div className=" w-16 md:w-28 rounded-full ring ring-blue-700 ring-offset-base-100 ring-offset-2">
                                <img src="https://tailwindcss.com/_next/static/media/guillermo-rauch.8a24ab88.jpg" />
                            </div>
                            <h1 className="text-[12px] md:text-sm mt-1 md:mt-4 uppercase font-medium">John Doe</h1>
                        </div>
                    )}
                    <Link to={'/'}><button className="btn bg-white bg-opacity-30 border-none text-white text-2xl font-extrabold btn-circle absolute top-5 left-5"><RiHome3Line /></button></Link>
                    <button onClick={() => openEditModal()} className="btn bg-white bg-opacity-30 border-none text-white text-2xl font-extrabold btn-circle absolute top-5 right-5"><BiSolidEdit /></button>
                </div>
                <div className="grid grid-cols-1 gap-2 p-2 md:grid-cols-11 items-center w-full h-[78%] md:h-[63%] rounded-xl mt-2 bg-[#0f0e0e]">
                    <div className="col-span-4 relative border-4 border-lite overflow-hidden hidden md:block md:col-span-3 bg-dark rounded-xl w-full h-full">
                        <div className="h-[170px] absolute blur-2xl -bottom-28 z-50 w-full bg-dark opacity-90"></div>
                        <div className="h-full w-full hidden md:flex">
                            <Swiper
                                centeredSlides={true}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                modules={[Autoplay]}
                                className="mySwiper h-full w-full"
                            >
                                <SwiperSlide style={{ background: "url('https://i.ibb.co/KyL5qzG/bg4.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                    <img className="h-[100%] mx-auto rounded-xl object-contain" src="https://i.ibb.co/wyj11sp/britni.png" alt="Slider Image 1" />
                                </SwiperSlide>
                                <SwiperSlide style={{ background: "url('https://i.ibb.co/KyL5qzG/bg4.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                    <img className="h-[100%] mx-auto rounded-xl object-contain" src="https://i.ibb.co/x1qp6xb/lazi.png" alt="Slider Image 1" />
                                </SwiperSlide>
                                <SwiperSlide style={{ background: "url('https://i.ibb.co/KyL5qzG/bg4.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                    <img className="h-[100%] mx-auto rounded-xl object-contain" src="https://i.ibb.co/dWVFq0W/miaku.png" alt="Slider Image 1" />
                                </SwiperSlide>
                                <SwiperSlide style={{ background: "url('https://i.ibb.co/KyL5qzG/bg4.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                    <img className="h-[100%] mx-auto rounded-xl object-contain" src="https://i.ibb.co/wMgd0Fq/moyna.png" alt="Slider Image 1" />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center gap-2 col-span-4 w-full h-full">
                        <div onClick={() => openNotificationModal()} className="cursor-pointer bg-dark rounded-xl flex flex-col justify-center items-center h-full">
                            <img className="w-[14%] md:w-[25%] mx-auto object-contain" src="https://i.ibb.co/DzBhYVm/not.png" alt="" />
                            <h1 className="text-[12px] mt-1 md:mt-0  md:text-xl text-gray-300 font-bold">Notifications</h1>
                            <Notifications isOpen={isNotificationOpen} Fragment={Fragment} closeModal={closeNotificationModal} />
                        </div>
                        <div onClick={() => openAdoptionModal()} className="cursor-pointer bg-dark rounded-xl flex flex-col justify-center items-center h-full">
                            <img className="w-[12%] md:w-[20%] mx-auto object-contain" src="https://i.ibb.co/V2hLRkR/puppy1.png" alt="" />
                            <h1 className="text-[12px] mt-1 md:mt-0 md:text-xl text-gray-300 font-bold">Adoptions</h1>
                            <AdoptionsModal isOpen={isAdoptionOpen} Fragment={Fragment} closeModal={closeAdoptionModal} />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center gap-2 col-span-4 w-full h-full">
                        <div onClick={() => openBlogsModal()} className="cursor-pointer bg-dark rounded-xl flex flex-col justify-center items-center h-full">
                            <img className="w-[12%] md:w-[20%] mx-auto object-contain" src="https://i.ibb.co/8m1n10R/post1.png" alt="" />
                            <h1 className="text-[12px] mt-1 md:mt-0  md:text-xl text-gray-300 font-bold">Blogs</h1>
                            <BlogsModal isOpen={isBlogsOpen} Fragment={Fragment} closeModal={closeBlogsModal} />
                        </div>
                        <div onClick={() => openAdoptedModal()} className="cursor-pointer bg-dark rounded-xl flex flex-col justify-center items-center h-full">
                            <img className="w-[12%] md:w-[20%] mx-auto object-contain" src="https://i.ibb.co/sCZz8m6/puppy2.png" alt="" />
                            <h1 className="text-[12px] mt-1 md:mt-0  md:text-xl text-gray-300 font-bold">Adopted</h1>
                            <AdoptedModal isOpen={isAdoptedOpen} Fragment={Fragment} closeModal={closeAdoptedModal} />
                        </div>
                    </div>
                </div>
            </div>
            <EditProfile isOpen={isEditOpen} Fragment={Fragment} closeModal={closeEditModal} />
        </div>

    );
};

export default UserProfile;