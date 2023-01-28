import { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { Link as RouterLink } from "react-router-dom";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const UserMenu = () => {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [user] = useState(true);

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
              display: "block",
            }}
          >
            <RouterLink
              style={{
                fontWeight: "normal",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                backgroundColor: "var(--clr-secondary)",
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
