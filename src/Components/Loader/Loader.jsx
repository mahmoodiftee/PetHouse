import { Player } from '@lottiefiles/react-lottie-player';
import loader from '../../assets/jsons/loader1.json'
const Loader = () => {
    return (
        <div className="flex justify-center items-center">
            <Player
                autoplay
                loop
                src={loader}
                className='h-[400px] w-[350px] lg:h-[600px] lg:w-[600px]'
            >
            </Player>
        </div>
    );
};

export default Loader;