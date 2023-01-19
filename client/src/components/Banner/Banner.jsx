import "./banner.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { container, item } from "../../constants/animations";
import { Autoplay, Pagination } from "swiper";

import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";

import "swiper/css";
import "swiper/css/pagination";

const Banner = () => {
  const imgs = [img1, img2, img3];

  const info = [
    { element: <h1>TOOlZIA</h1> },
    {
      element: (
        <h3>
          Tool <span>Manufacturer</span>
        </h3>
      ),
    },
    {
      element: (
        <p>
          <span>Since 2005</span>, Toolzia has been manufacturing tools . The
          company's product line has broadened to include virtually every major
          type of hand tool used in construction, electronics, mining, and
          general industry in addition to the electrical and telecommunications
          fields. <br /> <br /> We always focus on Quality and customer
          satisfaction Which makes us different from other Tools Manufacturing
          Companies. <br /> <br />{" "}
          <b>So, we are proud of everything we make.</b>
        </p>
      ),
    },
    { element: <Button variant="contained">Exlore</Button> },
  ];

  return (
    <Box className="banner">
      <div className="container">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="left"
        >
          {info.map(({ element }, i) => (
            <motion.div variants={item}>{element}</motion.div>
          ))}
        </motion.div>
        <motion.div
          initial={{
            y: 20,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.4,
            duration: 1,
          }}
          className="right"
        >
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            {imgs.map((image, i) => (
              <SwiperSlide className="swiper-slide" key={i}>
                <img src={image} alt="" />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </Box>
  );
};

export default Banner;
