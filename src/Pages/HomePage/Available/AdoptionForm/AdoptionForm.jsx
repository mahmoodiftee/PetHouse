import axios from "axios";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { AuthContext } from "../../../../Providers/AuthProvider";
import useAxios from "../../../../Hooks/useAxios";
import useAvaiablePosts from "../../../../Hooks/useAvaiablePosts";
import { useNavigate } from "react-router-dom";

const AdoptionForm = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const useInstance = useAxios();
    const [conditions, setConditions] = useState(['']);
    const [currentDate, setCurrentDate] = useState('');
    const [, refetch] = useAvaiablePosts();
   
    const addConditionField = () => {
        if (conditions.length < 5) {
            setConditions([...conditions, ""]);
        }
    };
    const removeConditionField = (index) => {
        const updatedConditions = [...conditions];
        updatedConditions.splice(index, 1);
        setConditions(updatedConditions);
    };
    const handleConditionChange = (index, value) => {
        const updatedConditions = [...conditions];
        updatedConditions[index] = value;
        setConditions(updatedConditions);
    };

    useEffect(() => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');

        const formattedDate = `${year}-${month}-${day}`;
        setCurrentDate(formattedDate);
    }, []);

    const handleAddPost = async (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const type = e.target.type.value;
        const age = e.target.age.value;
        const desc = e.target.desc.value;
        const image = e.target.img.files[0];
        const formData = new FormData();
        formData.append('image', image);
        const conditionsArray = conditions;

        try {
            const responseImg = await axios.post('https://api.imgbb.com/1/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                params: {
                    key: 'b21321b69dce0a6efd75bdd3a28ee2ee',
                },
            });
            const imageUrl = responseImg.data.data.url;
            const post = {
                author: user?.displayName,
                authorImg: user?.photoURL,
                authorEmail:user?.email,
                name,
                type,
                status: "available",
                img: imageUrl,
                age: age + " months",
                desc,
                date: currentDate,
                conditions: conditionsArray.length > 1 ? conditionsArray.reduce((acc, condition, index) => {
                    acc[`${index + 1}`] = condition;
                    return acc;
                }, {}) : conditionsArray[0],
            };

            console.log(post);

            const response = await useInstance.post('/avaiable-pets', post);
            const data = response.data;

            if (data.insertedId) {
                toast.success('Successful', {
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    },
                });
                navigate('/');
                refetch();
                e.target.reset();
            }
        } catch (error) {
            console.error('Error posting:', error);
            toast.error('Error posting. Please try again.');
        }
    };


    return (
        <div className="isolate min-h-screen py-10 px-6">
            <form onSubmit={handleAddPost} className="mx-auto mt-4 max-w-xl">
                <div className="grid grid-cols-1 md:gap-x-8 md:gap-y-6 sm:grid-cols-2 ">
                    <div className='mb-4'>
                        <label className="block pl-2.5 text-sm font-semibold leading-6 text-white">
                            Pet Name
                        </label>
                        <div className="mt-2.5">
                            <input
                                placeholder='name'
                                required
                                type="text"
                                name="name"
                                className="placeholder:text-white inpu input-bordered border-0 h-[42px] border-lite bg-[#1A1A1A] focus:ring-2 focus:ring-inset focus:ring-orange rounded-lg textarea-sm w-full" />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block pl-2.5 text-sm font-semibold leading-6 text-white">
                            Type
                        </label>
                        <div className="mt-2.5">
                            <select name="type" className="block w-full border-white bg-white bg-opacity-10 rounded-md border-0 px-3.5 py-2 text-white font-normal shadow-sm ring-1 ring-inset ring-orange/5 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-orange sm:text-sm sm:leading-6">
                                <option className='text-[#6b7280] font-normal bg-dark' disabled selected >Choose one </option>
                                <option className='text-white font-normal bg-dark'>Kitten</option>
                                <option className='text-white font-normal bg-dark'>Puppy</option>
                                <option className='text-white font-normal bg-dark'>Cat</option>
                                <option className='text-white font-normal bg-dark'>Dog</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:gap-x-8 md:gap-y-6 sm:grid-cols-2">
                    <div className='mb-4'>
                        <label className="block pl-2.5 text-sm font-semibold leading-6 text-white">
                            Pet Image
                        </label>
                        <div className="mt-2.5">
                            <input name='img' type="file" className="placeholder:text-white file-input w-full h-[42px] border-0 border-lite bg-[#1A1A1A] focus:ring-2 focus:ring-inset focus:ring-orange rounded-lg" />
                        </div>
                    </div>
                    <div className='mb-4'>
                        <label className="block pl-2.5 text-sm font-semibold leading-6 text-white">
                            Pet Age
                        </label>
                        <div className="mt-2.5">
                            <input
                                placeholder='Pet age'
                                required
                                type="text"
                                name="age"
                                className="placeholder:text-white inpu input-bordered border-0 h-[42px] border-lite bg-[#1A1A1A] focus:ring-2 focus:ring-inset focus:ring-orange rounded-lg textarea-sm w-full" />
                        </div>
                    </div>
                </div>
                <div>
                    <div className='mb-3 pl-2.5'>
                        <label className="block text-sm font-semibold leading-6 text-white">
                            Conditions
                        </label>
                    </div>
                    {conditions.map((condition, index) => (
                        <div key={index} className="flex relative items-center mb-2">
                            <input
                                type="text"
                                required
                                placeholder={'Add condition..'}
                                value={condition}
                                onChange={(e) => handleConditionChange(index, e.target.value)}
                                className="placeholder:text-white input input-bordered border-0 h-[42px] border-lite bg-[#1A1A1A] focus:ring-2 focus:ring-inset focus:ring-orange rounded-lg textarea-sm w-full mr-2 transition-opacity ease-in-out duration-300"
                                style={{ opacity: conditions.length > 1 && index === conditions.length - 1 ? 0.7 : 1 }}
                            />
                            {conditions.length > 1 && (
                                <button
                                    type="button"
                                    onClick={() => removeConditionField(index)}
                                    className="rounded-full absolute right-4 p-1.5 text-lg font-extrabold mx-auto cursor-pointer flex justify-center text-red-500 transition-all duration-500 hover:text-white items-center max-w-md bg-white/5 hover:bg-red-500 ring-1 ring-white/10 hover:ring-red-500"
                                >
                                    <FaMinus />
                                </button>
                            )}
                            {conditions.length < 5 && index === conditions.length - 1 && (
                                <button
                                    type="button"
                                    onClick={addConditionField}
                                    className="rounded-full absolute right-4 p-1.5 text-lg font-extrabold mx-auto cursor-pointer flex justify-center text-orange  transition-all duration-500 hover:text-white items-center max-w-md bg-white/5 hover:bg-orange ring-1 ring-white/10 hover:ring-orange"
                                >
                                    <FaPlus />
                                </button>
                            )}
                        </div>
                    ))}
                </div>
                <div>
                    <div className='mb-3 pl-2.5'>
                        <label className="block text-sm font-semibold leading-6 text-white">
                            Details
                        </label>
                    </div>
                    <textarea name="desc" placeholder='Details about the pet...' className="placeholder:text-white textarea border-0 border-lite bg-[#1A1A1A] focus:ring-2 focus:ring-inset focus:ring-orange rounded-2xl textarea-sm w-full md:mb-2"></textarea>
                </div>
                <button type="submit" className="rounded-md px-10 font-extrabold mx-auto cursor-pointer flex justify-center text-orange  transition-all duration-500 hover:text-white items-center gap-2 max-w-md my-4 bg-white/5 hover:bg-orange p-2 ring-1 ring-white/10 hover:ring-orange">
                    POST
                </button>
            </form>
        </div>
    );
};

export default AdoptionForm;