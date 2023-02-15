import { Avatar, Box, Rating, Typography } from "@mui/material";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { useState } from "react";

import leftQuote from "../../assets/Icons/left-quote.png";
import rightQuote from "../../assets/Icons/right-quote-sign.png";
import { responsive } from "./../../constants/slider";
import ButtonGroup from "./ButtonGroup";

const Reviews = () => {
  const [value, setValue] = useState(2);

  return (
    <Box
      sx={{
        width: {
          sx: "95%",
          lg: "70%",
        },
        margin: "3rem auto",
      }}
    >
      <Typography variant="h4" textAlign={"center"}>
        What Our Clients Say
      </Typography>
      <div
        style={{
          position: "relative",
        }}
      >
        <Carousel
          className="review-carousel"
          customButtonGroup={<ButtonGroup />}
          responsive={responsive}
          infinite={true}
          arrows={false}
          partialVisbile={false}
          renderButtonGroupOutside={true}
          itemClass="carousel-item-padding-40-px"
        >
          {[1, 2, 3, 4, 5, 6].map((number, i) => (
            <Box
              key={i}
              sx={{
                mt: "1rem",
                padding: "1rem",
                gap: "1rem",
                backgroundColor: "white",
                "& > img": {
                  filter:
                    "invert(89%) sepia(0%) saturate(0%) hue-rotate(156deg) brightness(99%) contrast(86%)",
                },
                "& > div": {
                  display: "flex",
                  gap: ".5rem",
                  alignItems: "center",
                },
              }}
            >
              <img src={leftQuote} alt="" height={30} />
              <br />
              <Typography
                variant="p"
                fontWeight={300}
                fontSize=".9rem"
                color={"gray"}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                pariatur cumque, nobis quod doloremque vitae facere. Laudantium
                iure totam doloremque. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Adipisci nisi ut laboriosam cumque! Quam sint
                magnam veritatis non blanditiis laborum.
              </Typography>
              <br />
              <img
                src={rightQuote}
                alt=""
                height={30}
                style={{ marginLeft: "90%" }}
              />
              <Box>
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                  sx={{ width: 56, height: 56 }}
                />
                <Box component={"div"}>
                  <Typography>Lorem, ipsum.</Typography>
                  <Rating
                    name="read-only"
                    size="small"
                    value={value}
                    readOnly
                  />
                </Box>
              </Box>
            </Box>
          ))}
        </Carousel>
      </div>
    </Box>
  );
};

export default Reviews;
