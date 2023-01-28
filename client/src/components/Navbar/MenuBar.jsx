import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { navlinks } from "../../constants/navlinks";
import { Link as RouterLink } from "react-router-dom";

const drawerWidth = 240;

const MenuBar = ({ mobileOpen, handleDrawerToggle, container }) => {
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2, fontWeight: "bold" }}>
        Toolzia
      </Typography>
      <Divider />
      <List>
        {navlinks.map((item, i) => (
          <ListItem as={RouterLink} to={item.path} key={i} disablePadding>
            <ListItemButton sx={{ textAlign: "center", color: "black" }}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box component="nav">
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", md: "none" },
          backgroundColor: "rgba(0,0,0,0.2)",
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default MenuBar;
