import { Box, styled, Tab, Tabs, Typography } from "@mui/material";

const Categories = ({ handleChange, value, setCurrentPage }) => {
  const CustomTab = styled(Tab)(({ theme }) => ({
    fontWeight: "bold",
    fontSize: "10px",
    color: "white",
    padding: "0px 5px",
    [theme.breakpoints.up("md")]: {
      fontSize: "1rem",
      padding: "12px 16px",
    },
  }));

  return (
    <Box
      sx={{
        borderBottom: 1,
        borderColor: "divider",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "orangered",
        padding: "1rem",
        flexDirection: {
          xs: "column",
          md: "row",
        },
      }}
    >
      <Typography sx={{ fontSize: "1.5rem", color: "white" }}>
        Precision Tools from Toolzia
      </Typography>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
      >
        <CustomTab
          value={""}
          label="ALL Tools"
          onClick={() => setCurrentPage(1)}
        />
        <CustomTab
          value="Hand Tool"
          label="HAND TOOLS"
          onClick={() => setCurrentPage(1)}
        />
        <CustomTab
          value="Power Tool"
          label="POWER TOOLS"
          onClick={() => setCurrentPage(1)}
        />
        <CustomTab
          value="Accessory"
          label="ACCESSORIES"
          onClick={() => setCurrentPage(1)}
        />
      </Tabs>
    </Box>
  );
};

export default Categories;
