import { Box, styled, Tab, Tabs, Typography } from "@mui/material";
import "./categories.css";

const Categories = ({ handleChange, value, setCurrentPage }) => {
  const CustomTab = styled(Tab)(({ theme }) => ({
    fontWeight: "500",
    fontSize: "10px",
    color: "white",
    padding: "0px 5px",
    [theme.breakpoints.up("md")]: {
      fontSize: ".9rem",
      padding: "12px 16px",
    },
  }));

  return (
    <Box
      sx={{
        borderBottom: 1,
        backgroundColor: "var(--bg-2)",
        borderColor: "divider",
        width: "fit-content",
        margin: "0 auto 2rem",
        flexDirection: {
          xs: "column",
          md: "row",
        },
      }}
      className="categories"
    >
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
