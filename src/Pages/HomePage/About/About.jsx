import Button from "../../../Components/Button/Button";
import Title from "../../../Components/Title/Title";
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
                    <div className="flex-1 mt-4 md:mt-0">
                        <img className="h-full " src="https://i.ibb.co/6sDMgTj/about2-2.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;