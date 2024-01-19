import { FaFacebookSquare, FaGlobe, FaWhatsapp } from "react-icons/fa";
import { IoMailOpenOutline } from "react-icons/io5";
import Title from "../../../Components/Title/Title";
import { useState } from "react";
import toast from "react-hot-toast";


const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        number: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleContact = async (e) => {
        e.preventDefault();

        const sendingToastId = toast.loading("Sending...", {
            duration: 2000,
        });

        try {
            await new Promise((resolve) => setTimeout(resolve, 2000));
            toast.dismiss(sendingToastId);
            toast.success('Got it! We will get back to you soon.', {
                duration: 3000,
            });
            setFormData({
                name: "",
                email: "",
                number: "",
            });
        } catch (error) {
            console.error("Error:", error);
        }
    };
    
    return (
        <>
            <Title head1={'Contact'} head2={'Us'} />
            <div className="relative isolate overflow-hidden rounded-xl mx-2 md:mx-6 bg-dark py-16 md:py-20 ">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-4xl lg:grid-cols-2">
                        <form onSubmit={handleContact} className="max-w-xl  lg:max-w-lg">
                            <div className=" flex max-w-md gap-x-4">
                                <label htmlFor="email-address" className="sr-only">
                                    Your Name
                                </label>
                                <input
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    name="name"
                                    type="text"
                                    autoComplete="name"
                                    required
                                    className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-orange sm:text-sm sm:leading-6"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div className="mt-6 flex max-w-md gap-x-4">
                                <label htmlFor="email-address" className="sr-only">
                                    Name
                                </label>
                                <input
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-orange sm:text-sm sm:leading-6"
                                    placeholder="Email Address"
                                />
                            </div>
                            <div className="mt-6 flex max-w-md gap-x-4">
                                <label htmlFor="email-address" className="sr-only">
                                    Contact Info
                                </label>
                                <input
                                    value={formData.number}
                                    onChange={handleInputChange}
                                    name="number"
                                    required
                                    className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-orange sm:text-sm sm:leading-6"
                                    placeholder="Contact Number"
                                />
                            </div>
                            <div>
                                <button type="submit" className="rounded-md w-full cursor-pointer flex justify-center text-orange items-center gap-2 max-w-md my-4 bg-white/5 p-2 ring-1 ring-white/10">
                                    <IoMailOpenOutline className="h-6 w-6 text-orange" aria-hidden="true" /> Contact
                                </button>
                            </div>
                        </form >
                        <dl className="grid grid-cols-1 gap-y-[30px] md:-mt-4">
                            <div className="flex flex-row gap-x-4 text-gray-400 items-center">
                                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                                    <FaWhatsapp className="h-4 w-4md:h-6 md:w-6 text-white" aria-hidden="true" />
                                </div>
                                <h1>+880 1234567890</h1>
                            </div>
                            <div className="flex flex-row gap-x-4 text-gray-400 items-center">
                                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                                    <FaGlobe className="h-4 w-4md:h-6 md:w-6 text-white" aria-hidden="true" />
                                </div>
                                <h1>www.pethouse.com</h1>
                            </div>
                            <div className="flex flex-row gap-x-4 text-gray-400 items-center">
                                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                                    <FaFacebookSquare className="h-4 w-4md:h-6 md:w-6 text-white" aria-hidden="true" />
                                </div>
                                <h1 className="hidden md:flex">www.facebook.com/pethouse.com.bd</h1>
                                <h1 className="flex md:hidden text-gray-400">www.fb.com/pethouse.com.bd</h1>
                            </div>
                        </dl>
                    </div>
                </div>
                <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
                    <div
                        className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-orange to-orange opacity-30"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
            </div>
        </>
    );
};

export default Contact;