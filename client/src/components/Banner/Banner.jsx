import "./banner.css";
import { motion } from "framer-motion";
import { container, item, BannerCard } from "../../constants/animations";
import { Box, Button } from "@mui/material";

const Banner = () => {
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
    { element: <Button variant="contained">Explore</Button> },
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
            <motion.div key={i} variants={item}>
              {element}
            </motion.div>
          ))}
        </motion.div>

        {/* <div className="info-card">
          {[1, 2, 3].map((i) => (
            <motion.div
              variants={BannerCard}
              initial="hidden"
              animate="visible"
              className="card"
              key={i}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              quidem distinctio nulla nesciunt quasi maiores saepe quis,
              <Button variant="contained">Learn more</Button>
            </motion.div>
          ))}
        </div> */}
      </div>
    </Box>
  );
};

export default Banner;
