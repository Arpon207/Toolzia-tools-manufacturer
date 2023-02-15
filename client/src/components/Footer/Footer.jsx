import { Box } from "@mui/material";
import React from "react";
import background from "../../assets/curve_overlay_big.png";
import ContactCompany from "./ContactCompany";
import QuickLinks from "./QuickLinks";
import Production from "./Production";
import Brand from "./Brand";

const Footer = () => {
  return (
    <Box
      sx={{
        background: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        opacity: 1,
        backgroundColor: "#1A191D",
        color: "white",
        padding: "4rem 0",
      }}
    >
      <Box
        sx={{
          width: "80%",
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr",
            md: "repeat(2,1fr)",
            xl: "repeat(4,1fr)",
          },
          gap: "1rem",
          margin: "0 auto",
        }}
      >
        <Brand />
        <ContactCompany />
        <QuickLinks />
        <Production />
      </Box>
    </Box>
  );
};

export default Footer;
