const SliderCard = ({card}) => {
  return (
    <div className="">
      <figure className="">
        <img
          className="rounded-full h-[300px] object-cover filter grayscale"
          src={card.img}
          alt=""
        />
      </figure>
    </div>
  );
};

export default SliderCard;
