import Button from "../../../Components/Button/Button";
import Title from "../../../Components/Title/Title";
import cat from '../../../assets/2.png'
const About = () => {
    return (
        <div className="relative overflow-hidden my-6 md:mb-10 md:mt-20">
            <Title head1={'About'} head2={'Us'}></Title>
            <div className="my-4 md:my-10">
                <div className="relative mx-auto px-4 sm:static flex flex-col-reverse md:flex-row-reverse items-center">
                    <div className="sm:max-w-[690px] flex-1">
                        <h1 className="text-2xl md:text-5xl font-bold tracking-tight text-white">
                            Providing Shelter, Love & Hope to Every Paw in Need
                        </h1>
                        <p className="mt-2 md:mt-4 tracking-tight text-white text-sm ">
                            At Pet House, our commitment is to be a beacon of compassion for animals in distress. With unwavering dedication, we strive to create a haven where every paw, furry or feathered, finds a loving home. Our mission goes beyond sheltering – it's about restoring hope, healing wounds, and creating a brighter future for every four-legged companion. Join us in our journey to make the world a better place, one paw at a time.
                        </p>
                        <Button text={'Learn More..'} />
                    </div>
                    <div className="flex-1">
                        <img className="h-full" src={cat} alt="" />
                    </div>
                    {/* <div className="mt-10 ml-10">
                        <div
                            aria-hidden="true"
                            className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                        >
                            <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
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
                        </div>

                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default About;