import { Link, useLoaderData } from "react-router-dom";
import './style.css';
import { useContext, useState } from 'react';
import Button from "../../../../Components/Button/Button";
import toast from "react-hot-toast";
import { AuthContext } from "../../../../Providers/AuthProvider";
import useAxios from "../../../../Hooks/useAxios";

const SingleAvailablePost = () => {
    const { user } = useContext(AuthContext);
    const axiosInstance = useAxios();
    const post = useLoaderData();
    const [isSignUpActive, setSignUpActive] = useState();

    const handleSignUpClick = () => {
        setSignUpActive(true);
    };

    const handleSignInClick = () => {
        setSignUpActive(false);
    };

    const handleAdopt = async () => {
        const adopterEmail = user?.email;
        const selectedPost = { ...post, adopterEmail };
        try {
          const adoptionResponse = await axiosInstance.post('/adoptions', selectedPost);
          if (adoptionResponse.status === 200) {
            if (adoptionResponse.data.error) {
              toast.error(adoptionResponse.data.error, {
                style: {
                  icon: '❌',
                  borderRadius: '10px',
                  background: '#333',
                  color: '#fff',
                },
              });
            } else {
              toast('Submitted Adoption Request', {
                icon: '✅',
                style: {
                  borderRadius: '10px',
                  background: '#333',
                  color: '#fff',
                },
              });
            }
          }
        } catch (error) {
          toast.error('Error Submitting Adoption Request', {
            style: {
              icon: '❌',
              borderRadius: '10px',
              background: '#333',
              color: '#fff',
            },
          });
        }
      };
      


    return (
        <div className="w-full flex justify-center items-center mx-auto my-6">
            <div className="hidden md:flex">
                <div className={`Adoptioncontainer ${isSignUpActive ? 'right-panel-active' : ''}`}>
                    <div className="sign-in">
                        <form className="AdoptionForm" action="#">
                            <img src={post.img} alt="" />
                        </form>
                    </div>
                    <div className="sign-up">
                        <form className="AdoptionForm" action="#">
                            <img src={post.img} alt="" />
                        </form>
                    </div>
                    <div className="overlay-container">
                        <div className="overlay relative">
                            <h1 className="text-2xl absolute text-orange font-extrabold left-44 top-6">Conditions</h1>
                            <div className="overlay-left">
                                <div className="form-control">
                                    <form className="cursor-pointer label gap-4">
                                        <span className="text-gray-200 font-medium">Remember me</span>
                                        <input type="checkbox" className="checkbox bg-dark rounded-xl checkbox-md" />
                                    </form>
                                </div>
                                <div className="flex gap-6 my-6">
                                    <Button text={'Adopt'} onClick={handleAdopt} />
                                    <Button text={'Details'} onClick={handleSignInClick} />
                                </div>
                            </div>
                            <div className="overlay-right">
                                <div>
                                    <h3 className="text-2xl md:text-4xl mb-4 font-semibold leading-6 text-orange group-hover:text-orange">
                                        {post.desc?.split(' ')[0]}
                                    </h3>
                                    <p className="text-sm md:text-xl mb-2 font-light">
                                        <span className="text-[16px] md:text-xl font-bold">Age :</span> {post?.age}
                                    </p>
                                    <p className="text-[12px] md:text-[16px] mb-2 font-light">
                                        <span className="text-[16px] md:text-xl font-bold">Description: </span> {post?.desc}
                                    </p>
                                    <Button text={'Adopt'} onClick={handleSignUpClick} />                               </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleAvailablePost;
