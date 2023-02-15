import { List, ListItem, ListItemButton } from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Link } from "react-router-dom";
import { CustomListItemButton } from "../../constants/CustomElements";

const Socials = () => {
  const social = [
    {
      icon: <FacebookIcon />,
      link: "",
    },
    {
      icon: <TwitterIcon />,
      link: "",
    },
    {
      icon: <InstagramIcon />,
      link: "",
    },
    {
      icon: <YouTubeIcon />,
      link: "",
    },
  ];
  return (
    <List
      sx={{
        display: "flex",
      }}
    >
      {social.map(({ link, icon }, i) => (
        <ListItem as={Link} to={link} key={i} disablePadding>
          <CustomListItemButton sx={{ textAlign: "center", color: "white" }}>
            {icon}
          </CustomListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default Socials;
