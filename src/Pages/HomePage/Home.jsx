import Available from "./Available/Available";
import About from "./About/About";
import Banner from "./Banner/Banner";
import Location from "./Location/Location";

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <About></About>
            <Available></Available>
            <Location></Location>
        </>
    );
};

export default Home;