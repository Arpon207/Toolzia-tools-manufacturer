import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { CustomListText } from "../../constants/CustomElements";

const QuickLinks = () => {
  const quickLinks = [
    {
      link: "/",
      text: "My Account",
    },
    {
      link: "/",
      text: "Login",
    },
    {
      link: "/",
      text: "Create Account",
    },
    {
      link: "/",
      text: "Site map",
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
        Quick Links
      </Typography>
      <List>
        {quickLinks.map(({ text, link }, i) => (
          <ListItem as={Link} to={link} key={i}>
            <CustomListText>{text}</CustomListText>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default QuickLinks;
