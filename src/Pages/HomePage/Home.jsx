import Available from "./Available/Available";
import About from "./About/About";
import Banner from "./Banner/Banner";
import Location from "./Location/Location";
import Contact from "./Contact/Contact";

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <About></About>
            <Available></Available>
            <Contact></Contact>
            <Location></Location>
        </>
    );
};

export default Home;