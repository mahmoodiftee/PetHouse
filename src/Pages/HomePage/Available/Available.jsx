import { useEffect, useState, Fragment } from "react";
import Title from "../../../Components/Title/Title";
import json from "../../../assets/data.json";
import { Dialog, Transition } from '@headlessui/react'
const Available = () => {
    const [pets, setPets] = useState([]);
    const [isOpen, setIsOpen] = useState(false)
    const [modal, setModal] = useState([]);
    function closeModal() {
        setIsOpen(false)
    }

    function openModal(pet) {
        setModal(pet);
        setIsOpen(true)
    }
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
                        <div key={pet.id} onClick={() => openModal(pet)} className="overflow-hidden cursor-pointer h-96 w-full rounded-lg bg-[#171717] mx-auto p-6">
                            <div className="h-[45%] overflow-hidden w-full">
                                <img src={pet.img} alt="" className="h-full cursor-pointer mx-auto object-contain transition-transform transform-gpu hover:scale-150" />
                            </div>
                            <article className="flex my-2 max-w-xl flex-col items-start justify-between">
                                <div className="flex justify-between w-full mb-2 items-center gap-x-4 text-xs">
                                    <p href="#" className="relative z-10 rounded-full px-1.5 py-2px text-[10px] font-medium text-white bg-orange hover:bg-orange hover:text-white">Puppy</p>
                                    <p className="text-orange">{pet.date}</p>
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
                                        <p className="font-semibold text-[12px] text-orange">
                                            John Doe
                                        </p>
                                    </div>
                                </div>
                            </article>
                        </div>

                    ))
                }
            </div>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-4xl h-[500px] transform overflow-hidden rounded-2xl bg-[#171717] p-6 text-left align-middle shadow-xl transition-all">

                                    <div className="flex gap-10">
                                        <div className="flex-1 flex-shrink-0">
                                            <img src={modal.img} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="flex-1 gap-4">
                                            <h3 className=" text-lg font-semibold leading-6 text-orange group-hover:text-orange">
                                                Name: {modal.desc?.split(' ')[0]}
                                            </h3>
                                            <p className="text-sm mb-4  font-thin">
                                                <span className="text-sm font-bold">Age:</span> {modal?.age}
                                            </p>
                                            <p className="text-sm mb-4 max-w-[650px]  font-thin">
                                                <span className="text-sm font-bold">Description: </span> {modal?.desc}
                                            </p>
                                            <div className="flex flex-col md:flex-row justify-start gap-4">
                                                <button
                                                    className="bg-black rounded-none flex justify-center items-center gap-2 hover:shadow-inner text-white hover:bg-base-200 font-semibold hover:text-gray-600 border-none btn btn-sm lg:btn-md lg:btn-wide">
                                                    ADD TO CART</button>
                                                <button
                                                    className="bg-black rounded-none hover:shadow-inner text-white hover:bg-base-200 font-semibold hover:text-gray-600 border-none btn btn-sm lg:btn-md lg:btn-wide">
                                                    DELETE modal</button>
                                            </div>

                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
    );
};

export default Available;