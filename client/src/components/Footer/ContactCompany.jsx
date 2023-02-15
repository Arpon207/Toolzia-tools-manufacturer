import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { CustomListText } from "./../../constants/CustomElements";

const ContactCompany = () => {
  const contact = [
    {
      icon: <LocalPhoneIcon />,
      name: "+9194730143",
    },
    {
      icon: <WhatsAppIcon />,
      name: "+9194730143",
    },
    {
      icon: <EmailIcon />,
      name: "example@gmail.com",
    },
    {
      icon: <LocationOnIcon />,
      name: "2390 NW 2nd Ave, Miami FL33127, USA",
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
        Contact Company
      </Typography>

      <List>
        {contact.map(({ icon, name }, i) => (
          <ListItem key={i}>
            <ListItemIcon
              sx={{
                color: "lightgray",
              }}
            >
              {icon}
            </ListItemIcon>
            <CustomListText>{name}</CustomListText>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ContactCompany;
