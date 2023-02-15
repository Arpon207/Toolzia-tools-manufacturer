import { styled, Typography, ListItemButton } from "@mui/material";

export const CustomListText = styled(Typography)(({ theme }) => ({
  fontSize: ".9rem",
  color: "white",
  transition: ".3s",
  "&:hover": {
    color: "orangered",
  },
}));

export const CustomListItemButton = styled(ListItemButton)(({ theme }) => ({
  color: "white",
  transition: ".3s",
  "&:hover": {
    color: "orangered",
  },
}));
