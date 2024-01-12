import { useLoaderData } from "react-router-dom";
import './style.css';
import { useState } from 'react';

const SingleAvailablePost = () => {
    const post = useLoaderData();
    const [isSignUpActive, setSignUpActive] = useState();

    const handleSignUpClick = () => {
        setSignUpActive(true);
    };

    const handleSignInClick = () => {
        setSignUpActive(false);
    };

    return (
        <div className="w-full flex justify-center items-center mx-auto my-6">
            <div className="hidden md:flex">
                <div className={`Adoptioncontainer ${isSignUpActive ? 'right-panel-active' : ''}`}>
                    <div className="sign-in">
                        <form className="AdoptionForm" action="#">
                            <h1>Image</h1>
                        </form>
                    </div>
                    <div className="sign-up">
                        <form className="AdoptionForm" action="#">
                            <h1>Conditions</h1>
                        </form>
                    </div>
                    <div className="overlay-container">
                        <div className="overlay">
                            <div className="overlay-left">
                                <h1>Image</h1>
                                <button className="Abutton" onClick={handleSignInClick}>Details</button>
                            </div>
                            <div className="overlay-right">
                                <h1>Pet Details:</h1>
                                <p>To keep connected with us, please login with your personal info</p>
                                <button className="Abutton" onClick={handleSignUpClick}>Adopt</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleAvailablePost;
