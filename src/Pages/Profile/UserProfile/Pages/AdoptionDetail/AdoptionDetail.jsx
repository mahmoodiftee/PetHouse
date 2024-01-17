import { useLoaderData, useNavigate } from "react-router-dom";
import './style.css';
import toast from "react-hot-toast";
import useAxios from "../../../../../Hooks/useAxios";
import { LuFileEdit } from "react-icons/lu";
import { FaRegTrashAlt } from "react-icons/fa";
import useAvaiablePosts from "../../../../../Hooks/useAvaiablePosts";
import useAdoptions from "../../../../../Hooks/ProfileHooks/useAdoptions";
import EditAdoptionPost from "../../Modals/EditAdoptionPost";
import { Fragment, useState } from "react";

const AdoptionDetail = () => {
  const axiosInstance = useAxios();
  const [, refetch] = useAvaiablePosts();
  const [, adoptionRefetch] = useAdoptions();
  const post = useLoaderData();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false)
  const [modal, setModal] = useState([]);

  function openEditModal(post) {
    setModal(post);
    setIsOpen(true)
  }
  function closeModal() {
    setIsOpen(false);
    window.location.reload();
  }

  const handleDelete = async (id) => {
    try {
      const response = await axiosInstance.delete(`/avaiable-pets/${id}`);
      const data = response.data;

      if (data.deletedCount > 0) {
        toast('Deleted Successfully', {
          icon: '✅',
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        });
        refetch();
        adoptionRefetch();
        navigate('/')
      }
    } catch (error) {
      console.error('Error deleting post:', error);
      toast.error('Error deleting post', {
        icon: '❌',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      });
    }
  }

  return (
    <div className="w-full min-h-screen flex justify-center items-center mx-auto p-4 -my-8">
      <div className="w-full min-h-[450px] flex flex-col md:flex-row justify-center -gap-2 items-center">
        <div className="min-h-96 md:min-h-[450px] bg-dark w-full flex-1 flex justify-center items-center rounded-xl">
          <img className="h-72 md:h-96 w-full object-contain" src={post.img} alt="" />
        </div>
        <div className="min-h-96 md:min-h-[450px] w-full flex-1 flex justify-start md:items-center p-6">
          <div className="relative">
            <div>
              {
                post && post?.name ? (
                  < h3 className="text-2xl md:text-4xl mb-4 font-semibold leading-6 text-orange group-hover:text-orange">
                    {post.name}
                  </h3>
                ) : (
                  <h3 className="text-2xl md:text-4xl mb-4 font-semibold leading-6 text-orange group-hover:text-orange">
                    {post.desc?.split(' ')[0]}
                  </h3>
                )
              }
              <p className="text-sm md:text-xl mb-2 font-light">
                <span className="text-[16px] md:text-xl font-bold">Age :</span> {post?.age}
              </p>
              <p className="text-[12px] md:text-[16px] mb-2 font-light">
                <span className="text-[16px] md:text-xl font-bold">Description: </span> {post?.desc}
              </p>
              <div className="flex gap-4 justify-start mt-3 items-center">
                <button onClick={() => openEditModal(post)} className="bg-[#161616] hover:bg-orange transition-all duration-500 flex btn text-lg text-orange hover:text-white justify-between items-center rounded-full">
                  <LuFileEdit />
                </button>
                <button onClick={() => handleDelete(post?._id)} className="bg-[#161616] hover:bg-orange transition-all duration-500 flex btn text-lg text-orange hover:text-white justify-between items-center rounded-full">
                  <FaRegTrashAlt />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <EditAdoptionPost isOpen={isOpen} Fragment={Fragment} modal={modal} closeModal={closeModal} />
    </div >
  );
};

export default AdoptionDetail;