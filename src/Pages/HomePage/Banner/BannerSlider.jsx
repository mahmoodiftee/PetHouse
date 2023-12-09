import { useEffect, useState } from "react";
import Slider from "../../../Components/Slider/Slider";

const Testimonials = () => {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        fetch("testimonials.json")
            .then((res) => res.json())
            .then((data) => setCards(data));
    }, []);

    return (
        <div className="">
            <div className="h-[400px]">
                <Slider cards={cards}></Slider>
            </div>
        </div>
    );
};

export default Testimonials;
