import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const {
    carouselState: { currentSlide },
  } = rest;
  return (
    <div className="carousel-button-group absolute right-5 bottom-5 text-2xl text-[#FF6666] flex gap-5">
      {" "}
      <button
        className={currentSlide === 0 ? "disable" : ""}
        onClick={() => previous()}
      >
        <IoIosArrowBack />
      </button>
      <button onClick={() => next()}>
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default ButtonGroup;
