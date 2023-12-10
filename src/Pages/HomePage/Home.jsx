import Modal from "../../Components/Modals/Modal";
import Available from "./Available/Available";
import About from "./About/About";
import Banner from "./Banner/Banner";

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <About></About>
            <Modal></Modal>
            <Available></Available>
        </>
    );
};

export default Home;