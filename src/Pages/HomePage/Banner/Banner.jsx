import Button from '../../../Components/Button/Button';
import imageL from '../../../assets/bannerL.png';
import imageS from '../../../assets/bannerS.png';

const Banner = () => {
    return (
        <div className="flex relative justify-center overflow-hidden h-[400px] mx-auto w-full ">
            <div className='flex flex-1 md:flex-none items-center'>
                <div className='absolute md:relative ml-3'>
                    <h1 className="text-lg md:text-7xl italic font-extrabold">
                        Home For<span className="text-orange block ml-10">Every Paw</span>
                    </h1>
                    <div className="flex justify-end items-center">
                        <Button text={'Adopt'} />
                    </div>
                
                </div>
            </div>
            <img className="flex flex-1 md:flex-none h-full object-contain" src={imageL} alt="" />
        </div>
    );
};

export default Banner;
