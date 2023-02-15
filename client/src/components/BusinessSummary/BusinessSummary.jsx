import { Avatar, Box, Divider, Typography } from "@mui/material";
import { background } from "../../constants/background";
import { businessSummaries } from "../../constants/businessSummaries";

const BusinessSummary = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(
          ${background}
        )`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#1A191D",
        padding: "4rem 0",
        marginBottom: "5rem",
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          color: "white",
          width: "75%",
          margin: "0 auto",
        }}
      >
        <Typography variant="h4" color={"orangered"} fontWeight="700">
          MILLIONS BUSINESS TRUST US
        </Typography>
        <Typography variant="h6" color={"white"} fontWeight="700">
          TRY TO UNDERSTAND USERS EXPECTATION
        </Typography>
        <Divider
          color="white"
          sx={{
            color: "white",
            width: "10%",
            margin: "1rem auto 3rem",
          }}
        />
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              lg: "repeat(4,1fr)",
            },
            gap: {
              xs: "2rem 0",
            },
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          {businessSummaries.map(({ icon, title, amount }, i) => (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "1rem",
              }}
              key={i}
            >
              <Avatar
                alt="Remy Sharp"
                variant="square"
                src={icon}
                sx={{
                  filter:
                    "invert(100%) sepia(0%) saturate(2493%) hue-rotate(169deg) brightness(119%) contrast(100%)",
                  height: "70px",
                  width: "70px",
                }}
              />
              <Typography variant="h3">{amount}+</Typography>
              <Typography variant="h6">{title}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default BusinessSummary;
