import Button from '../../../Components/Button/Button';
import video from '../../../assets/1.mp4';
import image from '../../../assets/1.png';

const Banner = () => {
    return (
        <div className="flex flex-col md:flex-row">
            <div className="flex ml-20 justify-center items-center text-white">
                <div>
                    <h1 className="text-3xl md:text-7xl italic font-extrabold">
                        Home For<span className="text-orange block ml-10">Every Paw</span>
                    </h1>
                    <div className="flex justify-end items-center">
                        <Button text={'Adopt'} />
                    </div>
                </div>
            </div>
            <div className="flex-1 flex justify-center items-center h-full w-full ">
                <video className="w-full hidden lg:flex object-cover" autoPlay muted loop>
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <img className="w-full object-cover flex lg:hidden" src={image} alt="" />
            </div>
        </div>
    );
};

export default Banner;
