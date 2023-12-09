import BannerSlider from "./BannerSlider";

const Banner = () => {
    return (
        <div className="flex">
            <div className="flex-1 h-96 border flex justify-center items-center text-white">
                <h1 className="text-7xl italic font-extrabold">
                    Home For<span className="text-orange block ml-10">Every Paw</span>
                </h1>
            </div>
            <div className="flex-1 h-96 border"><BannerSlider></BannerSlider></div>
        </div>

    );
};

export default Banner;