import Button from '../../../Components/Button/Button';
import video from '../../../assets/1.mp4';
import image from '../../../assets/1.png';

const Banner = () => {
    return (
        <div className="flex flex-col my-4 md:my-0 overflow-hidden md:flex-row gap-2">
            <div className='w-[60%] md:hidden mx-auto'>
                <h1 className="text-3xl md:text-7xl italic font-extrabold">
                    Home For<span className="text-orange block ml-10">Every Paw</span>
                </h1>
                <div className="flex justify-end items-center">
                    <Button text={'Adopt'} />
                </div>
            </div>
            <div className="md:h-[400px] relative mx-auto w-full ">
                <video className="h-full absolute left-[10%] mx-auto object-contain w-full hidden lg:flex" autoPlay muted loop>
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <img className="w-full object-cover flex lg:hidden" src={image} alt="" />
                <div className='absolute hidden md:block left-5 top-10'>
                    <h1 className="text-3xl  md:text-7xl italic font-extrabold">
                        Home For<span className="text-orange block ml-10">Every Paw</span>
                    </h1>
                    <div className="flex justify-end items-center">
                        <Button text={'Adopt'} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
