import HandymanIcon from "@mui/icons-material/Handyman";
import { Box, Typography } from "@mui/material";
import Socials from "./Socials";

const Brand = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <HandymanIcon
          sx={{
            color: "orangered",
            fontSize: "1.8rem",
          }}
        />
        <Typography
          variant="h6"
          color="inherit"
          sx={{
            fontWeight: 700,
            letterSpacing: ".1rem",
            textDecoration: "none",
            fontSize: "1.8rem",
          }}
        >
          Toolzia
        </Typography>
      </Box>
      <Typography>
        A leading developer of A-grade commercial, industrial and residential
        projects in USA. Since its foundation the company.
      </Typography>
      <Socials />
    </Box>
  );
};

export default Brand;
