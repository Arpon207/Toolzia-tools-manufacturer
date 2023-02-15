import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { CustomListText } from "../../constants/CustomElements";

const Production = () => {
  const production = [
    {
      link: "/",
      name: "Technology",
    },
    {
      link: "/",
      name: "Products",
    },
    {
      link: "/",
      name: "Sales Geography",
    },
    {
      link: "/",
      name: "Quality",
    },
  ];
  return (
    <Box>
      <Typography
        color="inherit"
        sx={{
          fontWeight: 700,
          letterSpacing: ".1rem",
          textDecoration: "none",
          fontSize: "1.2rem",
        }}
      >
        Customer Services
      </Typography>
      <List>
        {production.map(({ name, link }, i) => (
          <ListItem as={Link} to={link} key={i}>
            <CustomListText>{name}</CustomListText>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Production;
