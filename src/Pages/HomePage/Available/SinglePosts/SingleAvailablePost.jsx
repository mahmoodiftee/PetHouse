import { useLoaderData, useNavigate } from "react-router-dom";
import './style.css';
import { useContext, useState } from 'react';
import Button from "../../../../Components/Button/Button";
import toast from "react-hot-toast";
import { AuthContext } from "../../../../Providers/AuthProvider";
import useAxios from "../../../../Hooks/useAxios";
import usePost from "../../../../Hooks/usePost";

const SingleAvailablePost = () => {
  const { user } = useContext(AuthContext);
  const axiosInstance = useAxios();
  const post = useLoaderData();
  const [, refetch] = usePost();
  const [isSignUpActive, setSignUpActive] = useState();

  const handleSignUpClick = () => {
    setSignUpActive(true);
  };

  const handleSignInClick = () => {
    setSignUpActive(false);
  };
  const navigate = useNavigate();

  const handleAdopt = async (e) => {
    e.preventDefault();
    const message = e.target.message.value;
    const adopterEmail = user?.email;
    const presentStatus = 'Pending';
    const adopterDP = user?.photoURL;
    const adopterName = user?.displayName;
    const selectedPost = { ...post, presentStatus, postId: post._id, adopterDP, adopterName, adopterEmail, message, };
    try {
      const adoptionResponse = await axiosInstance.post('/adopted', selectedPost);

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

          const statusChange = await axiosInstance.patch(`/avaiable-pets/${post._id}`, { status: 'pending' });
          if (statusChange.status === 200) {
            toast('Submitted Adoption Request', {
              icon: '✅',
              style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
              },
            });
            refetch();
            navigate('/');
          }
        }
      }
    } catch (error) {
      console.error('Error Submitting Adoption Request:', error);
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
              <img className="h-72 object-contain" src={post.img} alt="" />
            </form>
          </div>
          <div className="sign-up">
            <form className="AdoptionForm" action="#">
              <img className="h-72 object-contain" src={post.img} alt="" />
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay relative">
              <h1 className="text-2xl absolute text-orange font-extrabold left-44 top-6">Conditions</h1>
              <form onSubmit={handleAdopt} className="overlay-left">
                <div className="w-full form-control">
                  <div className="label mt-16 w-full gap-4">
                    <div className="flex w-full justify-between flex-col gap-2">
                      {Object.entries(post.conditions).map(([field, value], i) => (
                        i < 4 && (
                          <div key={i} className="w-full flex gap-10 justify-between items-center">
                            <span className="text-gray-200 text-[14px] font-medium">{`${i + 1}: ${value}`}</span>
                            <input required type="checkbox" className="checkbox bg-dark checkbox-md" />
                          </div>
                        )
                      ))}
                    </div>
                  </div>
                </div>
                <textarea
                  required
                  name="message"
                  placeholder={`A message for the ${post.name || (post.desc?.split(', ')[0])}'s well-wisher...`}
                  className="w-full my-2 placeholder:text-white/50 textarea border-0 border-lite bg-[#1A1A1A] focus:ring-2 focus:ring-inset focus:ring-orange rounded-2xl textarea-sm mb-2" />
                <div className="flex gap-6 mr-2 my-3">
                  <button type="submit" className="Button buttonA">
                    <span className="Button__inner">Adopt</span>
                  </button>
                  <button onClick={handleSignInClick} type="button" className="Button buttonA">
                    <span className="Button__inner">Details</span>
                  </button>
                </div>
              </form>
              <div className="overlay-right relative">
                <div className="flex items-center absolute right-5 my-4 top-0 gap-x-4">
                  {
                    post && post?.author ? (
                      <>
                        <div className="text-sm leading-6">
                          <p className="font-semibold text-[12px] text-orange">
                            {post?.author}
                          </p>
                        </div>
                        <img src={post?.authorImg} alt="" className="h-8 w-8 rounded-full bg-black" />
                      </>
                    ) : (
                      <>
                        <div className="text-sm leading-6">
                          <p className="font-semibold text-[12px] text-orange">
                            John Doe
                          </p>
                        </div>
                        <img src="https://tailwindcss.com/_next/static/media/guillermo-rauch.8a24ab88.jpg" alt="" className="h-8 w-8 rounded-full bg-black" />
                      </>
                    )
                  }
                </div>
                <div className="w-full">
                  <h3 className="text-2xl md:text-4xl mb-4 font-semibold leading-6 text-orange group-hover:text-orange">
                    {
                      post && post?.name ? (
                        <p href="#">
                          {post.name}
                        </p>
                      ) : (
                        <p href="#">
                          {post.desc?.split(' ')[0].replace(/[,]/g, '')}
                        </p>
                      )
                    }
                  </h3>
                  <p className="text-sm md:text-xl mb-2 font-light">
                    <span className="text-[16px] md:text-xl font-bold">Age :</span> {post?.age}
                  </p>
                  <p className="text-[12px] md:text-[16px] mb-2 font-light">
                    <span className="text-[16px] md:text-xl font-bold">Description: </span> {post?.desc}
                  </p>
                  <Button text={'Adopt'} onClick={handleSignUpClick} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block w-full md:hidden">
        <div className="w-full min-h-screen flex flex-col justify-center items-center mx-auto p-4 -my-8">
          <div className="w-full min-h-[450px] flex flex-col md:flex-row justify-center -gap-2 items-center">
            <div className="min-h-96 md:min-h-[450px] bg-dark w-full flex-1 flex justify-center items-center rounded-xl">
              <img className="h-72 md:h-96 w-full object-contain" src={post.img} alt="" />
            </div>
            <div className="min-h-96 md:min-h-[450px] w-full flex-1 flex justify-start md:items-center px-2 py-6">
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
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <h1 className="text-orange w-[40%] mx-auto text-center border-2 border-x-transparent border-t-transparent border-b-orange">Adoption Form</h1>
            <form onSubmit={handleAdopt} className="w-full">
              <div className="w-full form-control">
                <div className=" w-full label mt-4 gap-4">
                  <div className="flex w-full justify-between flex-col px-2 gap-2">
                    {Object.entries(post.conditions).map(([field, value], i) => (
                      i < 4 && (
                        <div key={i} className="w-full flex gap-10 justify-between items-center">
                          <span className="text-gray-200 text-[14px] font-medium">{`${i + 1}: ${value}`}</span>
                          <input required type="checkbox" className="checkbox bg-dark checkbox-md" />
                        </div>
                      )
                    ))}
                  </div>
                </div>
              </div>
              <textarea
                required
                name="message"
                placeholder={`A message for the ${post.name || (post.desc?.split(', ')[0])}'s well-wisher...`}
                className="w-full my-2 placeholder:text-white/50 textarea border-0 border-lite bg-[#1A1A1A] focus:ring-2 focus:ring-inset focus:ring-orange rounded-2xl textarea-sm mb-2" />

              <div className="flex justify-center mb-6">
                <button type="submit" className="Button buttonA">
                  <span className="Button__inner">Adopt</span>
                </button>
              </div>
            </form>
          </div>
        </div >
      </div>
    </div >
  );
};

export default SingleAvailablePost;
