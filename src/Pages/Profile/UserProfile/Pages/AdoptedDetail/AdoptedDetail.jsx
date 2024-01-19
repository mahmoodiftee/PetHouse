import { useLoaderData } from "react-router-dom";
import './style.css';

const AdoptedDetail = () => {
    const post = useLoaderData();
    console.log(post?._id);
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
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default AdoptedDetail;