import "./banner.css";
import { Box, Button, Typography } from "@mui/material";
import HandymanIcon from "@mui/icons-material/Handyman";
import { whatWeDo } from "../../constants/whatWeDo";

const Banner = () => {
  return (
    <Box
      className="banner-container"
      sx={{
        minHeight: {
          md: "100vh",
        },
      }}
    >
      <div className="wrapper">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: ".5rem",
            marginTop: {
              xs: "8rem",
              md: "unset",
            },
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: "2rem",
                sm: "4rem",
                md: "5rem",
              },
              color: "white",
              fontWeight: "700",
              display: "flex",
              alignItems: "center",
              gap: ".5rem",
            }}
          >
            <HandymanIcon fontSize="3rem" />
            TOOLZIA{" "}
          </Typography>{" "}
          <Typography
            sx={{
              fontSize: {
                xs: ".8rem",
                sm: "1.2rem",
                md: "1.5rem",
              },
            }}
          >
            The Largest Tool <br /> Manufacturer Industry
          </Typography>
        </Box>
        <Typography
          sx={{
            width: {
              xs: "90%",
              md: "80%",
              lg: "70%",
              xl: "50%",
            },
            fontSize: {
              xs: ".9rem",
              sm: "inherit",
            },
          }}
        >
          <span>Since 2005</span>, Toolzia has been manufacturing tools . The
          company's product line has broadened to include virtually every major
          type of hand tool used in construction, electronics, mining, and
          general industry in addition to the electrical and telecommunications
          fields.
          {/* <br /> <br /> We always focus on Quality and customer
          satisfaction Which makes us different from other Tools Manufacturing
          Companies. <br /> <br />{" "}
          <b>So, we are proud of everything we make.</b> */}
        </Typography>
        <Box>
          <Button
            variant="contained"
            color="warning"
            sx={{
              border: "1px solid orangered",
            }}
          >
            Explore
          </Button>
          <Button variant="outlined" color="inherit">
            Contact us
          </Button>
        </Box>
        <Box
          sx={{
            position: {
              xs: "static",
              md: "absolute",
            },
            display: "grid",
            gap: "1rem",
            gridTemplateColumns: {
              xs: "1fr",
              md: "1fr 1fr 1fr",
            },
            bottom: {
              md: "-25%",
              lg: "-20%",
              xl: "-15%",
            },
            width: {
              xs: "90%",
              xl: "70%",
            },
            margin: {
              xs: "5rem 0",
              md: "unset",
            },
          }}
        >
          {whatWeDo.map(({ title, desc }, i) => (
            <Box
              sx={{
                backgroundColor: "rgba(0, 0, 0, 0.9)",
                padding: "2rem",
                boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
                borderRadius: ".5rem",
                color: "white",
                border: "1px solid black",
              }}
              key={i}
            >
              <Typography variant="h6" mb={5}>
                {title}
              </Typography>
              {desc}
            </Box>
          ))}
        </Box>
      </div>
    </Box>
  );
};

export default Banner;
