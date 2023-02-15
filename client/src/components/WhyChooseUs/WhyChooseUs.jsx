import { Avatar, Box, Divider, Typography } from "@mui/material";
import { commitments } from "../../constants/commitments";
import background from "../../assets/background-02.png";

const WhyChooseUs = () => {
  return (
    <Box
      sx={{
        // background: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        color: "black",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "5rem 0",
      }}
    >
      <Typography component="h3" variant="h3">
        Why Choose Us
      </Typography>
      <Divider
        sx={{
          width: "15%",
          backgroundColor: "orangered",
          height: "2px",
          margin: ".3rem 0",
        }}
      />
      <Divider
        sx={{
          width: "10%",
          backgroundColor: "orangered",
          height: "2px",
          margin: ".3rem 0",
        }}
      />
      <Typography component="p" textAlign={"center"}>
        Ever since, we have dedicated ourselves to making industrial Hand tools
        with the goal to become the best manufacturers of <br />
        Tools in World. Here's some reasons why we're unique
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            sm: "1fr",
            md: "repeat(3,1fr)",
          },
          width: "80%",
          mt: "2rem",
          gap: "0 2rem",
        }}
      >
        {commitments.map(({ icon, title, desc }, i) => (
          <Box
            key={i}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: ".7rem",
            }}
          >
            <Box
              sx={{
                backgroundColor: "orangered",
                borderRadius: "50%",
                padding: "1rem",
              }}
            >
              <Avatar
                src={icon}
                sx={{
                  color: "white",
                  height: "4rem",
                  width: "4rem",
                  filter:
                    "invert(99%) sepia(3%) saturate(2067%) hue-rotate(219deg) brightness(125%) contrast(95%)",
                }}
              />
            </Box>
            <Typography component={"h5"} variant="h5">
              {title}
            </Typography>
            <Typography component={"p"} variant="p" textAlign={"center"}>
              {desc}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default WhyChooseUs;
