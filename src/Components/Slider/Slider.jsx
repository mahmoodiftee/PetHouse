import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Zoom, Navigation } from "swiper/modules";
import SliderCard from "./SliderCard";

const Slider = ({ cards }) => {
  console.log(cards);

  return (
    <Swiper
      style={{
        "--swiper-navigation-color": "#fff",
        "--swiper-pagination-color": "#fff",
      }}
      zoom={true}
      navigation={true}
      modules={[Zoom, Navigation]}
      className="mySwiper h-[380px]"
    >
      {cards.map((card) => (
        <SwiperSlide key={card.id}>
          <div className="swiper-zoom-container h-[380px]">
            <SliderCard card={card}></SliderCard>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
