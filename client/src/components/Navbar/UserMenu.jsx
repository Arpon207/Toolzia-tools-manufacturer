import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link as RouterLink } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState } from "react";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const UserMenu = () => {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [user] = useState(false);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      {user ? (
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "row-reverse",
          }}
        >
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      ) : (
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "row-reverse",
          }}
        >
          <Button
            sx={{
              color: "white",
              textDecoration: "none",
              my: 2,
              display: "block",
            }}
          >
            <RouterLink
              style={{
                color: "black",
                fontWeight: "normal",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                backgroundColor: "orange",
                padding: ".5rem 1rem",
                borderRadius: ".5rem",
                color: "white",
              }}
              to={"/login"}
            >
              <AccountCircleIcon sx={{ mr: 1 }} />
              <Typography
                sx={{
                  display: { xs: "none", md: "flex" },
                  fontSize: ".9rem",
                  fontWeight: "600",
                }}
              >
                Login
              </Typography>
            </RouterLink>
          </Button>
        </Box>
      )}
    </>
  );
};

export default UserMenu;
