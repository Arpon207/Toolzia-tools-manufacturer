import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import HandymanIcon from "@mui/icons-material/Handyman";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import UserMenu from "./UserMenu";
import { navlinks } from "../../constants/navlinks";
import MenuBar from "./MenuBar";

const Navbar = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <AppBar
      position="fixed"
      sx={{
        boxShadow: "none",
        background: "rgba(0,0,0,.7)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <MenuBar
            mobileOpen={mobileOpen}
            handleDrawerToggle={handleDrawerToggle}
            container={container}
          />

          <HandymanIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Toolzia
          </Typography>
          <Box sx={{ flex: 1, display: { xs: "none", md: "flex" } }}>
            {navlinks.map((page, i) => (
              <Button
                key={i}
                sx={{
                  color: "white",
                  textDecoration: "none",
                  display: "block",
                }}
              >
                <RouterLink
                  style={{
                    color: "white",
                    fontWeight: "500",
                    textDecoration: "none",
                  }}
                  to={page.path}
                >
                  {page.name}
                </RouterLink>
              </Button>
            ))}
          </Box>

          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
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
                  display: { xs: "none", md: "flex" },
                  mr: 1,
                  color: "orangered",
                  fontSize: "1.8rem",
                }}
              />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".1rem",
                  color: "inherit",
                  textDecoration: "none",
                  fontSize: "1.8rem",
                }}
              >
                Toolzia
              </Typography>
            </Box>
          </Box>
          <UserMenu />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
