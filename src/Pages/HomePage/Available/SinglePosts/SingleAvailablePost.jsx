import { useLoaderData } from "react-router-dom";
import './style.css';
import { useState } from 'react';

const SingleAvailablePost = () => {
    const post = useLoaderData();
    const [isSignUpActive, setSignUpActive] = useState(true);

    const handleSignUpClick = () => {
        setSignUpActive(true);
    };

    const handleSignInClick = () => {
        setSignUpActive(false);
    };

    return (
        <div className="w-full my-10">
            <div className={`container ${isSignUpActive ? 'right-panel-active' : ''}`}>
                <div className="sign-up">
                    <form action="#">
                        <h1>Create Account</h1>
                        <div className="social-container">
                            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <p>or use your email for registration</p>
                        <input type="text" name="txt" placeholder="Name" required="" />
                        <input type="email" name="email" placeholder="Email" required="" />
                        <input type="password" name="pswd" placeholder="Password" required="" />
                        <button>Sign Up</button>
                    </form>
                </div>
                <div className="sign-in">
                    <form action="#">
                        <h1>Sign in</h1>
                        <div className="social-container">
                            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <p>or use your account</p>
                        <input type="email" name="email" placeholder="Email" required="" />
                        <input type="password" name="pswd" placeholder="Password" required="" />
                        <a href="#">Forget your Password?</a>
                        <button>Sign In</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us, please login with your personal info</p>
                            <button onClick={handleSignInClick}>Sign In</button>
                        </div>
                        <div className="overlay-right">
                            <h1>Hello, Friend</h1>
                            <p>Enter your personal details and start your journey with us</p>
                            <button onClick={handleSignUpClick}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleAvailablePost;
