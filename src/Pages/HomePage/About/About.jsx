import Button from "../../../Components/Button/Button";

const About = () => {
    return (
        <div className="relative overflow-hidden">
            <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
                <div className="relative mx-auto px-4 sm:static flex border">
                    <div>
                        <div className="flex items-center space-x-6 lg:space-x-8">
                            <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                                    <img
                                        src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
                                        alt=""
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                    <img
                                        src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
                                        alt=""
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                            </div>
                            <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                    <img
                                        src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
                                        alt=""
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                    <img
                                        src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
                                        alt=""
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                    <img
                                        src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
                                        alt=""
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                            </div>
                            <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                    <img
                                        src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
                                        alt=""
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                    <img
                                        src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
                                        alt=""
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:max-w-[600px] ml-10">
                        <h1 className="text-4xl text-justify font-bold tracking-tight text-white">
                            Providing Shelter, Love, and Hope to Every Paw in Need
                        </h1>
                        <p className="mt-4 text-white text-justify text-xl">
                            This year, our new summer collection will shelter you from the harsh elements of a world that doesn't care
                            if you live or die.
                        </p>
                        <Button text={'Learn More..'} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;