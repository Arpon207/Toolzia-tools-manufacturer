import icon from "../../assets/Icons/tools.png";
import { whatWeDo } from "../../constants/what_we_do";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from "../../constants/slider";

const Banner = () => {
  return (
    <div className="relative">
      <div className='bg-[url("/src/assets/banner-04-01.jpg")] banner-filter  bg-cover bg-no-repeat bg-center min-h-[95vh] lg:min-h-[80vh] pt-20 relative'>
        <div className="flex items-center justify-center">
          <div className=" rounded-xl p-5 text-white lg:w-2/6 lg:absolute lg:right-[20%] lg:top-2/4 lg:translate-y-[-50%] [&>*]:mb-4">
            <h1 className="bg-[#FF6666] flex text-3xl lg:text-5xl font-bold px-8 py-3 w-fit rounded">
              <img className="h-9 lg:h-12" src={icon} alt="" />
              Toolzia
            </h1>
            <h3 className="text-2xl lg:text-3xl font-semibold">
              The Largest Tool Manufacturer Industry
            </h3>

            <p className="text-md lg:text-xl font-medium">
              <span>Since 2001</span>, Toolzia has been manufacturing tools .
              The company's product line has broadened to include virtually
              every major type of hand tool used in construction, electronics,
              mining, and general industry in addition to the electrical and
              telecommunications fields.
            </p>

            <button className="btn-md lg:btn-md bg-[#FF6666] lg:mr-5 hover:bg-[#e25555] border-none text-white mr-5 rounded duration-300">
              Explore
            </button>
            <button className="btn-md lg:btn-md btn-neutral rounded duration-300">
              Contact Us
            </button>
          </div>
        </div>
        <div className="hidden lg:grid grid-cols-3 w-3/4 gap-1 absolute left-0 right-0 mx-auto bottom-50% bottom-[-10%] ">
          {whatWeDo.map(({ title, desc }, i) => (
            <div
              key={i}
              className="group bg-white p-5 rounded-sm shadow-sm hover:bg-[#FF6666] hover:text-white duration-500"
            >
              <h3 className="text-lg font-medium mb-3">{title}</h3>
              <p className="text-sm text-gray-600 group-hover:text-white">
                {desc}
              </p>
            </div>
          ))}
        </div>

        <div className="w-[90%] mx-auto absolute bottom-0 right-0 left-0 lg:hidden">
          <Carousel
            className="
              my-10
        "
            afterChange={(previousSlide, { currentSlide, onMove }) => {}}
            showDots={true}
            renderButtonGroupOutside
            responsive={responsive}
            infinite={true}
            arrows={false}
            partialVisbile={false}
            itemClass="carousel-item-padding-40-px"
          >
            {whatWeDo.map(({ title, desc }, i) => (
              <div
                key={i}
                className="group bg-white p-5 pb-10 rounded-md shadow-sm "
              >
                <h3 className="text-lg font-medium mb-3">{title}</h3>
                <p className="text-sm text-gray-600">{desc}</p>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Banner;
