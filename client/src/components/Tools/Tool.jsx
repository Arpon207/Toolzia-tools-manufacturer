import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  styled,
  Typography,
} from "@mui/material";
import * as React from "react";

const CustomStrong = styled("span")({
  fontSize: ".9rem",
  fontWeight: "600",
});

const Tool = ({ tool }) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          md: "row",
        },
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "var(--bg-2)",
      }}
    >
      <Box
        sx={{
          flex: 3,
          color: "black",
          order: {
            xs: "2",
            md: "unset",
          },
          "& h5": {
            color: "orangered",
          },
        }}
      >
        <CardContent
          sx={{
            color: "white",
          }}
        >
          <Typography component="h5" variant="h5">
            {tool.title}
          </Typography>
          <Typography
            sx={{
              fontSize: ".9rem",
              color: "lightgray",
              m: ".5rem 0",
            }}
            component="p"
          >
            {tool.desc.slice(0, 100)}
          </Typography>
          <Typography variant="subtitle1" component="p">
            <CustomStrong>Price:</CustomStrong> $ {tool.price}.00/
            <small>piece</small>
          </Typography>
          <Typography variant="subtitle1" component="p">
            <CustomStrong>Min. Order:</CustomStrong> 20 piece
          </Typography>
          <Typography variant="subtitle1" component="p">
            <CustomStrong>Available Quantity:</CustomStrong>{" "}
            {tool.available_quantity}
          </Typography>

          <Box
            sx={{
              "& button": {
                marginRight: ".5rem",
                marginBottom: ".5rem",
                backgroundColor: "orangered",
                "&:hover": {
                  backgroundColor: "orangered",
                },
              },
              mt: ".5rem",
            }}
          >
            <Button variant="contained" size="small">
              Place Order
            </Button>
            <Button size="small" variant="contained">
              Request Sample
            </Button>
          </Box>
        </CardContent>
      </Box>
      <Box
        sx={{
          flex: 2,
        }}
      >
        <CardMedia
          component="img"
          sx={{ width: "100%" }}
          image={tool.image}
          alt="Live from space album cover"
        />
      </Box>
    </Card>
  );
};

export default Tool;
