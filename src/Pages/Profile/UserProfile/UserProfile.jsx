import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import bg from '../../../assets/bg-3.jpg'
import bg1 from '../../../assets/bg4.jpg'
import four from '../../../assets/adopt1.png'
import three from '../../../assets/adopt2.png'
import two from '../../../assets/post1.png'
import one from '../../../assets/not.png'
import { BiSolidEdit } from "react-icons/bi";
import { RiHome3Line } from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from 'swiper/modules';
import { Link } from "react-router-dom";
const UserProfile = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="py-4 px-2 md:px-0 min-h-screen w-full">
            <div className="rounded-xl p-2 bg-dark h-[92vh] w-full">
                <div className="h-[20%]  flex items-center justify-center md:h-[35%] relative w-full rounded-xl" style={{ background: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className="avatar flex flex-col items-center justify-center">
                        <div className=" w-16 md:w-28 rounded-full ring ring-blue-700 ring-offset-base-100 ring-offset-2">
                            <img src={user?.photoURL} />
                        </div>
                        <h1 className="text-[12px] md:text-sm mt-1 md:mt-4 uppercase font-medium">{user?.displayName}</h1>
                    </div>
                    <Link to={'/'}><button className="btn bg-white bg-opacity-30 border-none text-white text-2xl font-extrabold btn-circle absolute top-5 left-5"><RiHome3Line /></button></Link>
                    <button className="btn bg-white bg-opacity-30 border-none text-white text-2xl font-extrabold btn-circle absolute top-5 right-5"><BiSolidEdit /></button>
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
                                <SwiperSlide style={{ background: `url(${bg1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                    <img className="h-[100%] mx-auto rounded-xl object-contain" src="https://i.ibb.co/6W6rqtD/bannerL.png" alt="Slider Image 1" />
                                </SwiperSlide>
                                <SwiperSlide style={{ background: `url(${bg1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                    <img className="h-[100%] mx-auto rounded-xl object-contain" src="https://i.ibb.co/jRcy4pV/about3-1.png" alt="Slider Image 1" />
                                </SwiperSlide>
                                <SwiperSlide style={{ background: `url(${bg1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                    <img className="h-[100%] mx-auto rounded-xl object-contain" src="https://i.ibb.co/CbYFXBb/about2-2.png" alt="Slider Image 1" />
                                </SwiperSlide>
                                <SwiperSlide style={{ background: `url(${bg1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                    <img className="h-[100%] mx-auto rounded-xl object-contain" src="https://i.ibb.co/SrwFK00/about1.png" alt="Slider Image 1" />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center gap-2 col-span-4 w-full h-full">
                        <div className=" bg-dark rounded-xl flex flex-col justify-center items-center h-full">
                            <img className="w-[14%] md:w-[25%] mx-auto object-contain" src={one} alt="" />
                            <h1 className="text-[12px] mt-1 md:mt-0  md:text-xl text-gray-300 font-bold">Notifications</h1>
                        </div>
                        <div className="bg-dark rounded-xl flex flex-col justify-center items-center h-full">
                            <img className="w-[12%] md:w-[20%] mx-auto object-contain" src={three} alt="" />
                            <h1 className="text-[12px] mt-1 md:mt-0 md:text-xl text-gray-300 font-bold">Adoptions</h1>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center gap-2 col-span-4 w-full h-full">
                        <div className=" bg-dark rounded-xl flex flex-col justify-center items-center h-full">
                            <img className="w-[12%] md:w-[20%] mx-auto object-contain" src={two} alt="" />
                            <h1 className="text-[12px] mt-1 md:mt-0  md:text-xl text-gray-300 font-bold">Blogs</h1>
                        </div>
                        <div className="bg-dark rounded-xl flex flex-col justify-center items-center h-full">
                            <img className="w-[12%] md:w-[20%] mx-auto object-contain" src={four} alt="" />
                            <h1 className="text-[12px] mt-1 md:mt-0  md:text-xl text-gray-300 font-bold">Adopted</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default UserProfile;