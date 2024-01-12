import Button from "../../../Components/Button/Button";
const About = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row relative mt-20 mb-28 md:mb-40 overflow-hidden justify-center md:h-[400px] mx-auto w-full">
            <img className="hidden md:-mr-16 md:flex flex-1 md:flex-none h-full object-contain" src="https://i.ibb.co/6sDMgTj/about2-2.png" alt="" />
            <div className='flex flex-col justify-center flex-1 md:flex-none md:w-[60%] items-center'>
                <h1 className="text-3xl md:text-5xl text-orange my-2 font-extrabold">About <span className="text-white">Us</span></h1>
                <h1 className="text-2xl text-center text-gray-300 md:text-xl font-bold tracking-tight">
                    Providing <span className="text-orange">shelter, </span><span className="text-orange">love & </span><span className="text-orange">hope </span> to every paw in need.
                </h1>
                <p className="mt-2 tracking-tight text-center text-white text-lg ">
                    At Pet House, our commitment is to be a beacon of compassion for animals in distress. With unwavering dedication, we strive to create a haven where every paw, furry or feathered, finds a loving home.
                </p>
                <Button text={'Learn More..'} />
            </div>
        </div>
    );
};

export default About;
{/* <div className="my-4 md:my-10">
<div className="relative mx-auto px-4 sm:static flex flex-col-reverse md:flex-row-reverse items-center">
    <div className="sm:max-w-[690px] flex-1">
    <h1 className="text-3xl md:text-5xl text-orange my-2 font-extrabold">About <span className="text-white">Us</span></h1>
        <h1 className="text-2xl text-gray-300 md:text-xl font-bold tracking-tight">
            Providing <span className="text-orange">shelter, </span><span className="text-orange">love & </span><span className="text-orange">hope </span> to every paw in need.
        </h1>
        <p className="mt-2 tracking-tight text-white text-lg ">
            At Pet House, our commitment is to be a beacon of compassion for animals in distress. With unwavering dedication, we strive to create a haven where every paw, furry or feathered, finds a loving home.
        </p>
        <Button text={'Learn More..'} />
    </div>
    <div className="flex-1 mt-4 md:mt-0">
        <img className="h-full " src="https://i.ibb.co/6sDMgTj/about2-2.png" alt="" />
    </div>
</div>
</div> */}