import { useEffect, useState } from "react";
import Slider from "../../../Components/Slider/Slider";
import json from '../../../assets/data.json'
const BannerSlider = () => {
    const [cards, setCards] = useState([]);
    console.log(cards);
    useEffect(() => {
        setCards(json);
    }, []);
    
    return (
        <div className="">
            <div className="h-[400px]">
                <Slider cards={cards}></Slider>
            </div>
        </div>
    );
};

export default BannerSlider;
