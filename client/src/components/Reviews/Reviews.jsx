import leftQuote from "../../assets/Icons/left-quote.png";
import rightQuote from "../../assets/Icons/right-quote-sign.png";
import { responsive } from "./../../constants/slider";
// import ButtonGroup from "./ButtonGroup";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ButtonGroup from "./ButtonGroup";
import { useState } from "react";

const Reviews = () => {
  const [activeReview, setActiveReview] = useState(null);
  return (
    <div
      className="
      relative
    "
    >
      <div
        className="
          bg-[url('/src/assets/background-02.png')]
          bg-center
          lg:h-[80vh]
          flex
          flex-col
      "
      >
        <div
          className="
            bg-base-200/60
            flex-[3]
        "
        ></div>
        <div
          className="
            bg-[#FF6666]
            flex-[1]
        "
        ></div>
      </div>
      <div
        className="
          lg:w-3/4
          lg:absolute
          lg:top-[50%]
          lg:translate-y-[-50%]
          lg:left-1/2
          lg:translate-x-[-50%]
          grid
          grid-cols-1
          lg:grid-cols-[60%_40%]
          gap-10
          lg:gap-0
        "
      >
        <div
          className="
          w-5/6
          mx-auto
        "
        >
          <h5
            className="
              text-lg
              text-[#FF6666]
              font-semibold
              mb-3
            "
          >
            WHAT ARE REVIEWS
          </h5>
          <h3
            className="
              text-4xl
              font-bold
            "
          >
            OUR TOOLS WILL BUILD <br /> YOUR TRUST
          </h3>
          <p className="lg:w-3/4 mt-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
            in perspiciatis adipisci laboriosam nesciunt dicta praesentium
            sapiente voluptatem nisi dolores harum atque, sed sequi expedita rem
            qui similique, provident voluptates asperiores blanditiis! Vitae
            assumenda eos, doloribus eaque repellat voluptatum adipisci eligendi
            soluta cupiditate, beatae provident tempora culpa, perferendis esse
            cumque!
          </p>
        </div>
        <div
          className="
            p-10
            text-base-200
            bg-[#1A191D]
        
        "
        >
          <h5
            className="
              text-lg 
              font-semibold
              text-[#FF6666]
        "
          >
            Testimonial
          </h5>
          <h3
            className="
              text-3xl
              font-bold
        "
          >
            What Our Clients Say
          </h3>
          <Carousel
            className="
              my-10
        "
            customButtonGroup={<ButtonGroup />}
            afterChange={(previousSlide, { currentSlide, onMove }) => {}}
            responsive={responsive}
            infinite={true}
            arrows={false}
            partialVisbile={false}
            renderButtonGroupOutside={true}
            itemClass="carousel-item-padding-40-px"
          >
            {[1, 2, 3, 4, 5, 6].map((number, i) => (
              <div key={i}>
                <img className="quote" src={leftQuote} alt="" width={20} />
                <br />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                  pariatur cumque, nobis quod doloremque vitae facere.
                  Laudantium iure totam doloremque. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Adipisci nisi ut laboriosam
                  cumque! Quam sint magnam veritatis non blanditiis laborum.
                </p>
                <br />
                <img className="quote" src={rightQuote} alt="" width={20} />
                <div
                  className="
                    flex
                    gap-5
                    my-5
              "
                >
                  <div className="avatar">
                    <div className="w-14 mask mask-squircle">
                      <img src="https://images2.penguinrandomhouse.com/author/119446" />
                    </div>
                  </div>
                  <div>
                    <p>Lorem, ipsum.</p>
                    <div className="rating rating-xs">
                      <input
                        type="radio"
                        name="rating-5"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-5"
                        className="mask mask-star-2 bg-orange-400"
                        checked
                      />
                      <input
                        type="radio"
                        name="rating-5"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-5"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-5"
                        className="mask mask-star-2 bg-orange-400"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
