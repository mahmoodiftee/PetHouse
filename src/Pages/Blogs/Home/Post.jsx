import { TfiWrite } from "react-icons/tfi";
import { FaImage } from "react-icons/fa";
import { Fragment, useState } from "react";
import ImageForm from "../../../Components/Modals/ImageForm";
import PostForm from "../../../Components/Modals/PostForm";


const Post = () => {
    const [writeOpen, setWriteOpen] = useState(false)

    function closeWriteModal() {
        setWriteOpen(false)
    }
    function openWriteModal() {
        setWriteOpen(true)
    }
    const [imageModalOpen, setImageModalOpen] = useState(false)

    function closeImageModal() {
        setImageModalOpen(false)
    }
    function openImageModal() {
        setImageModalOpen(true)
    }
    return (
        <div className="overflow-hidden border-4 border-lite w-full rounded-2xl bg-[#000000] p-6 mx-auto">
            <div className="flex justify-between md:justify-evenly items-center">
                <div className="flex gap-2 items-center">
                    <button onClick={() => openWriteModal()} className="bg-lite btn rounded-full md:h-14 hover:bg-orange transition-all duration-500 px-4 py-1 text-white font-extrabold text-lg md:text-2xl"><TfiWrite /></button>
                    <h1 className="font-bold md:font-extrabold text-lg md:text-2xl"> Write </h1>
                </div>
                <div className="flex gap-2 items-center">
                    <button onClick={() => openImageModal()} className="bg-lite btn rounded-full md:h-14 hover:bg-orange transition-all duration-500 px-4 py-1 text-white text-lg md:text-2xl"><FaImage /></button>
                    <h1 className="font-bold md:font-extrabold text-lg md:text-2xl"> Image </h1>
                </div>
            </div>
            {/* Form Modal */}
            <PostForm
                isOpen={writeOpen}
                Fragment={Fragment}
                closeModal={closeWriteModal}
            />
            <ImageForm
                isOpen={imageModalOpen}
                Fragment={Fragment}
                closeModal={closeImageModal}
            />
        </div>
    );
};

export default Post;