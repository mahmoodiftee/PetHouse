import { useEffect, useState, Fragment, useContext } from "react"
import Title from "../../../Components/Title/Title"
import { Dialog, Transition } from "@headlessui/react"
import Button from "../../../Components/Button/Button"
import { Link } from "react-router-dom";
import { MdAddToPhotos } from "react-icons/md";
import useAvaiablePosts from "../../../Hooks/useAvaiablePosts";
import Loader from "../../../Components/Loader/Loader";
const Available = () => {
    const [post, refetch, isLoading] = useAvaiablePosts();
    const [isOpen, setIsOpen] = useState(false)
    const [modal, setModal] = useState([]);
    const [visibleItems, setVisibleItems] = useState(8);
    const visiblePets = post.slice(0, visibleItems)
    useEffect(() => {
        setVisibleItems(8);
    }, [post, refetch]);


    const showMore = () => {
        setVisibleItems((e) => e + 8);
    };

    const showLess = () => {
        setVisibleItems(4);
    };

    function closeModal() {
        setIsOpen(false)
    }

    function openModal(pet) {
        setModal(pet);
        setIsOpen(true)
    }

    return (
        <div id="available" className="my-6 md:my-10 px-2 md:px-6">
            <div className="md:w-[30%] w-[80%] mx-auto">
                <Title head1={'Available'} head2={'For Adoption'}></Title>
            </div>
            <Link to={'/adoption-form'} className="mt-6 md:ml-1 my-6 md:mt-10 flex justify-center"><button className="font-extrabold text-white hover:text-white/90 flex justify-center items-center gap-3"><span className="hover:text-orange/90 text-orange ">Adoption Post</span><MdAddToPhotos className="text-xl" /></button></Link>
            {isLoading &&
                <div className="w-full flex justify-center items-center">
                    <Loader />
                </div>
            }
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 items-center">
                {
                    visiblePets.map((pet) => (
                        <div key={pet._id} onClick={() => openModal(pet)} className="overflow-hidden cursor-pointer h-[340px] md:h-96 w-full rounded-lg bg-[#171717] mx-auto p-2 lg:p-6">
                            <div className="h-[45%] overflow-hidden w-full">
                                <img
                                    src={pet.img}
                                    alt=""
                                    className="h-full cursor-pointer mx-auto object-contain transition-transform transform-gpu hover:scale-150"
                                    style={{ transition: "transform 0.3s ease-in-out" }}
                                />
                            </div>
                            <article className="flex my-2 max-w-xl flex-col items-start justify-between">
                                <div className="flex justify-between w-full mb-2 items-center gap-x-4 text-xs">
                                    <p href="#" className="relative z-10 rounded-full px-1.5 py-2px text-[10px] font-medium text-white bg-orange hover:bg-orange hover:text-white">{pet.type}</p>
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
                                        <p className="mt-2 text-[12px] md:text-sm md:leading-6 text-gray-400">{pet.desc.split(' ').slice(0, 30).join(' ')}..</p>
                                    </div>
                                </div>
                                <div className="relative md:mt-3 flex items-center gap-x-4">
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
            <div className="w-full flex justify-center items-center my-6">
                {visibleItems < post.length ? (
                    <Button text={'Show More'} onClick={showMore} />
                ) : (
                    <Button text={'Show Less'} onClick={showLess} />
                )}
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
                                <Dialog.Panel className="w-full max-w-4xl h-[500px] transform overflow-hidden rounded-2xl bg-[#171717] p-6 text-left flex justify-center items-center align-middle shadow-xl transition-all">

                                    <div className="flex h-full gap-10">
                                        <div className="flex-1 h-full w-full flex-shrink-0">
                                            <img src={modal.img} className=" h-full mx-auto object-contain" />
                                        </div>
                                        <div className="flex-1 text-white flex justify-center items-center">
                                            <div>
                                                <h3 className="text-2xl md:text-4xl mb-4 font-semibold leading-6 text-orange group-hover:text-orange">
                                                    {modal.desc?.split(' ')[0]}
                                                </h3>
                                                <p className="text-sm md:text-xl mb-2 font-light">
                                                    <span className="text-[16px] md:text-xl font-bold">Age :</span> {modal?.age}
                                                </p>
                                                <p className="text-[12px] md:text-[16px] mb-2 font-light">
                                                    <span className="text-[16px] md:text-xl font-bold">Description: </span> {modal?.desc}
                                                </p>
                                                <div className="flex justify-start">
                                                    <Link className="Button buttonA" to={`/avaiable-pets/${modal._id}`}><span className="Button__inner">Adopt</span></Link>
                                                </div>
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