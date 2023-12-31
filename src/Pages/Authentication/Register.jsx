import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { updateProfile } from 'firebase/auth';
import { auth } from './firebase.config';
import useCustomHook from "../../Providers/CategoryProvider";
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const Register = () => {
    const { googleLogin, createUser, loading } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogin = (media) => {
        media()
            .then((response) => {
                toast.success(`Welcome ${response.user.displayName}`);
                // const userData = {
                //     displayName: response?.user?.displayName || '',
                //     email: response?.user?.email || '',
                //     photoURL: response?.user?.photoURL || '',
                //     role: 'user',
                // };

                // return axios.post("https://ims-server-kappa.vercel.app/users", userData);
            })
            .then(() => {
                // navigate(location?.state ? location.state : "/");
                navigate("/");
            })
            .catch((err) => {
                console.error("Login Error:", err.message);
                toast.error(err.message || "An error occurred.");
            });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const firstName = e.target.firstName.value;
        const lastName = e.target.lastName.value;
        const name = `${firstName} ${lastName}`;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const photoURL = e.target.photoURL.value;
        const phoneNumber = e.target.phoneNumber.value;

        // console.log({ name, firstName, photoURL, lastName, email, password, phoneNumber });
        if (password.length < 6) {
            toast.error('Password must be at least 6 characters');
            return;
        }

        try {
            await createUser(email, password);
            await updateProfile(auth.currentUser, {
                displayName: name,
                photoURL: photoURL,
            });
            // const userData = {
            //     displayName: name,
            //     email: email,
            //     photoURL: photoURL,
            // };
            toast(`Welcome ${name}`, {
                icon: '✅',
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                },
            })
            navigate('/');
            // await axios.post('https://ims-server-kappa.vercel.app/users', userData);
        } catch (error) {
            toast.error(`${error.message}`);
            console.error('Firebase Authentication Error:', error.code, error.message);
        }
    };

    return (
        <div className="isolate  pb-10 px-6">
            <div
                className="max-w-5xl mx-auto absolute inset-x-0 sm:left-[60rem] sm:top-[-5rem] top-[5rem] md:overflow-visible overflow-hidden -z-10 transform-gpu  blur-3xl "
                aria-hidden="true"
            >
                <div
                    className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Register</h2>
            </div>
            <form onSubmit={handleSubmit} className="mx-auto mt-4 max-w-xl">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                        <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-white">
                            First Name
                        </label>
                        <div className="mt-2.5">
                            <input
                                required
                                type="text"
                                name="firstName"
                                id="first-name"
                                autoComplete="given-name"
                                className="block w-full border-white bg-white bg-opacity-10 rounded-md border-0 px-3.5 py-2 text-white font-bold shadow-sm ring-1 ring-inset ring-orange/5 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-white">
                            Last Name
                        </label>
                        <div className="mt-2.5">
                            <input
                                required
                                type="text"
                                name="lastName"
                                id="last-name"
                                autoComplete="family-name"
                                className="block w-full border-white bg-white bg-opacity-10 rounded-md border-0 px-3.5 py-2 text-white font-bold shadow-sm ring-1 ring-inset ring-orange/5 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="email" className="block text-sm font-semibold leading-6 text-white">
                            Email
                        </label>
                        <div className="mt-2.5">
                            <input
                                required
                                type="email"
                                name="email"
                                id="email"
                                autoComplete="email"
                                className="block w-full border-white bg-white bg-opacity-10 rounded-md border-0 px-3.5 py-2 text-white font-bold shadow-sm ring-1 ring-inset ring-orange/5 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="company" className="block text-sm font-semibold leading-6 text-white">
                            Password
                        </label>
                        <div className="mt-2.5">
                            <input
                                required
                                type="password"
                                name="password"
                                id="password"
                                autoComplete="organization"
                                className="block w-full border-white bg-white bg-opacity-10 rounded-md border-0 px-3.5 py-2 text-white font-bold shadow-sm ring-1 ring-inset ring-orange/5 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-white">
                            Photo Url
                        </label>
                        <div className="relative mt-2.5">
                            <input
                                required
                                type="text"
                                name="photoURL"
                                id="Photo url"
                                autoComplete="url"
                                className="block w-full border-white bg-white bg-opacity-10 rounded-md border-0 px-3.5 py-2 text-white font-bold shadow-sm ring-1 ring-inset ring-orange/5 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-white">
                            Phone number
                        </label>
                        <div className="relative mt-2.5">
                            <input
                                required
                                type="tel"
                                name="phoneNumber"
                                id="phone-number"
                                autoComplete="tel"
                                className="block w-full border-white bg-white bg-opacity-10 rounded-md border-0 px-3.5 py-2 text-white font-bold shadow-sm ring-1 ring-inset ring-orange/5 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2 flex justify-center items-center">
                        <p className="text-sm p-0 m-0 leading-6 text-center w-full text-gray-400">
                            Already have an account?
                            <Link
                                to={"/login"}
                                className="font-semibold text-orange">
                                &#160; Sign In
                            </Link>
                        </p>
                    </div>
                </div>
                <div className="sm:col-span-2 flex gap-2 justify-center items-center">
                    <button className="rounded-md px-10 cursor-pointer flex justify-center text-orange items-center gap-2 max-w-md my-4 bg-white/5 p-2 ring-1 ring-white/10">
                        Register
                    </button>
                    <div className="h-10 border-gray-500 rounded-full border-2"></div>
                    <button onClick={() => handleLogin(googleLogin)} className="rounded-full cursor-pointer flex justify-center text-orange items-center gap-2 max-w-md my-4 bg-white/5 p-2 ring-1 ring-white/10">
                        <FcGoogle className="h-6 w-6 text-orange" aria-hidden="true" />
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Register;