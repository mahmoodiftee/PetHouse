import About from "./About/About";
import Banner from "./Banner/Banner";
import Location from "./Location/Location";
import Contact from "./Contact/Contact";
import Available from "./Available/SinglePosts/Available";

const Home = () => {
    const scrollToAvailable = () => {
        const element = document.getElementById("available");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            <Banner scrollToAvailable={scrollToAvailable} />
            <About />
            <Available />
            <Contact />
            <Location />
        </>
    );
};

export default Home;