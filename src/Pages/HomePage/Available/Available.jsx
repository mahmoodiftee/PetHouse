import { useEffect, useState, Fragment, useContext } from "react"
import Title from "../../../Components/Title/Title"
import { Dialog, Transition } from "@headlessui/react"
import Button from "../../../Components/Button/Button"
import { Link } from "react-router-dom";
import { MdAddToPhotos } from "react-icons/md";
import useAvaiablePosts from "../../../Hooks/useAvaiablePosts";
import Loader from "../../../Components/Loader/Loader";
import { AuthContext } from "../../../Providers/AuthProvider";
const Available = () => {
    const [post, refetch, isLoading] = useAvaiablePosts();
    const { user } = useContext(AuthContext);
    const [selectedTab, setSelectedTab] = useState('all');
    const [isOpen, setIsOpen] = useState(false)
    const [modal, setModal] = useState([]);
    const [visibleItems, setVisibleItems] = useState(8);
    const [initialVisibleItems, setInitialVisibleItems] = useState(8);
    const visiblePets = post
        .filter((pet) =>
            selectedTab === 'all' ? true :
                (selectedTab === 'available' ? pet.status === 'available' : pet.status === 'pending')
        )
        .slice(0, visibleItems);
    useEffect(() => {
        setInitialVisibleItems(8);
    }, [post, refetch]);

    const showMore = () => {
        setVisibleItems((prevVisibleItems) => prevVisibleItems + 8);
    };

    const showLess = () => {
        setVisibleItems(initialVisibleItems);
    };

    function closeModal() {
        setIsOpen(false)
    }

    function openModal(pet) {
        setModal(pet);
        setIsOpen(true)
    }

    const handleTabClick = (tab) => {
        setSelectedTab(tab);
        setInitialVisibleItems(8);
        setVisibleItems(8);
    };
    return (
        <div id="available" className="my-6 md:my-10 px-2 md:px-6">
            <div className="md:w-[30%] w-[80%] mx-auto">
                <Title head1={'Available'} head2={'For Adoption'}></Title>
            </div>
            <div className="flex flex-col-reverse md:flex-row mb-6 md:mb-0 justify-between items-center w-full">
                <div role="tablist" className="tabs tabs-boxed px-3 py-2 tabs-md bg-lite">
                    <a role="tab"
                        onClick={() => handleTabClick('all')}
                        className={`tab font-bold rounded-xl ${selectedTab === 'all' ? 'text-orange bg-black rounded-full ' : ''}`}
                    > All Posts</a>
                    <a role="tab"
                        onClick={() => handleTabClick('available')}
                        className={`tab font-bold rounded-xl ${selectedTab === 'available' ? 'text-orange bg-black rounded-full ' : ''}`}
                    > Available</a>
                    <a role="tab"
                        onClick={() => handleTabClick('pending')}
                        className={`tab font-bold rounded-xl ${selectedTab === 'pending' ? 'text-orange bg-black rounded-full ' : ''}`}
                    > Pending </a>
                </div>
                <Link to={'/adoption-form'} className="mt-6 md:ml-1 my-6 md:mt-10 flex justify-center"><button className="font-extrabold text-white hover:text-white/90 flex justify-center items-center gap-3"><span className="hover:text-orange/90 text-orange ">Adoption Post</span><MdAddToPhotos className="text-xl" /></button></Link>
            </div>

            {isLoading && <div className="w-full flex justify-center items-center"> <Loader /></div>}

            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 items-center">

                {
                    visiblePets.map((pet) => (
                        <div key={pet._id} onClick={() => openModal(pet)} className="overflow-hidden relative cursor-pointer h-[340px] md:h-96 w-full rounded-lg bg-[#171717] mx-auto p-2 lg:p-6">
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
                                    <p href="#" className="relative z-10 rounded-full text-[10px] text-gray-300 px-3 py-[2px] -ml-1.5 bg-black font-extrabold">{pet.type}</p>
                                    <p className="z-[10] text-orange">{pet.date}</p>
                                </div>
                                <div className="group relative">
                                    <div className="flex items-center justify-between w-full">
                                        <h3 className=" text-lg font-semibold leading-6 text-orange group-hover:text-orange">
                                            {
                                                pet && pet?.name ? (
                                                    <p href="#">
                                                        {pet.name}
                                                    </p>
                                                ) : (
                                                    <p href="#">
                                                        {pet.desc?.split(' ')[0].replace(/[,]/g, '')}
                                                    </p>
                                                )
                                            }
                                        </h3>
                                        {
                                            pet.status === 'pending' ?
                                                <p className="bg-black pl-3 pr-10 py-1 rounded-l-xl -mr-9 font-semibold text-[12px] text-red-700">{pet.status}</p> :
                                                <p className="bg-black pl-3 pr-10 py-1 rounded-l-xl -mr-9 font-semibold text-[12px] text-green-700">{pet.status}</p>
                                        }
                                    </div>
                                    <div className="h-[75px] mb-2">
                                        <p className="mt-2 text-[12px] md:text-sm md:leading-6 text-gray-400">{pet.desc.split(' ').slice(0, 30).join(' ')}..</p>
                                    </div>
                                </div>
                                <div className="relative md:mt-3 flex items-center gap-x-4">
                                    {
                                        pet && pet?.author ? (
                                            <>
                                                <img src={pet?.authorImg} alt="" className="h-8 w-8 rounded-full bg-black" />
                                                <div className="text-sm leading-6">
                                                    <p className="font-semibold text-[12px] text-orange">
                                                        {pet?.author}
                                                    </p>
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <img src="https://tailwindcss.com/_next/static/media/guillermo-rauch.8a24ab88.jpg" alt="" className="h-8 w-8 rounded-full bg-black" />
                                                <div className="text-sm leading-6">
                                                    <p className="font-semibold text-[12px] text-orange">
                                                        John Doe
                                                    </p>
                                                </div>
                                            </>
                                        )
                                    }
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
                <Dialog as="div" className="relative z-[20]" onClose={closeModal}>
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
                                                    {
                                                        modal && modal?.name ? (
                                                            <p href="#">
                                                                {modal.name}
                                                            </p>
                                                        ) : (
                                                            <p href="#">
                                                                {modal.desc?.split(' ')[0].replace(/[,]/g, '')}
                                                            </p>
                                                        )
                                                    }
                                                </h3>
                                                <p className="text-sm md:text-xl mb-2 font-light">
                                                    <span className="text-[16px] md:text-xl font-bold">Age :</span> {modal?.age}
                                                </p>
                                                <p className="text-[12px] md:text-[16px] mb-2 font-light">
                                                    <span className="text-[16px] md:text-xl font-bold">Description: </span> {modal?.desc}
                                                </p>
                                                {
                                                    modal.status === 'pending' ? (
                                                        <div className="rounded-xl text-red-500 text-start">
                                                            Not Available
                                                        </div>
                                                    ) : (
                                                        modal?.authorEmail === user?.email ?
                                                            <div className="rounded-xl text-green-500 font-bold text-start">
                                                                Your Post
                                                            </div>
                                                            : <Link className="Button buttonA" to={`/avaiable-pets/${modal._id}`}>
                                                                <span className="Button__inner">Details</span>
                                                            </Link>

                                                    )
                                                }

                                            </div>

                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div >
    );
};

export default Available;