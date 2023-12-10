import { useEffect, useState } from "react";
import Title from "../../Components/Title/Title";
import json from "../../assets/data.json";
const Available = () => {
    const [pets, setPets] = useState([]);
    useEffect(() => {
        setPets(json);
    }, [])
    console.log(pets);

    return (
        <div className="my-6 md:my-10 px-6">
            <div className="w-[30%] mx-auto">
                <Title head1={'Available'} head2={'For Adoption'}></Title>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center mt-6 md:mt-10">
                {
                    pets.map((pet) => (
                        <div key={pet.id} className="overflow-hidden h-96 w-full rounded-lg bg-[#171717] mx-auto p-6">
                            <div className="h-[45%] overflow-hidden w-full">
                                <img src={pet.img} alt="" className="h-full cursor-pointer mx-auto object-contain transition-transform transform-gpu hover:scale-150" />
                            </div>
                            <article className="flex my-2 max-w-xl flex-col items-start justify-between">
                                <div className="flex justify-between w-full mb-2 items-center gap-x-4 text-xs">
                                    <p href="#" className="relative z-10 rounded-full px-1.5 py-2px text-[10px] font-medium text-white bg-orange hover:bg-orange hover:text-white">Puppy</p>
                                    <time datetime="2020-03-16" className="text-orange">Mar 16, 2020</time>
                                </div>
                                <div className="group relative">
                                    <h3 className=" text-lg font-semibold leading-6 text-orange group-hover:text-orange">
                                        <p href="#">
                                            <span className="absolute inset-0"></span>
                                            {pet.desc.split(' ')[0]}
                                        </p>
                                    </h3>
                                    <div className="h-[75px] mb-2"> 
                                        <p className="mt-2 text-sm leading-6 hidden md:block text-gray-400">{pet.desc.split(' ').slice(0, 30).join(' ')}..</p>
                                    </div>
                                </div>
                                <div className="relative mt-3 flex items-center gap-x-4">
                                    <img src="https://tailwindcss.com/_next/static/media/guillermo-rauch.8a24ab88.jpg" alt="" className="h-8 w-8 rounded-full bg-black" />
                                    <div className="text-sm leading-6">
                                        <p class="font-semibold text-[12px] text-orange">
                                            John Doe
                                        </p>
                                    </div>
                                </div>
                            </article>
                        </div>

                    ))
                }
            </div>
        </div>
    );
};

export default Available;