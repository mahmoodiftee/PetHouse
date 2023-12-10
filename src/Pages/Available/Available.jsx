import { useEffect, useState } from "react";
import Title from "../../Components/Title/Title";
import json from '../../assets/data.json';
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
                        <div key={pet.id} className="overflow-hidden w-full rounded-lg bg-[#171717] mx-auto p-6">
                            <div className="h-[80%] overflow-hidden w-full">
                                <img src={pet.img} alt="" className="h-full cursor-pointer mx-auto object-contain transition-transform transform-gpu hover:scale-150" />
                            </div>
                            <article className="flex max-w-xl flex-col items-start justify-between">
                                <div className="flex items-center gap-x-4 text-xs">
                                    <time datetime="2020-03-16" className="text-orange">Mar 16, 2020</time>
                                    <a href="#" className="relative z-10 rounded-full px-3 py-1.5 font-medium text-orange hover:bg-gray-100">Marketing</a>
                                </div>
                                <div className="group relative">
                                    <h3 className="mt-3 text-lg font-semibold leading-6 text-orange group-hover:text-orange">
                                        <a href="#">
                                            <span className="absolute inset-0"></span>
                                            {pet.desc.split(' ')[0]}
                                        </a>
                                    </h3>
                                    <p className="mt-2 text-sm leading-6 hidden md:block text-orange">
                                        {`${(pet.desc).slice(0, 30)}...`}
                                    </p>

                                </div>
                                <div className="relative mt-4 flex items-center gap-x-4">
                                    <img src="https://tailwindcss.com/_next/static/media/guillermo-rauch.8a24ab88.jpg" alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                                    <div className="text-sm leading-6">
                                        <p class="font-semibold text-orange">
                                            <a href="#">
                                                <span class="absolute inset-0"></span>
                                                John Doe
                                            </a>
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