import { Box, Button, Stack, Typography } from "@mui/material";
import image1 from "../../assets/industry.jpg";

const Greet = () => {
  return (
    <Stack
      direction={{
        sm: "column",
        md: "row",
      }}
      spacing={8}
      sx={{
        width: {
          xs: "90%",
          sm: "90%",
          md: "90%",
          lg: "80%",
          xl: "60%",
        },
        margin: "2rem auto 5rem",
      }}
    >
      <Box
        sx={{
          flex: 2,
          "& img": {
            width: "100%",
          },
        }}
      >
        <img src={image1} alt="" />
      </Box>
      <Box
        sx={{
          flex: 3,
        }}
      >
        <Typography component={"h5"} variant="h5" mb={1} color="orangered">
          Welcome to Toolzia
        </Typography>
        <Typography component={"h3"} variant="h3" fontWeight={600} mb={2}>
          We are the leading Tools manufacturer in the world
        </Typography>
        <Typography component={"p"} variant="p" mb={5}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam itaque
          voluptas facere, vero pariatur nemo doloremque quas similique libero
          deserunt voluptatem consequatur minima. Praesentium sunt architecto
          <br />
          <br />
          explicabo cumque officia. Iste cum qui ipsam facilis veniam nobis
          beatae, ratione sit accusantium, molestiae laborum deleniti quo
          commodi voluptatibus? Sint libero odit tempora excepturi molestias
          sapiente quos repudiandae rerum, officia, asperiores perferendis
          pariatur! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Quibusdam, cupiditate.
        </Typography>
        <Button variant="contained" color="warning">
          Learn More
        </Button>
      </Box>
    </Stack>
  );
};

export default Greet;
