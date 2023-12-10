import image from '../../../assets/1.png'
const Banner = () => {
    return (
        <div className="flex">
            <div className="flex-1 flex justify-center items-center text-white">
                <div>
                    <h1 className="text-7xl italic font-extrabold">
                        Home For<span className="text-orange block ml-10">Every Paw</span>
                    </h1>
                    <div className="flex justify-end mt-2 items-center">
                        <a class="Button" href="#">
                            <span class="Button__inner"> Adopt </span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex-1 flex justify-center items-center h-full w-full ">
                <img className="w-full object-cover" src={image} alt="" />
            </div>
        </div>

    );
};

export default Banner;